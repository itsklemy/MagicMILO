import React, { useState } from 'react';
import './EntityCard.css';

export default function EntityCard({ entity, onSelect, index = 0, isPremiumEntity, isUnlocked }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onSelect(entity.id);
  };

  return (
    <div
      className={`entity-card ${isPremiumEntity ? 'entity-card--premium' : ''} ${!isUnlocked ? 'entity-card--locked' : ''}`}
      style={{
        '--entity-color': entity.colors.primary,
        animationDelay: `${0.1 + index * 0.08}s`,
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
    >
      <div className="entity-card__glow" />

      {isPremiumEntity && (
        <div className="entity-card__premium-badge">✦ Premium</div>
      )}

      {!isUnlocked && (
        <div className="entity-card__lock">🔒</div>
      )}

      <div className="entity-card__avatar">
        <img
          src={`/svg/${entity.id}.svg`}
          alt={entity.name}
          className="entity-card__img"
          style={{ filter: !isUnlocked ? 'brightness(0.5) saturate(0)' : 'none' }}
          draggable={false}
        />
      </div>

      <div className="entity-card__content">
        <h3 className="entity-card__name">{entity.name}</h3>
        <p className="entity-card__label">{entity.emotion_label}</p>
        <p className="entity-card__subtitle">{entity.subtitle}</p>
      </div>

      <div className="entity-card__cta">
        {!isUnlocked ? 'Débloquer →' : isHovered ? 'Aller voir →' : ''}
      </div>
    </div>
  );
}