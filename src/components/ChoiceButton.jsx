import React from 'react';
import './ChoiceButton.css';

/**
 * ChoiceButton — Bouton de réponse dans la conversation.
 * @param {string} label - Texte du bouton
 * @param {function} onClick - Action au clic
 * @param {string} entityColor - Couleur accent de l'entité
 * @param {number} index - Pour décaler l'animation
 * @param {boolean} disabled - Désactive le bouton
 */
export default function ChoiceButton({ label, onClick, entityColor, index = 0, disabled = false }) {
  return (
    <button
      className="choice-btn"
      onClick={onClick}
      disabled={disabled}
      style={{
        '--accent': entityColor || '#9b8ec4',
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <span className="choice-btn__dot" />
      <span className="choice-btn__label">{label}</span>
    </button>
  );
}
