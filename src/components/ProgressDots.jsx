import React from 'react';
import './ProgressDots.css';

/**
 * ProgressDots — Indicateur de progression dans la conversation.
 * @param {number} total - Nombre total d'étapes
 * @param {number} current - Étape actuelle (0-indexed)
 * @param {string} color - Couleur des dots
 */
export default function ProgressDots({ total = 5, current = 0, color = '#9b8ec4' }) {
  return (
    <div className="progress-dots" aria-label={`Étape ${current + 1} sur ${total}`}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`progress-dot ${i === current ? 'progress-dot--active' : ''} ${i < current ? 'progress-dot--done' : ''}`}
          style={{ '--dot-color': color }}
        />
      ))}
    </div>
  );
}
