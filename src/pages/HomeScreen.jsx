import React from 'react';
import GuideCard from '../components/GuideCard';
import FloatingParticles from '../components/FloatingParticles';
import './HomeScreen.css';

/**
 * HomeScreen — Présentation de Milo et invitation à choisir une émotion.
 * @param {function} onContinue - Vers l'écran de sélection des entités
 */
export default function HomeScreen({ onContinue }) {
  return (
    <div className="home-screen">
      <FloatingParticles color="#c4b8e8" count={14} />

      <div className="home-content">
        {/* Milo + ses bulles */}
        <GuideCard animated />

        {/* CTA */}
        <button
          className="home-cta"
          onClick={onContinue}
        >
          Qu'est-ce qu'il y a en ce moment ?
        </button>

        <p className="home-note">
          Pas d'obligation. Tu peux juste regarder.
        </p>
      </div>
    </div>
  );
}
