import React, { useState } from 'react';
import './AuthPremiumModal.css';

/**
 * AuthPremiumModal — Modal douce déclenchée uniquement quand l'enfant
 * veut accéder à un contenu premium. 3 étapes :
 * 1. Présentation du premium (pourquoi créer un compte)
 * 2. OAuth (Google / Apple)
 * 3. Paiement
 */
export default function AuthPremiumModal({
  isOpen,
  onClose,
  isConnected,
  isLoading,
  onGoogleLogin,
  onAppleLogin,
  onPurchase,
  onRestore,
}) {
  const [step, setStep] = useState(isConnected ? 'payment' : 'intro');

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    const result = await onGoogleLogin();
    if (result.success) setStep('payment');
  };

  const handleAppleLogin = async () => {
    const result = await onAppleLogin();
    if (result.success) setStep('payment');
  };

  const handlePurchase = async () => {
    await onPurchase();
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>

        {/* Bouton fermeture */}
        <button className="auth-modal__close" onClick={onClose} aria-label="Fermer">×</button>

        {/* ── ÉTAPE 1 : Introduction premium ────────────────── */}
        {step === 'intro' && (
          <div className="auth-modal__content">
            <div className="auth-modal__hero">
              <div className="auth-modal__stars">
                <span>✦</span><span>✦</span><span>✦</span>
              </div>
              <h2 className="auth-modal__title">
                Un monde plus grand t'attend
              </h2>
              <p className="auth-modal__subtitle">
                Avec Magic Milo Premium, Milo et tous ses amis t'accompagnent
                plus loin, plus longtemps, avec plus de magie.
              </p>
            </div>

            <ul className="auth-modal__features">
              <li>
                <span className="auth-modal__feature-icon">✨</span>
                <span>25 parcours émotionnels approfondis</span>
              </li>
              <li>
                <span className="auth-modal__feature-icon">🌟</span>
                <span>Luna, la nouvelle amie de la confiance en soi</span>
              </li>
              <li>
                <span className="auth-modal__feature-icon">💛</span>
                <span>Plus de mini-jeux, plus de formules magiques</span>
              </li>
              <li>
                <span className="auth-modal__feature-icon">🔒</span>
                <span>Tes progrès sauvegardés, partout avec toi</span>
              </li>
            </ul>

            <p className="auth-modal__account-reason">
              Un compte te permet de garder ta progression et d'accéder à tes
              aventures sur tous tes appareils.
            </p>

            <button
              className="auth-modal__cta"
              onClick={() => setStep('oauth')}
            >
              Créer mon compte ✦
            </button>

            <button className="auth-modal__secondary" onClick={onClose}>
              Pas maintenant
            </button>
          </div>
        )}

        {/* ── ÉTAPE 2 : OAuth ───────────────────────────────── */}
        {step === 'oauth' && (
          <div className="auth-modal__content">
            <div className="auth-modal__hero">
              <div className="auth-modal__milo-small">
                <MiloMini />
              </div>
              <h2 className="auth-modal__title">Rejoins le monde de Milo</h2>
              <p className="auth-modal__subtitle">
                Choisis comment tu veux te connecter. C'est rapide et sécurisé.
              </p>
            </div>

            <div className="auth-modal__oauth-buttons">
              <button
                className="auth-modal__oauth-btn auth-modal__oauth-btn--google"
                onClick={handleGoogleLogin}
                disabled={isLoading}
              >
                <GoogleIcon />
                {isLoading ? 'Connexion…' : 'Continuer avec Google'}
              </button>

              <button
                className="auth-modal__oauth-btn auth-modal__oauth-btn--apple"
                onClick={handleAppleLogin}
                disabled={isLoading}
              >
                <AppleIcon />
                {isLoading ? 'Connexion…' : 'Continuer avec Apple'}
              </button>
            </div>

            <p className="auth-modal__legal">
              En créant un compte, tu acceptes nos{' '}
              <a href="/cgu" target="_blank" rel="noopener">conditions d'utilisation</a>{' '}
              et notre{' '}
              <a href="/privacy" target="_blank" rel="noopener">politique de confidentialité</a>.
              Aucune donnée de l'enfant n'est partagée.
            </p>

            <button className="auth-modal__back" onClick={() => setStep('intro')}>
              ← Retour
            </button>
          </div>
        )}

        {/* ── ÉTAPE 3 : Paiement ────────────────────────────── */}
        {step === 'payment' && (
          <div className="auth-modal__content">
            <div className="auth-modal__hero">
              <div className="auth-modal__premium-badge">PREMIUM</div>
              <h2 className="auth-modal__title">Magic Milo Premium</h2>
              <div className="auth-modal__price">
                <span className="auth-modal__price-amount">4,99€</span>
                <span className="auth-modal__price-period">/ mois</span>
              </div>
              <p className="auth-modal__price-alt">
                ou 39,99€ / an · Annulation à tout moment
              </p>
            </div>

            <ul className="auth-modal__features">
              <li><span className="auth-modal__feature-icon">✨</span><span>30 parcours émotionnels</span></li>
              <li><span className="auth-modal__feature-icon">🌙</span><span>Nox, Brumo, Ignis, Pluma, Soli, Luna — tout débloqué</span></li>
              <li><span className="auth-modal__feature-icon">💛</span><span>Nouveaux contenus chaque mois</span></li>
              <li><span className="auth-modal__feature-icon">🔒</span><span>Progression sauvegardée et synchronisée</span></li>
            </ul>

            <button
              className="auth-modal__cta auth-modal__cta--purchase"
              onClick={handlePurchase}
              disabled={isLoading}
            >
              {isLoading ? 'Traitement…' : 'Débloquer Premium ✦'}
            </button>

            <button
              className="auth-modal__secondary"
              onClick={onRestore}
              disabled={isLoading}
            >
              Restaurer un achat existant
            </button>

            <p className="auth-modal__legal">
              Le paiement est sécurisé. Tu peux annuler à tout moment depuis
              les réglages de ton appareil.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

// ── Mini SVG Milo ─────────────────────────────────────────────────────────────
function MiloMini() {
  return (
    <svg width="60" height="60" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="mm" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#e8e0f8"/>
          <stop offset="100%" stopColor="#9b8ec4"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="108" rx="52" ry="56" fill="url(#mm)"/>
      <circle cx="84"  cy="98" r="10" fill="#f8f4ff"/>
      <circle cx="116" cy="98" r="10" fill="#f8f4ff"/>
      <circle cx="86"  cy="99" r="6"  fill="#4a3580"/>
      <circle cx="118" cy="99" r="6"  fill="#4a3580"/>
      <circle cx="89"  cy="96" r="2.5" fill="white"/>
      <circle cx="121" cy="96" r="2.5" fill="white"/>
      <path d="M88 114 Q100 124 112 114" stroke="#9b8ec4" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="76"  cy="110" rx="8" ry="5" fill="#f2c4ce" opacity=".5"/>
      <ellipse cx="124" cy="110" rx="8" ry="5" fill="#f2c4ce" opacity=".5"/>
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}
