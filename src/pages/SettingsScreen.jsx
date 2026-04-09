import React, { useState } from 'react';
import './SettingsScreen.css';

export default function SettingsScreen({ isPremium, user, onLogout, onClose, onRestore }) {
  const [showCancelInfo, setShowCancelInfo] = useState(false);

  const isIOS     = /iPhone|iPad|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  const handleManageSubscription = () => {
    if (isIOS) {
      window.location.href = 'https://apps.apple.com/account/subscriptions';
    } else if (isAndroid) {
      window.location.href = 'https://play.google.com/store/account/subscriptions';
    } else {
      window.open('https://billing.stripe.com/p/login/TON_LIEN_STRIPE', '_blank');
    }
  };

  return (
    <div className="settings-screen">

      <div className="settings-header">
        <button className="settings-back" onClick={onClose}>← Retour</button>
        <h1 className="settings-title">Réglages</h1>
        <div style={{ width: 60 }} />
      </div>

      <div className="settings-body">

        {user && (
          <section className="settings-section">
            <h2 className="settings-section-title">Mon compte</h2>
            <div className="settings-card">
              <div className="settings-row">
                <span className="settings-label">Email</span>
                <span className="settings-value">{user.email}</span>
              </div>
              {isPremium && (
                <div className="settings-row settings-row--last">
                  <span className="settings-label">Statut</span>
                  <span className="settings-value" style={{ color: '#ffd166' }}>✦ Premium actif</span>
                </div>
              )}
            </div>
          </section>
        )}

        {isPremium && (
          <section className="settings-section">
            <h2 className="settings-section-title">Mon abonnement</h2>
            <div className="settings-card">
              <div className="settings-subscription-badge">
                <span style={{ fontSize: 24, color: '#ffd166' }}>✦</span>
                <div>
                  <p className="settings-subscription-name">Magic Milo Premium</p>
                  <p className="settings-subscription-info">Actif — renouvellement automatique</p>
                </div>
              </div>

              <button className="settings-btn settings-btn--manage" onClick={handleManageSubscription}>
                Gérer mon abonnement →
              </button>

              <button className="settings-link" onClick={() => setShowCancelInfo(!showCancelInfo)}>
                Comment résilier ?
              </button>

              {showCancelInfo && (
                <div className="settings-cancel-info">
                  {isIOS && (
                    <>
                      <p className="settings-cancel-title">Sur iPhone :</p>
                      <ol className="settings-cancel-steps">
                        <li>Ouvre les <strong>Réglages</strong> de ton iPhone</li>
                        <li>Appuie sur ton <strong>prénom</strong> en haut</li>
                        <li>Va dans <strong>Abonnements</strong></li>
                        <li>Sélectionne <strong>Magic Milo Premium</strong></li>
                        <li>Appuie sur <strong>Annuler l'abonnement</strong></li>
                      </ol>
                    </>
                  )}
                  {isAndroid && (
                    <>
                      <p className="settings-cancel-title">Sur Android :</p>
                      <ol className="settings-cancel-steps">
                        <li>Ouvre <strong>Google Play Store</strong></li>
                        <li>Appuie sur ton <strong>icône profil</strong></li>
                        <li>Va dans <strong>Paiements et abonnements</strong></li>
                        <li>Sélectionne <strong>Magic Milo</strong></li>
                        <li>Appuie sur <strong>Annuler l'abonnement</strong></li>
                      </ol>
                    </>
                  )}
                  {!isIOS && !isAndroid && (
                    <>
                      <p className="settings-cancel-title">Via le web :</p>
                      <ol className="settings-cancel-steps">
                        <li>Clique sur <strong>Gérer mon abonnement</strong> ci-dessus</li>
                        <li>Clique sur <strong>Annuler l'abonnement</strong></li>
                      </ol>
                    </>
                  )}
                  <p className="settings-cancel-note">
                    L'accès Premium reste actif jusqu'à la fin de la période payée.
                  </p>
                  <p className="settings-cancel-note">
                    Une question ? <a href="mailto:orastudio.org@gmail.com">orastudio.org@gmail.com</a>
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {!isPremium && (
          <section className="settings-section">
            <h2 className="settings-section-title">Abonnement</h2>
            <div className="settings-card">
              <p className="settings-restore-text">
                Tu as déjà un abonnement Premium sur un autre appareil ?
              </p>
              <button className="settings-btn settings-btn--restore" onClick={onRestore}>
                Restaurer mon achat
              </button>
            </div>
          </section>
        )}

        <section className="settings-section">
          <h2 className="settings-section-title">Informations légales</h2>
          <div className="settings-card">
            <a href="/cgu" target="_blank" className="settings-legal-link">Conditions générales d'utilisation →</a>
            <a href="/cgv" target="_blank" className="settings-legal-link">Conditions générales de vente →</a>
            <a href="/confidentialite" target="_blank" className="settings-legal-link">Politique de confidentialité →</a>
            <div className="settings-row settings-row--last">
              <span className="settings-label">Version</span>
              <span className="settings-value">1.0.0</span>
            </div>
          </div>
        </section>

        {user && (
          <section className="settings-section">
            <button className="settings-btn settings-btn--logout" onClick={onLogout}>
              Se déconnecter
            </button>
          </section>
        )}

        <p className="settings-footer">Ora Studio · orastudio.org@gmail.com</p>

      </div>
    </div>
  );
}