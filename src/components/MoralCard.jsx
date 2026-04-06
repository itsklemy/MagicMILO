import React from 'react';
import './MoralCard.css';
import moralsData from '../data/morals.json';

/**
 * MoralCard — Morale finale simple et apaisante.
 * @param {string} entityId - ID de l'entité pour choisir la bonne morale
 * @param {string} entityColor - Couleur de l'entité
 * @param {function} onNext - Passage à l'écran final
 */
export default function MoralCard({ entityId, entityColor, onNext }) {
  const morals = moralsData[entityId] || [];
  // Choisir une morale aléatoire dans la liste
  const moral = morals[Math.floor(Math.random() * morals.length)];

  return (
    <div className="moral-card" style={{ '--entity-color': entityColor }}>
      <div className="moral-card__icon">🌙</div>

      <blockquote className="moral-card__quote">
        "{moral}"
      </blockquote>

      <button className="moral-card__btn" onClick={onNext}>
        Terminer la session ✦
      </button>
    </div>
  );
}
