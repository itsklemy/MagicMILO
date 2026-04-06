import React, { useState } from 'react';
import './AnimatedBook.css';

/**
 * AnimatedBook — Livre animé sur l'écran d'ouverture.
 * Clique pour lancer l'animation d'ouverture.
 * @param {function} onOpen - Callback quand le livre est ouvert
 */
export default function AnimatedBook({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Laisser l'animation se jouer avant de naviguer
    setTimeout(() => onOpen(), 1100);
  };

  return (
    <div
      className={`animated-book ${isOpening ? 'opening' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      aria-label="Ouvrir le grimoire magique"
    >
      {/* Halo lumineux autour du livre */}
      <div className="book-glow" />

      {/* Le livre SVG */}
      <div className="book-container">
        <img
          src="/src/assets/svg/book.svg"
          alt="Le Grimoire Magique"
          className="book-image"
          draggable={false}
        />
        {/* Lueur qui sort du livre quand il s'ouvre */}
        {isOpening && <div className="book-burst" />}
      </div>

      {/* Invite à cliquer */}
      {!isOpening && (
        <p className="book-hint">
          <span className="hint-sparkle">✦</span>
          Touche le grimoire pour l'ouvrir
          <span className="hint-sparkle">✦</span>
        </p>
      )}
    </div>
  );
}
