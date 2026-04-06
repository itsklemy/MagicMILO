import React, { useState, useRef, useEffect } from 'react';
import './MiniGames.css';

/**
 * MiniGameRainRelease — Essuie les gouttes de pluie doucement.
 * @param {function} onComplete
 * @param {string} entityColor
 */
export default function MiniGameRainRelease({ onComplete, entityColor = '#7ec8c8' }) {
  const totalDrops = 8;
  const [wiped, setWiped] = useState(new Set());
  const done = wiped.size >= totalDrops;

  const drops = [
    { x: 15, y: 20 }, { x: 40, y: 10 }, { x: 70, y: 18 }, { x: 88, y: 30 },
    { x: 22, y: 55 }, { x: 55, y: 48 }, { x: 78, y: 62 }, { x: 35, y: 75 },
  ];

  const handleWipe = (id) => {
    setWiped(prev => new Set([...prev, id]));
  };

  return (
    <div className="minigame minigame--rain">
      <h3 className="minigame__title">Essuie la pluie douce</h3>
      <p className="minigame__subtitle">
        Clique sur chaque goutte pour la laisser partir
      </p>

      <div className="rain-stage">
        {drops.map((drop, i) => (
          <button
            key={i}
            className={`raindrop ${wiped.has(i) ? 'raindrop--gone' : ''}`}
            style={{
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              animationDelay: `${i * 0.3}s`,
              '--accent': entityColor,
            }}
            onClick={() => handleWipe(i)}
            disabled={wiped.has(i)}
            aria-label={`Essuie la goutte ${i + 1}`}
          >
            <span className="raindrop__shape">💧</span>
          </button>
        ))}

        {done && (
          <div className="rain-clear">
            <span>☀️</span>
            <p>Les larmes ont trouvé leur chemin</p>
          </div>
        )}
      </div>

      <p className="rain-progress">
        {done ? 'La pluie est passée.' : `${wiped.size} / ${totalDrops} gouttes relâchées`}
      </p>

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
