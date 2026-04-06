import React, { useMemo } from 'react';
import './FloatingParticles.css';

/**
 * FloatingParticles — Particules lumineuses animées en arrière-plan
 * @param {string} color - Couleur de base des particules (hex)
 * @param {number} count - Nombre de particules (défaut: 20)
 */
export default function FloatingParticles({ color = '#c4b8e8', count = 20 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 6,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [count]);

  return (
    <div className="floating-particles" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            backgroundColor: color,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
