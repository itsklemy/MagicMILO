import React from 'react';
import GuideCard from '../components/GuideCard';
import FloatingParticles from '../components/FloatingParticles';
import './HomeScreen.css';

export default function HomeScreen({ onContinue, onShowPremium, onShowLegal, isPremium }) {
  return (
    <div className="home-screen">
      <FloatingParticles color="#c4b8e8" count={14} />

      <div className="home-content">
        <GuideCard animated />

        <button className="home-cta" onClick={onContinue}>
          Qu'est-ce qu'il y a en ce moment ?
        </button>

        {!isPremium && (
          <button className="home-premium-btn" onClick={onShowPremium}>
            ✦ Découvrir le monde Premium
          </button>
        )}

        {isPremium && (
          <div className="home-premium-active">
            ✦ Magic Milo Premium actif
          </div>
        )}

        <p className="home-note">
          Pas d'obligation. Tu peux juste regarder.
        </p>
      </div>

      <div className="home-legal">
        <button className="home-legal-btn" onClick={() => onShowLegal('cgu')}>CGU</button>
        <span className="home-legal-dot">·</span>
        <button className="home-legal-btn" onClick={() => onShowLegal('cgv')}>CGV</button>
        <span className="home-legal-dot">·</span>
        <button className="home-legal-btn" onClick={() => onShowLegal('privacy')}>Confidentialité</button>
        <span className="home-legal-dot">·</span>
        <a className="home-legal-btn" href="mailto:orastudio.org@gmail.com">Contact</a>
      </div>

    </div>
  );
}