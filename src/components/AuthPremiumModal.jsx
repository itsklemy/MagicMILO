import React, { useState } from 'react';
import './AuthPremiumModal.css';

export default function AuthPremiumModal({
  isOpen, onClose, isConnected, isLoading,
  onGoogleLogin, onPurchase, onRestore,
}) {
  const [step, setStep] = useState(isConnected ? 'payment' : 'intro');

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    localStorage.setItem('magicmilo_pending_plan', 'monthly');
    await onGoogleLogin();
  };

  const handlePurchase = async (plan = 'monthly') => {
    localStorage.setItem('magicmilo_pending_plan', plan);
    await onPurchase(plan);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose}>×</button>

        {step === 'intro' && (
          <div className="auth-modal__content">
            <div className="auth-modal__hero">
              <div className="auth-modal__stars"><span>✦</span><span>✦</span><span>✦</span></div>
              <h2 className="auth-modal__title">Un monde plus grand t'attend</h2>
              <p className="auth-modal__subtitle">
                Avec Magic Milo Premium, Milo et tous ses amis t'accompagnent plus loin, avec plus de magie.
              </p>
            </div>
            <ul className="auth-modal__features">
              <li><span className="auth-modal__feature-icon">✨</span><span>40 parcours émotionnels approfondis</span></li>
              <li><span className="auth-modal__feature-icon">🌟</span><span>Luna, Amora et Philo — entités exclusives</span></li>
              <li><span className="auth-modal__feature-icon">💛</span><span>Mini-jeux interactifs et formules magiques</span></li>
              <li><span className="auth-modal__feature-icon">🔒</span><span>Progression sauvegardée partout</span></li>
            </ul>
            <button className="auth-modal__cta" onClick={() => setStep('oauth')}>
              Créer mon compte ✦
            </button>
            <button className="auth-modal__secondary" onClick={onClose}>Pas maintenant</button>
          </div>
        )}

        {step === 'oauth' && (
          <div className="auth-modal__content">
            <div className="auth-modal__hero">
              <h2 className="auth-modal__title">Rejoins le monde de Milo</h2>
              <p className="auth-modal__subtitle">Connexion rapide et sécurisée.</p>
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
            </div>
            <p className="auth-modal__legal">
              En créant un compte, tu acceptes nos{' '}
              <a href="/cgu" target="_blank" rel="noopener">conditions d'utilisation</a>{' '}
              et notre{' '}
              <a href="/privacy" target="_blank" rel="noopener">politique de confidentialité</a>.
            </p>
            <button className="auth-modal__back" onClick={() => setStep('intro')}>← Retour</button>
          </div>
        )}

        {step === 'payment' && (
          <div className="auth-modal__content">
            <div className="auth-modal__hero">
              <div className="auth-modal__premium-badge">PREMIUM</div>
              <h2 className="auth-modal__title">Magic Milo Premium</h2>
            </div>
            <ul className="auth-modal__features">
              <li><span className="auth-modal__feature-icon">✨</span><span>40 parcours émotionnels</span></li>
              <li><span className="auth-modal__feature-icon">🌟</span><span>Luna, Amora et Philo débloquées</span></li>
              <li><span className="auth-modal__feature-icon">💛</span><span>Mini-jeux et formules magiques</span></li>
              <li><span className="auth-modal__feature-icon">🔒</span><span>Progression sauvegardée</span></li>
            </ul>
            <button
              className="auth-modal__cta auth-modal__cta--purchase"
              onClick={() => handlePurchase('yearly')}
              disabled={isLoading}
            >
              {isLoading ? 'Traitement…' : '39,99€ / an — Meilleure offre ✦'}
            </button>
            <button
              className="auth-modal__cta-secondary-purchase"
              onClick={() => handlePurchase('monthly')}
              disabled={isLoading}
            >
              4,99€ / mois
            </button>
            <button className="auth-modal__secondary" onClick={onRestore} disabled={isLoading}>
              Restaurer un achat existant
            </button>
            <p className="auth-modal__legal">Annulation à tout moment depuis les réglages.</p>
          </div>
        )}
      </div>
    </div>
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