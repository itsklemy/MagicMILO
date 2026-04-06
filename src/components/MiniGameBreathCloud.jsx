import React, { useState, useRef } from 'react';
import './MiniGames.css';

/**
 * MiniGameBreathCloud — Souffle sur le nuage pour le faire bouger.
 * Aide à ralentir le corps par la respiration consciente.
 * @param {function} onComplete - Appelé quand le mini-jeu est terminé
 * @param {string} entityColor - Couleur de l'entité
 */
export default function MiniGameBreathCloud({ onComplete, entityColor = '#9b8ec4' }) {
  const [phase, setPhase] = useState('ready'); // ready | inhale | exhale | done
  const [round, setRound] = useState(0);
  const totalRounds = 3;
  const timerRef = useRef(null);

  const startBreath = () => {
    if (phase !== 'ready') return;
    runCycle(0);
  };

  const runCycle = (r) => {
    setPhase('inhale');
    timerRef.current = setTimeout(() => {
      setPhase('exhale');
      timerRef.current = setTimeout(() => {
        const next = r + 1;
        setRound(next);
        if (next >= totalRounds) {
          setPhase('done');
        } else {
          runCycle(next);
        }
      }, 4000);
    }, 4000);
  };

  const phaseLabel = {
    ready: 'Tape ici pour commencer',
    inhale: 'Inspire… gonfle le ventre…',
    exhale: 'Expire… souffle doucement…',
    done: 'Bien joué ! Ton corps est plus calme maintenant.',
  };

  return (
    <div className="minigame minigame--breath">
      <h3 className="minigame__title">Souffle sur le nuage</h3>

      {/* Cloud visuel réactif */}
      <div
        className={`breath-cloud ${phase}`}
        style={{ '--accent': entityColor }}
        onClick={phase === 'ready' ? startBreath : undefined}
        role={phase === 'ready' ? 'button' : undefined}
        tabIndex={phase === 'ready' ? 0 : undefined}
        onKeyDown={e => e.key === 'Enter' && phase === 'ready' && startBreath()}
        aria-label={phase === 'ready' ? 'Commencer la respiration' : undefined}
      >
        {/* Puffs du nuage */}
        <div className="breath-cloud__body">
          <div className="breath-cloud__puff breath-cloud__puff--1" />
          <div className="breath-cloud__puff breath-cloud__puff--2" />
          <div className="breath-cloud__puff breath-cloud__puff--3" />
        </div>
        {/* Étoiles internes */}
        <div className="breath-cloud__stars">
          {'✦✦✦'.split('').map((s, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.3}s` }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Instruction */}
      <p className="minigame__instruction">{phaseLabel[phase]}</p>

      {/* Compteur */}
      {phase !== 'ready' && phase !== 'done' && (
        <div className="breath-counter">
          {Array.from({ length: totalRounds }, (_, i) => (
            <div
              key={i}
              className={`breath-counter__dot ${i < round ? 'done' : ''} ${i === round ? 'active' : ''}`}
              style={{ '--accent': entityColor }}
            />
          ))}
        </div>
      )}

      {/* Bouton terminer */}
      {phase === 'done' && (
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
