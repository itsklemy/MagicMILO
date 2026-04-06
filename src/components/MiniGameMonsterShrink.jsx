import React, { useState } from 'react';
import './MiniGames.css';

/**
 * MiniGameMonsterShrink — Réduire l'image de peur grâce à un slider.
 * @param {function} onComplete
 * @param {string} entityColor
 */
export default function MiniGameMonsterShrink({ onComplete, entityColor = '#9b8ec4' }) {
  const [size, setSize] = useState(100); // 100 = grande, 0 = toute petite
  const [finished, setFinished] = useState(false);

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    setSize(val);
    if (val <= 5 && !finished) setFinished(true);
  };

  const scale = 0.15 + (size / 100) * 0.85;

  return (
    <div className="minigame minigame--shrink">
      <h3 className="minigame__title">Rétrécis la peur</h3>
      <p className="minigame__subtitle">
        Fais glisser pour rendre l'image toute petite
      </p>

      {/* Monstre qui rétrécit */}
      <div className="shrink-stage">
        <div
          className={`shrink-monster ${finished ? 'shrink-monster--tiny' : ''}`}
          style={{
            transform: `scale(${scale})`,
            opacity: 0.3 + (size / 100) * 0.7,
            filter: `blur(${(1 - size / 100) * 3}px)`,
          }}
        >
          <span className="shrink-monster__emoji">👾</span>
          {!finished && (
            <div
              className="shrink-monster__glow"
              style={{ '--accent': entityColor }}
            />
          )}
        </div>

        {finished && (
          <div className="shrink-success">
            <span>✨</span>
            <p>Elle est toute petite maintenant !</p>
          </div>
        )}
      </div>

      {/* Slider */}
      {!finished && (
        <div className="shrink-slider-wrap">
          <span className="shrink-label">Grande</span>
          <input
            type="range"
            min="0"
            max="100"
            value={size}
            onChange={handleChange}
            className="shrink-slider"
            style={{ '--accent': entityColor }}
            aria-label="Réduire la peur"
          />
          <span className="shrink-label">Petite</span>
        </div>
      )}

      {finished && (
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
