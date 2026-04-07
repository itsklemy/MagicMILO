import React from 'react';
import AnimatedBook from '../components/AnimatedBook';
import FloatingParticles from '../components/FloatingParticles';
import './OpeningBookScreen.css';

/**
 * OpeningBookScreen — Premier écran. Livre animé, particules, invitation à ouvrir.
 * @param {function} onOpen - Callback vers l'écran d'accueil
 */
export default function OpeningBookScreen({ onOpen }) {
  return (
    <div className="opening-screen">
      {/* Étoiles de fond */}
      <FloatingParticles color="#c4b8e8" count={18} />
      <FloatingParticles color="#ffd166" count={8} />

      {/* Titre haut */}
      <header className="opening-header">
        <h1 className="opening-title">Le Grimoire Magique</h1>
        <p className="opening-tagline">Un espace pour tes émotions</p>
      </header>

      {/* Livre central */}
      <main className="opening-main">
        <AnimatedBook onOpen={onOpen} />
      </main>

      {/* Note du bas – sessions courtes */}
      <footer className="opening-footer">
        <p>Un court sort, puis retour dans la vraie vie ✦</p>
      </footer>
    </div>
  );
}
