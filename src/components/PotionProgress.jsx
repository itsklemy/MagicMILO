import React, { useState, useEffect } from 'react';
import './PotionProgress.css';

const POTIONS = [
  { entityId: 'brumo', label: 'Peur',       color: '#9b8ec4', total: 5 },
  { entityId: 'ignis', label: 'Colère',     color: '#ff8b6a', total: 5 },
  { entityId: 'pluma', label: 'Tristesse',  color: '#7ec8c8', total: 5 },
  { entityId: 'nox',   label: 'Cauchemars', color: '#5c4a8a', total: 5 },
  { entityId: 'soli',  label: 'Solitude',   color: '#ffd166', total: 5 },
  { entityId: 'luna',  label: 'Confiance',  color: '#f0c060', total: 5 },
  { entityId: 'amora', label: 'Amour',      color: '#ff6b8a', total: 5 },
  { entityId: 'philo', label: 'Amitié',     color: '#4ecdc4', total: 5 },
];

function getProgress() {
  return JSON.parse(localStorage.getItem('magicmilo_progress') || '{}');
}

export function PotionFloatingIcon({ onOpen }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calc = () => {
      const p = getProgress();
      setTotal(POTIONS.reduce((acc, pot) => acc + (p[pot.entityId] || 0), 0));
    };
    calc();
    window.addEventListener('magicmilo_progress_update', calc);
    return () => window.removeEventListener('magicmilo_progress_update', calc);
  }, []);

  return (
    <button className="potion-float" onClick={onOpen} aria-label="Mon grimoire">
      <span>🧪</span>
      {total > 0 && <span className="potion-float__badge">{total}</span>}
    </button>
  );
}

export default function PotionProgress({ onClose }) {
  const [progress, setProgress] = useState(getProgress());
  const [formulas, setFormulas] = useState([]);

  useEffect(() => {
    setProgress(getProgress());
    setFormulas(JSON.parse(localStorage.getItem('magicmilo_formulas') || '[]'));
  }, []);

  return (
    <div className="potion-screen">
      <div className="potion-screen__header">
        <button className="potion-screen__back" onClick={onClose}>← Retour</button>
        <h1 className="potion-screen__title">Mon Grimoire</h1>
        <div style={{ width: 60 }} />
      </div>

      <div className="potion-screen__body">

        <section className="potion-section">
          <h2 className="potion-section__title">✦ Mes potions magiques</h2>
          <p className="potion-section__subtitle">Chaque parcours terminé remplit ta potion</p>
          <div className="potion-grid">
            {POTIONS.map(pot => {
              const filled = Math.min(progress[pot.entityId] || 0, pot.total);
              const pct = (filled / pot.total) * 100;
              const isFull = filled >= pot.total;
              return (
                <div key={pot.entityId} className={`potion-card${isFull ? ' potion-card--full' : ''}`}>
                  <div className="potion-bottle" style={{ '--color': pot.color }}>
                    <div className="potion-bottle__neck" />
                    <div className="potion-bottle__body">
                      <div className="potion-bottle__fill" style={{ height: `${pct}%`, background: `linear-gradient(to top, ${pot.color}, ${pot.color}80)` }} />
                      {isFull && (
                        <div className="potion-bottle__bubbles">
                          {[0,1,2].map(i => (
                            <div key={i} className="potion-bottle__bubble" style={{ left: `${20+i*25}%`, animationDelay: `${i*.4}s`, background: pot.color }} />
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="potion-bottle__entity">
                      <img src={`/svg/${pot.entityId}.svg`} alt={pot.label} style={{ width: 28, height: 28, objectFit: 'contain' }} />
                    </div>
                  </div>
                  <p className="potion-label" style={{ color: pot.color }}>{pot.label}</p>
                  <p className="potion-count">{filled}/{pot.total}</p>
                  {isFull && <p className="potion-full">✦ Magie complète</p>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="potion-section">
          <h2 className="potion-section__title">⭐ Mes formules magiques</h2>
          {formulas.length === 0 ? (
            <p className="potion-section__empty">Tes formules apparaîtront ici après chaque parcours ✦</p>
          ) : (
            <div className="formula-list">
              {formulas.map((f, i) => (
                <div key={i} className="formula-item">
                  <img src={`/svg/${f.entityId}.svg`} alt="" style={{ width: 28, height: 28, objectFit: 'contain', flexShrink: 0 }} />
                  <p className="formula-item__text">« {f.text} »</p>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export function recordProgress(entityId) {
  const data = getProgress();
  data[entityId] = Math.min((data[entityId] || 0) + 1, 5);
  localStorage.setItem('magicmilo_progress', JSON.stringify(data));
  window.dispatchEvent(new Event('magicmilo_progress_update'));
}