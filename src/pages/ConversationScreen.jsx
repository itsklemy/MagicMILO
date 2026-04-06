import React, { useState, useEffect, useRef } from 'react';
import { useFlow } from '../hooks/useFlow';
import ChatBubble from '../components/ChatBubble';
import ChoiceButton from '../components/ChoiceButton';
import ProgressDots from '../components/ProgressDots';
import MiniGameBreathCloud from '../components/MiniGameBreathCloud';
import MiniGameMonsterShrink from '../components/MiniGameMonsterShrink';
import MiniGameFireCalm from '../components/MiniGameFireCalm';
import MiniGameRainRelease from '../components/MiniGameRainRelease';
import MiniGameLightLinks from '../components/MiniGameLightLinks';
import FormulaCard from '../components/FormulaCard';
import MoralCard from '../components/MoralCard';
import FloatingParticles from '../components/FloatingParticles';
import formulasData from '../data/formulas.json';
import entitiesData from '../data/entities.json';
import './ConversationScreen.css';

// Charge le flow JSON dynamiquement depuis les imports statiques
const flowModules = {
  brumo: () => import('../data/flows/brumo.json'),
  ignis: () => import('../data/flows/ignis.json'),
  pluma: () => import('../data/flows/pluma.json'),
  nox:   () => import('../data/flows/nox.json'),
  soli:  () => import('../data/flows/soli.json'),
};

// Mappe le type de mini-jeu au composant
function MiniGameRenderer({ game, entityColor, entityId, onComplete }) {
  switch (game) {
    case 'BreathCloud':
      return <MiniGameBreathCloud onComplete={onComplete} entityColor={entityColor} />;
    case 'MonsterShrink':
      return <MiniGameMonsterShrink onComplete={onComplete} entityColor={entityColor} />;
    case 'FireCalm':
      return <MiniGameFireCalm onComplete={onComplete} entityColor={entityColor} />;
    case 'RainRelease':
      return <MiniGameRainRelease onComplete={onComplete} entityColor={entityColor} />;
    case 'LightLinks':
      return (
        <MiniGameLightLinks
          onComplete={onComplete}
          entityColor={entityColor}
          variant={entityId === 'nox' ? 'stars' : 'fireflies'}
        />
      );
    default:
      return (
        <div style={{ textAlign: 'center' }}>
          <button onClick={onComplete} className="conversation__next-btn" style={{ '--accent': entityColor }}>
            Continuer ✦
          </button>
        </div>
      );
  }
}

/**
 * ConversationScreen — Écran principal de la conversation et des mini-jeux.
 * @param {string} entityId - ID de l'entité choisie
 * @param {function} onEnd - Retour à l'accueil ou sélection
 */
export default function ConversationScreen({ entityId, onEnd }) {
  const [flowData, setFlowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const bottomRef = useRef(null);

  const entity = entitiesData[entityId];
  const entityColor = entity?.colors?.primary || '#9b8ec4';

  // Charger le flow
  useEffect(() => {
    setLoading(true);
    const loader = flowModules[entityId];
    if (loader) {
      loader().then(mod => {
        setFlowData(mod.default || mod);
        setLoading(false);
      });
    }
  }, [entityId]);

  const {
    currentNode,
    advance,
    choose,
    goBack,
    canGoBack,
    stepIndex,
    estimatedTotal,
  } = useFlow(flowData);

  // Scroll automatique vers le bas à chaque nouveau node
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentNode]);

  if (loading || !currentNode) {
    return (
      <div className="conversation-screen conversation-screen--loading">
        <div className="loading-orb" style={{ '--accent': entityColor }} />
        <p>Chargement…</p>
      </div>
    );
  }

  // Sélectionner une formule en fonction du chemin
  const formulas = formulasData[entityId] || [];
  const formula = formulas[stepIndex % formulas.length] || formulas[0];

  return (
    <div className="conversation-screen" style={{ '--entity-color': entityColor }}>
      <FloatingParticles color={entityColor} count={8} />

      {/* Header avec entité et progression */}
      <header className="conversation__header">
        <button
          className="conversation__back"
          onClick={canGoBack ? goBack : onEnd}
          aria-label={canGoBack ? 'Reculer' : 'Quitter'}
        >
          ← {canGoBack ? 'Retour' : 'Quitter'}
        </button>

        <div className="conversation__entity-badge">
          <img
            src={`/src/assets/svg/${entityId}.svg`}
            alt={entity?.name}
            className="conversation__entity-avatar"
          />
          <span className="conversation__entity-name">{entity?.name}</span>
        </div>

        <ProgressDots
          total={estimatedTotal}
          current={Math.min(stepIndex, estimatedTotal - 1)}
          color={entityColor}
        />
      </header>

      {/* Zone de contenu scrollable */}
      <div className="conversation__body">
        <NodeRenderer
          node={currentNode}
          entity={entity}
          entityColor={entityColor}
          entityId={entityId}
          formula={formula}
          onAdvance={advance}
          onChoose={choose}
          onEnd={onEnd}
        />
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

/**
 * NodeRenderer — Affiche le bon contenu selon le type de node.
 */
function NodeRenderer({ node, entity, entityColor, entityId, formula, onAdvance, onChoose, onEnd }) {
  if (!node) return null;

  switch (node.type) {
    // Message simple de l'entité
    case 'message':
      return (
        <div className="node-message">
          <ChatBubble text={node.text} speaker="entity" entityColor={entityColor} />
          <button
            className="conversation__next-btn"
            style={{ '--accent': entityColor }}
            onClick={onAdvance}
          >
            Je comprends →
          </button>
        </div>
      );

    // Message puis question
    case 'message+question':
      return (
        <div className="node-question">
          <ChatBubble text={node.text} speaker="entity" entityColor={entityColor} />
          <p className="node-question__label">{node.question}</p>
          <div className="node-choices">
            {node.options.map((opt, i) => (
              <ChoiceButton
                key={opt.id}
                label={opt.label}
                onClick={() => onChoose(opt)}
                entityColor={entityColor}
                index={i}
              />
            ))}
          </div>
        </div>
      );

    // Question pure
    case 'question':
      return (
        <div className="node-question">
          <ChatBubble text={node.text} speaker="entity" entityColor={entityColor} />
          <div className="node-choices">
            {node.options.map((opt, i) => (
              <ChoiceButton
                key={opt.id}
                label={opt.label}
                onClick={() => onChoose(opt)}
                entityColor={entityColor}
                index={i}
              />
            ))}
          </div>
        </div>
      );

    // Reformulation
    case 'reframe':
      return (
        <div className="node-reframe">
          <div className="node-reframe__badge" style={{ borderColor: entityColor }}>
            <span>💬</span>
            <p>{node.text}</p>
          </div>
          <button
            className="conversation__next-btn"
            style={{ '--accent': entityColor }}
            onClick={onAdvance}
          >
            Oui, c'est ça →
          </button>
        </div>
      );

    // Mini-jeu
    case 'minigame':
      return (
        <div className="node-minigame">
          <ChatBubble text={node.intro} speaker="entity" entityColor={entityColor} />
          <MiniGameRenderer
            game={node.game}
            entityColor={entityColor}
            entityId={entityId}
            onComplete={onAdvance}
          />
        </div>
      );

    // Formule magique
    case 'formula':
      return (
        <div className="node-formula">
          <FormulaCard
            formula={formula}
            entityColor={entityColor}
            onNext={onAdvance}
          />
        </div>
      );

    // Morale finale
    case 'moral':
      return (
        <div className="node-moral">
          <MoralCard
            entityId={entityId}
            entityColor={entityColor}
            onNext={onAdvance}
          />
        </div>
      );

    // Écran de fin
    case 'end':
      return (
        <div className="node-end">
          <div className="node-end__milo">
            <img src="/src/assets/svg/milo.svg" alt="Milo" className="node-end__milo-img" />
          </div>
          <ChatBubble text={node.text} speaker="entity" entityColor="#c4b8e8" />
          <button
            className="conversation__next-btn conversation__next-btn--end"
            style={{ '--accent': entityColor }}
            onClick={onEnd}
          >
            Retourner dans la vraie vie ✦
          </button>
        </div>
      );

    default:
      return (
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>
            (node inconnu : {node.type})
          </p>
          <button onClick={onAdvance}>Suivant</button>
        </div>
      );
  }
}
