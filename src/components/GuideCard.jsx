import React from 'react';
import './GuideCard.css';
import characters from '../data/characters.json';

/**
 * GuideCard — Le guide Milo, présenté de façon accueillante.
 * @param {string[]} lines - Lignes de texte à afficher (override le JSON si fourni)
 * @param {boolean} animated - Active l'animation d'apparition
 */
export default function GuideCard({ lines, animated = true }) {
  const milo = characters.milo;
  const textLines = lines || milo.greeting;

  return (
    <div className={`guide-card ${animated ? 'guide-card--animated' : ''}`}>
      {/* Avatar Milo */}
      <div className="guide-avatar">
        <div className="guide-avatar-glow" />
        <img
          src="/svg/milo.svg"
          alt="Milo, ton guide"
          className="guide-avatar-img"
          draggable={false}
        />
      </div>

      {/* Bulles de texte */}
      <div className="guide-speech">
        {textLines.map((line, i) => (
          <div
            key={i}
            className="guide-bubble"
            style={{ animationDelay: `${0.3 + i * 0.25}s` }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
