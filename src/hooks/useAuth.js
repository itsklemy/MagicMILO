import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

const KEYS = {
  PREMIUM:        'magicmilo_premium',
  PREMIUM_EXPIRY: 'magicmilo_premium_expiry',
  CUSTOMER_ID:    'magicmilo_stripe_customer',
  PENDING_PLAN:   'magicmilo_pending_plan',
}

export function useAuth() {
  const [user,          setUser]          = useState(null)
  const [isPremium,     setIsPremium]     = useState(false)
  const [isLoading,     setIsLoading]     = useState(true)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authIntent,    setAuthIntent]    = useState(null)

useEffect(() => {
  // Vérifie d'abord le retour Stripe
  const params = new URLSearchParams(window.location.search)
  const sessionId = params.get('session_id')
  if (sessionId) {
    verifyPayment(sessionId)
    window.history.replaceState({}, '', window.location.pathname)
  }

  supabase.auth.getSession().then(({ data: { session } }) => {
    setUser(session?.user ?? null)
    _checkPremium()
    setIsLoading(false)

    // Récupère le plan en attente APRÈS connexion OAuth
    const pendingPlan = localStorage.getItem(KEYS.PENDING_PLAN)
    if (session?.user && pendingPlan) {
      localStorage.removeItem(KEYS.PENDING_PLAN)
      setTimeout(() => _launchStripe(session.user, pendingPlan), 800)
    }
  })

  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      setUser(session?.user ?? null)
      _checkPremium()

      // SIGNED_IN = retour OAuth Google/Apple
      if (event === 'SIGNED_IN') {
        const pendingPlan = localStorage.getItem(KEYS.PENDING_PLAN)
        if (pendingPlan && session?.user) {
          localStorage.removeItem(KEYS.PENDING_PLAN)
          setTimeout(() => _launchStripe(session.user, pendingPlan), 800)
        }
      }
    }
  )

  return () => subscription.unsubscribe()
}, [])

  function _checkPremium() {
    const stored = localStorage.getItem(KEYS.PREMIUM)
    const expiry = localStorage.getItem(KEYS.PREMIUM_EXPIRY)
    if (stored === 'active') {
      if (!expiry || new Date(expiry) > new Date()) {
        setIsPremium(true)
      } else {
        setIsPremium(false)
        localStorage.removeItem(KEYS.PREMIUM)
      }
    }
  }

  async function _launchStripe(currentUser, plan) {
    try {
      const priceId = plan === 'yearly'
        ? import.meta.env.VITE_STRIPE_PRICE_YEARLY
        : import.meta.env.VITE_STRIPE_PRICE_MONTHLY

      const res = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          plan,
          userId:    currentUser?.id    || 'anonymous',
          userEmail: currentUser?.email || null,
        })
      })

      const { url } = await res.json()
      window.location.href = url
    } catch (err) {
      console.error('Erreur paiement:', err)
    }
  }

  const isAnonymous = !user
  const isConnected = !!user

  const requirePremium = useCallback((intent = 'unlock_premium') => {
    if (isPremium) return true
    setAuthIntent(intent)
    setShowAuthModal(true)
    return false
  }, [isPremium])

  const loginWithGoogle = useCallback(async () => {
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      })
      if (error) throw error
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const loginWithApple = useCallback(async () => {
    setIsLoading(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'apple',
        options: {
          redirectTo: window.location.origin,
        }
      })
      if (error) throw error
      return { success: true }
    } catch (err) {
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }, [])

  const startPremiumPurchase = useCallback(async (plan = 'monthly') => {
    setIsLoading(true)
    try {
      // Si pas connecté → sauvegarde le plan et ouvre OAuth
      if (!user) {
        localStorage.setItem(KEYS.PENDING_PLAN, plan)
        setShowAuthModal(true)
        setIsLoading(false)
        return
      }
      // Si connecté → lance Stripe directement
      await _launchStripe(user, plan)
    } catch (err) {
      console.error('Erreur paiement:', err)
      setIsLoading(false)
    }
  }, [user])

  const verifyPayment = useCallback(async (sessionId) => {
    try {
      const res = await fetch('/.netlify/functions/verify-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId })
      })
      const data = await res.json()
      if (data.isPremium) {
        localStorage.setItem(KEYS.PREMIUM, 'active')
        if (data.currentPeriodEnd) {
          localStorage.setItem(KEYS.PREMIUM_EXPIRY, data.currentPeriodEnd)
        }
        if (data.customerId) {
          localStorage.setItem(KEYS.CUSTOMER_ID, data.customerId)
        }
        setIsPremium(true)
      }
    } catch (err) {
      console.error('Erreur vérification paiement:', err)
    }
  }, [])

  const restorePurchase = useCallback(async () => {
    setIsLoading(true)
    try {
      _checkPremium()
      return { success: true, restored: isPremium }
    } finally {
      setIsLoading(false)
    }
  }, [isPremium])

  const logout = useCallback(async () => {
    await supabase.auth.signOut()
    setUser(null)
    setIsPremium(false)
    localStorage.removeItem(KEYS.PREMIUM)
    localStorage.removeItem(KEYS.PREMIUM_EXPIRY)
    localStorage.removeItem(KEYS.CUSTOMER_ID)
    localStorage.removeItem(KEYS.PENDING_PLAN)
  }, [])

  return {
    user,
    isLoading,
    isAnonymous,
    isConnected,
    isPremium,
    showAuthModal,
    setShowAuthModal,
    authIntent,
    requirePremium,
    loginWithGoogle,
    loginWithApple,
    startPremiumPurchase,
    restorePurchase,
    verifyPayment,
    logout,
  }
}