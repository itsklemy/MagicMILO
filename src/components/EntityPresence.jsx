import React, { useState, useEffect } from 'react';
import './EntityPresence.css';

// ── Données des entités (couleurs + pouvoirs) ─────────────────────────────────
const ENTITY_META = {
  brumo: {
    color:   '#9b8ec4',
    light:   '#c4b8e8',
    bg:      'rgba(155,142,196,.15)',
    power:   'Apprivoiser les peurs',
    powerIcon: '🌫️',
    tagline: 'Quand quelque chose fait peur',
  },
  ignis: {
    color:   '#ff8b6a',
    light:   '#ffd0c0',
    bg:      'rgba(255,139,106,.12)',
    power:   'Transformer la colère',
    powerIcon: '🔥',
    tagline: 'Quand on est en colère',
  },
  pluma: {
    color:   '#7ec8c8',
    light:   '#a8e6cf',
    bg:      'rgba(126,200,200,.12)',
    power:   'Accueillir la tristesse',
    powerIcon: '💧',
    tagline: 'Quand on a de la peine',
  },
  nox: {
    color:   '#9b8ec4',
    light:   '#c4b8e8',
    bg:      'rgba(92,74,138,.18)',
    power:   'Garder la nuit douce',
    powerIcon: '🌙',
    tagline: 'Quand la nuit fait peur',
  },
  soli: {
    color:   '#ffd166',
    light:   '#fff0b3',
    bg:      'rgba(255,209,102,.12)',
    power:   'Tisser des liens',
    powerIcon: '✨',
    tagline: 'Quand on se sent seul',
  },
  luna: {
    color:   '#f0c060',
    light:   '#fff0a0',
    bg:      'rgba(240,192,96,.12)',
    power:   'Révéler ta lumière intérieure',
    powerIcon: '⭐',
    tagline: 'Quand on doute de soi',
    isPremium: true,
  },
};

// ═══════════════════════════════════════════════════════════
// EntityHeroCard — Grande carte héro en tête de parcours
// ═══════════════════════════════════════════════════════════
export function EntityHeroCard({ entityId, name, intro, isPremium }) {
  const meta = ENTITY_META[entityId] || {};
  return (
    <div
      className="entity-hero"
      style={{
        '--ec': meta.color,
        '--el': meta.light,
        '--eb': meta.bg,
      }}
    >
      {isPremium && <div className="entity-hero__premium-badge">✦ PREMIUM</div>}
      <div className="entity-hero__avatar-wrap">
        <div className="entity-hero__glow" />
        <img
          src={`/svg/${entityId}.svg`}
          alt={name}
          className="entity-hero__avatar"
          draggable={false}
        />
      </div>
      <div className="entity-hero__content">
        <h2 className="entity-hero__name">{name}</h2>
        <p className="entity-hero__tagline">{meta.tagline}</p>
        {intro && (
          <div className="entity-hero__intro">
            <span className="entity-hero__quote">"</span>
            {intro}
            <span className="entity-hero__quote">"</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// EntityCompanionBubble — Bulle de présence pendant le parcours
// Apparaît doucement pour rappeler que l'entité est là
// ═══════════════════════════════════════════════════════════
export function EntityCompanionBubble({ entityId, name, message, side = 'left' }) {
  const [visible, setVisible] = useState(false);
  const meta = ENTITY_META[entityId] || {};

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`companion-bubble companion-bubble--${side} ${visible ? 'companion-bubble--in' : ''}`}
      style={{ '--ec': meta.color, '--el': meta.light }}
    >
      <div className="companion-bubble__avatar">
        <img
          src={`/svg/${entityId}.svg`}
          alt={name}
          draggable={false}
        />
      </div>
      <div className="companion-bubble__content">
        <span className="companion-bubble__name">{name}</span>
        <p className="companion-bubble__message">{message}</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// EntityPowerBadge — Badge affiché sur les cartes d'entités
// Montre le "super-pouvoir" de l'entité
// ═══════════════════════════════════════════════════════════
export function EntityPowerBadge({ entityId, size = 'md' }) {
  const meta = ENTITY_META[entityId] || {};
  return (
    <div
      className={`power-badge power-badge--${size}`}
      style={{ '--ec': meta.color, '--eb': meta.bg }}
    >
      <span className="power-badge__icon">{meta.powerIcon}</span>
      <span className="power-badge__label">{meta.power}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// EntityTransitionScene — Apparition de l'entité entre les étapes
// ═══════════════════════════════════════════════════════════
export function EntityTransitionScene({ entityId, name, message, onDismiss }) {
  const meta = ENTITY_META[entityId] || {};
  return (
    <div
      className="entity-transition"
      style={{ '--ec': meta.color, '--el': meta.light, '--eb': meta.bg }}
      onClick={onDismiss}
    >
      <div className="entity-transition__bg" />
      <div className="entity-transition__content">
        <img
          src={`/svg/${entityId}.svg`}
          alt={name}
          className="entity-transition__avatar"
          draggable={false}
        />
        <p className="entity-transition__message">"{message}"</p>
        <span className="entity-transition__hint">Appuie pour continuer</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PremiumEntityShowcase — Écran de découverte des entités premium
// Présenté par Milo
// ═══════════════════════════════════════════════════════════
export function PremiumEntityShowcase({ entities, onSelectEntity, onClose }) {

  const PREMIUM_ROUTES_PREVIEW = {
    brumo: [
      "Quand mon cœur bat trop vite",
      "La peur du noir et des bruits",
      "Quand je me fais trop de souci",
      "Préparer son courage",
      "Quand mon corps se bloque",
    ],
    ignis: [
      "Quand j'explose sans l'avoir voulu",
      "Quand on m'a dit quelque chose de blessant",
      "Quand tout semble injuste",
      "Quand je veux tout casser",
      "Après la colère, la réconciliation",
    ],
    pluma: [
      "Quand quelqu'un me manque beaucoup",
      "Quand je pleure sans savoir pourquoi",
      "Quand la tristesse reste longtemps",
      "Quand quelque chose de beau est fini",
      "Quand je me sens gris de l'intérieur",
    ],
    nox: [
      "Quand les pensées tournent avant de dormir",
      "Rejouer la fin d'un mauvais rêve",
      "Créer son espace de sécurité",
      "Quand je ne veux pas aller dormir",
      "Quand la nuit semble interminable",
    ],
    soli: [
      "Quand je me sens invisible",
      "Quand j'ai été rejeté du groupe",
      "Quand je préfère être seul",
      "Trouver sa tribu",
      "Quand un ami proche s'éloigne",
    ],
    luna: [
      "Quand je ne me sens pas assez bien",
      "Quand j'ai honte de quelque chose",
      "Quand je compare sans arrêt",
      "Quand j'ai peur d'essayer",
      "Apprendre à se féliciter",
    ],
  };

  const ENTITY_ORDER = ['brumo', 'ignis', 'pluma', 'nox', 'soli', 'luna'];

  const entityMap = {};
  entities.forEach(e => { entityMap[e.id] = e; });

  return (
    <div className="premium-showcase">

      {/* Header fixe */}
      <div className="premium-showcase__topbar">
        <button className="premium-showcase__back" onClick={onClose}>
          ← Retour
        </button>
      </div>

      {/* Milo présente */}
      <div className="premium-showcase__milo">
        <img
          src="/svg/milo.svg"
          alt="Milo"
          className="premium-showcase__milo-avatar"
          draggable={false}
        />
        <div className="premium-showcase__milo-bubble">
          Tous mes amis ont des chemins spéciaux pour toi. 30 nouvelles aventures t'attendent. ✦
        </div>
      </div>

      {/* Titre */}
      <div className="premium-showcase__header">
        <span className="premium-showcase__badge">✦ PREMIUM</span>
        <h2 className="premium-showcase__title">30 parcours pour aller plus loin</h2>
        <p className="premium-showcase__subtitle">
          5 chemins inédits par ami · Des mini-jeux · Des formules magiques
        </p>
      </div>

      {/* Cartes entités avec leurs parcours */}
      <div className="premium-showcase__list">
        {ENTITY_ORDER.map((entityId, i) => {
          const entity = entityMap[entityId];
          const meta   = ENTITY_META[entityId] || {};
          const routes = PREMIUM_ROUTES_PREVIEW[entityId] || [];
          if (!entity) return null;

          return (
            <div
              key={entityId}
              className={`premium-showcase__entity-card ${entityId === 'luna' ? 'premium-showcase__entity-card--luna' : ''}`}
              style={{
                '--ec': meta.color,
                '--eb': meta.bg,
                animationDelay: `${i * 0.08}s`,
              }}
              onClick={() => onSelectEntity(entityId)}
            >
              {/* En-tête de la carte */}
              <div className="premium-showcase__entity-header">
                <img
                  src={`/svg/${entityId}.svg`}
                  alt={entity.name}
                  className="premium-showcase__entity-avatar"
                  draggable={false}
                />
                <div className="premium-showcase__entity-info">
                  <div className="premium-showcase__entity-top">
                    <h3 className="premium-showcase__entity-name">{entity.name}</h3>
                    {entityId === 'luna' && (
                      <span className="premium-showcase__new-badge">Nouveau</span>
                    )}
                  </div>
                  <p className="premium-showcase__entity-tagline">{meta.tagline}</p>
                  <div className="premium-showcase__entity-power">
                    <span>{meta.powerIcon}</span>
                    <span>{meta.power}</span>
                  </div>
                </div>
              </div>

              {/* Liste des 5 parcours */}
              <ul className="premium-showcase__routes">
                {routes.map((title, j) => (
                  <li key={j} className="premium-showcase__route-item">
                    <span className="premium-showcase__route-dot">✦</span>
                    <span>{title}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="premium-showcase__entity-cta">
                Débloquer ces parcours →
              </div>
            </div>
          );
        })}
      </div>

      {/* Bouton d'achat global */}
      <div className="premium-showcase__buy">
        <button
          className="premium-showcase__buy-btn"
          onClick={() => onSelectEntity('luna')}
        >
          Débloquer tout le Premium ✦
        </button>
        <p className="premium-showcase__buy-price">
          4,99€ / mois · ou 39,99€ / an · Résiliation à tout moment
        </p>
      </div>

    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// CompanionFooterMessage — Message doux en bas d'écran
// L'entité revient rappeler sa présence
// ═══════════════════════════════════════════════════════════
export function CompanionFooterMessage({ entityId, name, message }) {
  const [dismissed, setDismissed] = useState(false);
  const meta = ENTITY_META[entityId] || {};

  if (dismissed) return null;

  return (
    <div
      className="footer-companion"
      style={{ '--ec': meta.color }}
    >
      <img
        src={`/svg/${entityId}.svg`}
        alt={name}
        className="footer-companion__avatar"
        draggable={false}
      />
      <p className="footer-companion__message">{message}</p>
      <button
        className="footer-companion__dismiss"
        onClick={() => setDismissed(true)}
        aria-label="Fermer"
      >
        ×
      </button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// EntityEndCard — Carte de fin de parcours avec l'entité
// ═══════════════════════════════════════════════════════════
export function EntityEndCard({ entityId, name, endingMessage, formula, onNext }) {
  const meta = ENTITY_META[entityId] || {};
  return (
    <div
      className="entity-end-card"
      style={{ '--ec': meta.color, '--el': meta.light, '--eb': meta.bg }}
    >
      <div className="entity-end-card__avatar-wrap">
        <div className="entity-end-card__glow" />
        <img
          src={`/svg/${entityId}.svg`}
          alt={name}
          className="entity-end-card__avatar"
          draggable={false}
        />
      </div>
      <p className="entity-end-card__message">"{endingMessage}"</p>
      {formula && (
        <div className="entity-end-card__formula">
          <span className="entity-end-card__formula-label">✦ Ta formule magique</span>
          <p className="entity-end-card__formula-text">{formula}</p>
        </div>
      )}
      <button className="entity-end-card__btn" onClick={onNext}>
        Continuer →
      </button>
    </div>
  );
}
