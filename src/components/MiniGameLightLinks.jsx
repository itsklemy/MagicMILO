import React, { useState } from 'react';
import './MiniGames.css';

/**
 * MiniGameLightLinks — Relie les lucioles/étoiles pour créer une constellation.
 * Utilisé pour Nox (étoiles) et Soli (lucioles).
 * @param {function} onComplete
 * @param {string} entityColor
 * @param {string} variant — 'stars' | 'fireflies'
 */
export default function MiniGameLightLinks({ onComplete, entityColor = '#ffd166', variant = 'fireflies' }) {
  const nodes = [
    { id: 0, x: 50, y: 18 },
    { id: 1, x: 78, y: 35 },
    { id: 2, x: 68, y: 68 },
    { id: 3, x: 32, y: 68 },
    { id: 4, x: 22, y: 35 },
  ];

  const [connected, setConnected] = useState(new Set());
  const [lastNode, setLastNode] = useState(null);
  const [lines, setLines] = useState([]);

  const totalLinks = nodes.length;
  const done = connected.size >= totalLinks;

  const handleNodeClick = (nodeId) => {
    if (connected.has(nodeId)) return;

    const newConnected = new Set([...connected, nodeId]);
    setConnected(newConnected);

    if (lastNode !== null && lastNode !== nodeId) {
      setLines(prev => [...prev, { from: lastNode, to: nodeId }]);
    }
    setLastNode(nodeId);
  };

  const icon = variant === 'stars' ? '✦' : '✨';

  return (
    <div className="minigame minigame--links">
      <h3 className="minigame__title">
        {variant === 'stars' ? 'Dessine ta constellation' : 'Relie les lucioles'}
      </h3>
      <p className="minigame__subtitle">
        {variant === 'stars'
          ? 'Clique sur les étoiles pour les relier'
          : 'Relie chaque luciole pour créer un cercle de lumière'}
      </p>

      {/* Zone SVG interactive */}
      <div className="links-stage">
        <svg className="links-svg" viewBox="0 0 100 90" preserveAspectRatio="xMidYMid meet">
          {/* Lignes de connexion */}
          {lines.map((line, i) => {
            const from = nodes[line.from];
            const to = nodes[line.to];
            return (
              <line
                key={i}
                x1={from.x} y1={from.y}
                x2={to.x} y2={to.y}
                stroke={entityColor}
                strokeWidth="0.8"
                strokeOpacity="0.6"
                strokeDasharray="2 1"
              />
            );
          })}

          {/* Noeuds */}
          {nodes.map(node => (
            <g
              key={node.id}
              className={`link-node ${connected.has(node.id) ? 'link-node--active' : ''}`}
              onClick={() => handleNodeClick(node.id)}
              style={{ cursor: connected.has(node.id) ? 'default' : 'pointer' }}
            >
              <circle
                cx={node.x}
                cy={node.y}
                r={connected.has(node.id) ? 5 : 3.5}
                fill={connected.has(node.id) ? entityColor : 'rgba(255,255,255,0.2)'}
                stroke={entityColor}
                strokeWidth="0.8"
                strokeOpacity="0.7"
              />
              {connected.has(node.id) && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill={entityColor}
                  fillOpacity="0.15"
                />
              )}
            </g>
          ))}
        </svg>

        {done && (
          <div className="links-complete">
            <span>🌟</span>
            <p>Un cercle de lumière autour de toi !</p>
          </div>
        )}
      </div>

      <p className="links-progress" style={{ color: entityColor }}>
        {done
          ? 'Toutes les lumières sont reliées.'
          : `${connected.size} / ${totalLinks} lumières allumées`}
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
