import React, { useState } from 'react';
import './FormulaCard.css';

/**
 * FormulaCard — Carte de la formule magique finale.
 * @param {object} formula - Objet formule (depuis formulas.json)
 * @param {string} entityColor - Couleur de l'entité
 * @param {function} onNext - Passage à l'étape suivante
 */
export default function FormulaCard({ formula, entityColor, onNext }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="formula-card" style={{ '--entity-color': entityColor }}>
      {/* Titre */}
      <div className="formula-card__header">
        <span className="formula-card__star">✦</span>
        <h2 className="formula-card__title">Ta Formule Magique</h2>
        <span className="formula-card__star">✦</span>
      </div>

      {/* La formule */}
      <div className={`formula-card__formula ${revealed ? 'formula-card__formula--revealed' : ''}`}>
        <p className="formula-card__text">
          {formula.formula}
        </p>
      </div>

      {/* Geste à faire */}
      {revealed && (
        <div className="formula-card__gesture">
          <p className="formula-card__gesture-label">Dans la vraie vie :</p>
          <p className="formula-card__gesture-text">{formula.gesture}</p>
        </div>
      )}

      {/* Boutons */}
      {!revealed ? (
        <button
          className="formula-card__btn"
          onClick={() => setRevealed(true)}
        >
          ✨ Révéler ma formule
        </button>
      ) : (
        <button
          className="formula-card__btn formula-card__btn--next"
          onClick={onNext}
        >
          Continuer →
        </button>
      )}
    </div>
  );
}
