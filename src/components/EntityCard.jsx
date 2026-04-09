import React, { useState } from 'react';
import './EntityCard.css';

export default function EntityCard({ entity, onSelect, index = 0, isPremium }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`entity-card ${isPremium ? 'entity-card--premium' : ''}`}
      style={{
        '--entity-color': entity.colors.primary,
        '--entity-bg': entity.colors.background,
        animationDelay: `${0.1 + index * 0.1}s`,
      }}
      onClick={() => onSelect(entity.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(entity.id)}
      aria-label={`Parler à ${entity.name} — ${entity.emotion_label}`}
    >
      <div className="entity-card__glow" />

      {isPremium && (
        <div className="entity-card__premium-badge">✦ Premium</div>
      )}

      <div className="entity-card__avatar">
        <img
          src={`/svg/${entity.id}.svg`}
          alt={entity.name}
          className={`entity-card__img ${isHovered ? 'entity-card__img--hover' : ''}`}
          draggable={false}
        />
      </div>

      <div className="entity-card__content">
        <h3 className="entity-card__name">{entity.name}</h3>
        <p className="entity-card__label">{entity.emotion_label}</p>
        <p className="entity-card__subtitle">{entity.subtitle}</p>
      </div>

      <div className="entity-card__cta">
        <span>{isPremium ? 'Débloquer →' : 'Aller voir →'}</span>
      </div>
    </div>
  );
}
