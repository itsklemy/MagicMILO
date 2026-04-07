import React, { useState } from 'react';
import './MiniGames.css';

/**
 * MiniGameFireCalm — Tapote les braises pour calmer la colère d'Ignis.
 * @param {function} onComplete
 * @param {string} entityColor
 */
export default function MiniGameFireCalm({ onComplete, entityColor = '#ff8b6a' }) {
  const totalEmbers = 10;
  const [tapped, setTapped] = useState(new Set());
  const done = tapped.size >= totalEmbers;

  // Positions prédéfinies pour les braises
  const positions = [
    { x: 18, y: 30 }, { x: 50, y: 15 }, { x: 80, y: 28 },
    { x: 12, y: 58 }, { x: 38, y: 52 }, { x: 62, y: 48 },
    { x: 85, y: 60 }, { x: 28, y: 78 }, { x: 55, y: 75 },
    { x: 78, y: 80 },
  ];

  const handleTap = (id) => {
    setTapped(prev => new Set([...prev, id]));
  };

  const intensity = 1 - tapped.size / totalEmbers;

  return (
    <div className="minigame minigame--fire">
      <h3 className="minigame__title">Calme les braises</h3>
      <p className="minigame__subtitle">
        Tapote chaque braise pour éteindre la chaleur
      </p>

      {/* Zone de jeu */}
      <div
        className="fire-stage"
        style={{
          '--fire-glow': `rgba(255, 139, 106, ${intensity * 0.4})`,
          boxShadow: `0 0 ${40 * intensity}px rgba(255, 139, 106, ${intensity * 0.5})`,
        }}
      >
        {/* Ignis en fond */}
        <img
          src="/svg/ignis.svg"
          alt=""
          className="fire-stage__entity"
          style={{ opacity: 0.15 + intensity * 0.25 }}
          aria-hidden="true"
        />

        {/* Braises */}
        {positions.map((pos, i) => (
          <button
            key={i}
            className={`ember ${tapped.has(i) ? 'ember--out' : ''}`}
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 0.2}s`,
            }}
            onClick={() => handleTap(i)}
            aria-label={`Tapote la braise ${i + 1}`}
            disabled={tapped.has(i)}
          >
            {tapped.has(i) ? '✦' : '🔥'}
          </button>
        ))}

        {/* Compteur */}
        <div className="fire-counter">
          {totalEmbers - tapped.size > 0
            ? `${totalEmbers - tapped.size} braise${totalEmbers - tapped.size > 1 ? 's' : ''} restante${totalEmbers - tapped.size > 1 ? 's' : ''}`
            : '🌿 Tout est calme !'}
        </div>
      </div>

      {done && (
        <button
          className="minigame__cta"
          style={{ '--accent': entityColor }}
          onClick={onComplete}
        >
          Continuer ✦
        </button>
      )}
    </div>
  );
}
