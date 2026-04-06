import React, { useEffect, useState } from 'react';
import FloatingParticles from '../components/FloatingParticles';
import './EndScreen.css';

/**
 * EndScreen — Écran de conclusion d'une session.
 * Encourage l'enfant à retourner dans la vraie vie.
 * @param {string} entityColor
 * @param {string} entityId
 * @param {function} onRestart - Retour à l'accueil
 */
export default function EndScreen({ entityColor = '#c4b8e8', entityId, onRestart }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`end-screen ${visible ? 'end-screen--visible' : ''}`}
         style={{ '--entity-color': entityColor }}>
      <FloatingParticles color={entityColor} count={12} />

      <div className="end-screen__content">
        {/* Milo */}
        <div className="end-screen__milo">
          <img src="/src/assets/svg/milo.svg" alt="Milo" draggable={false} />
        </div>

        {/* Message final */}
        <div className="end-screen__message">
          <h2 className="end-screen__title">C'est bien.</h2>
          <p className="end-screen__text">
            Tu as regardé ce qui était là. C'est quelque chose de courageux.
          </p>
          <p className="end-screen__text end-screen__text--light">
            Maintenant, tu peux essayer dans la vraie vie.
          </p>
        </div>

        {/* Rappel session courte */}
        <div className="end-screen__reminder">
          <span className="end-screen__reminder-icon">🌱</span>
          <p>Une courte session suffit. Le reste se passe dehors.</p>
        </div>

        {/* Action */}
        <button className="end-screen__btn" onClick={onRestart}>
          Retourner au grimoire
        </button>
      </div>
    </div>
  );
}
