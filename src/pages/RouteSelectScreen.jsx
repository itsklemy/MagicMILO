import React from 'react';
import FloatingParticles from '../components/FloatingParticles';
import { premiumRoutes } from '../data/premiumRoutes';
import './RouteSelectScreen.css';

export default function RouteSelectScreen({ entityId, entity, onSelectRoute, onBack }) {
  const routes = premiumRoutes[entityId] || [];
  const entityColor = entity?.colors?.primary || '#9b8ec4';

  return (
    <div className="route-select" style={{ '--entity-color': entityColor }}>
      <FloatingParticles color={entityColor} count={8} />

      <header className="route-select__header">
        <button className="route-select__back" onClick={onBack}>← Retour</button>
        <div className="route-select__entity">
          <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="route-select__entity-img" />
          <span className="route-select__entity-name" style={{ color: entityColor }}>{entity?.name}</span>
        </div>
        <div style={{ width: 60 }} />
      </header>

      <div className="route-select__body">
        <p className="route-select__question">
          Qu'est-ce qui te touche aujourd'hui ?
        </p>

        <div className="route-select__list">
          {routes.map((route, i) => (
            <button
              key={route.id}
              className="route-select__item"
              style={{ '--color': entityColor, animationDelay: `${i * 0.08}s` }}
              onClick={() => onSelectRoute(route.id)}
            >
              <span className="route-select__item-star" style={{ color: entityColor }}>✦</span>
              <div className="route-select__item-content">
                <p className="route-select__item-title">{route.title}</p>
                <p className="route-select__item-subtitle">{route.subtitle}</p>
              </div>
              <span className="route-select__item-arrow" style={{ color: entityColor }}>→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}