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
import { EntityHeroCard, EntityCompanionBubble, EntityEndCard } from '../components/EntityPresence';
import formulasData from '../data/formulas.json';
import entitiesData from '../data/entities.json';
import lunaData from '../data/luna.json';
import { premiumRoutes } from '../data/premiumRoutes';
import './ConversationScreen.css';

const ALL_ENTITIES = { ...entitiesData, ...lunaData };

const flowModules = {
  brumo: () => import('../data/flows/brumo.json'),
  ignis: () => import('../data/flows/ignis.json'),
  pluma: () => import('../data/flows/pluma.json'),
  nox:   () => import('../data/flows/nox.json'),
  soli:  () => import('../data/flows/soli.json'),
};

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
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ color: 'rgba(255,255,255,.6)', marginBottom: 20 }}>
            Mini-jeu à venir ✦
          </p>
          <button onClick={onComplete} className="conversation__next-btn" style={{ '--accent': entityColor }}>
            Continuer ✦
          </button>
        </div>
      );
  }
}

// Convertit un parcours premium en steps navigables
function usePremiumFlow(entityId, routeId) {
  const routes = premiumRoutes[entityId] || [];
  const route = routeId
    ? routes.find(r => r.id === routeId)
    : routes[0];
  return route || null;
}

export default function ConversationScreen({ entityId, routeId, isPremium, onEnd }) {
  const [flowData,    setFlowData]    = useState(null);
  const [loading,     setLoading]     = useState(true);
  const [premiumStep, setPremiumStep] = useState(0);
  const [showHero,    setShowHero]    = useState(true);
  const bottomRef = useRef(null);

  const entity      = ALL_ENTITIES[entityId];
  const entityColor = entity?.colors?.primary || '#9b8ec4';
  const isPremiumEntity = entity?.isPremium;

  // Parcours premium
  const premiumRoute = usePremiumFlow(entityId, routeId);
  const isUsingPremiumFlow = isPremium && (isPremiumEntity || premiumRoute);

  // Charge le flow gratuit si pas premium
  useEffect(() => {
    if (isUsingPremiumFlow) {
      setLoading(false);
      return;
    }
    setLoading(true);
    const loader = flowModules[entityId];
    if (loader) {
      loader().then(mod => {
        setFlowData(mod.default || mod);
        setLoading(false);
      });
    }
  }, [entityId, isUsingPremiumFlow]);

  const {
    currentNode,
    advance,
    choose,
    goBack,
    canGoBack,
    stepIndex,
    estimatedTotal,
  } = useFlow(isUsingPremiumFlow ? null : flowData);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentNode, premiumStep]);

  if (loading) {
    return (
      <div className="conversation-screen conversation-screen--loading">
        <div className="loading-orb" style={{ '--accent': entityColor }} />
        <p>Chargement…</p>
      </div>
    );
  }

  const formulas = formulasData[entityId] || [];
  const formula  = formulas[stepIndex % formulas.length] || formulas[0];

  // ── FLOW PREMIUM ────────────────────────────────────────────
  if (isUsingPremiumFlow && premiumRoute) {
    const steps       = premiumRoute.steps || [];
    const totalSteps  = steps.length;
    const currentStep = steps[premiumStep];
    const isLastStep  = premiumStep >= totalSteps - 1;

    const handleNext = () => {
      if (isLastStep) {
        onEnd();
      } else {
        setPremiumStep(p => p + 1);
      }
    };

    // Écran héro au début
    if (showHero) {
      return (
        <div className="conversation-screen" style={{ '--entity-color': entityColor }}>
          <FloatingParticles color={entityColor} count={8} />
          <header className="conversation__header">
            <button className="conversation__back" onClick={onEnd}>← Quitter</button>
            <div className="conversation__entity-badge">
              <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conversation__entity-avatar" />
              <span className="conversation__entity-name">{entity?.name}</span>
            </div>
            <div />
          </header>
          <div className="conversation__body">
            <EntityHeroCard
              entityId={entityId}
              name={entity?.name}
              intro={premiumRoute.steps[0]?.content}
              isPremium
            />
            <div style={{ padding: '0 20px 20px' }}>
              <h2 style={{ color: entityColor, fontFamily: 'var(--font-display)', fontSize: 18, marginBottom: 8 }}>
                {premiumRoute.title}
              </h2>
              <p style={{ color: 'rgba(225,218,248,.7)', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
                {premiumRoute.subtitle}
              </p>
              <button
                className="conversation__next-btn"
                style={{ '--accent': entityColor }}
                onClick={() => setShowHero(false)}
              >
                Commencer ce parcours ✦
              </button>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      );
    }

    return (
      <div className="conversation-screen" style={{ '--entity-color': entityColor }}>
        <FloatingParticles color={entityColor} count={8} />

        <header className="conversation__header">
          <button
            className="conversation__back"
            onClick={premiumStep > 0 ? () => setPremiumStep(p => p - 1) : onEnd}
          >
            ← {premiumStep > 0 ? 'Retour' : 'Quitter'}
          </button>
          <div className="conversation__entity-badge">
            <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conversation__entity-avatar" />
            <span className="conversation__entity-name">{entity?.name}</span>
          </div>
          <ProgressDots
            total={totalSteps}
            current={premiumStep}
            color={entityColor}
          />
        </header>

        <div className="conversation__body">
          <PremiumStepRenderer
            step={currentStep}
            entityId={entityId}
            entity={entity}
            entityColor={entityColor}
            route={premiumRoute}
            isLast={isLastStep}
            onNext={handleNext}
          />
          <div ref={bottomRef} />
        </div>
      </div>
    );
  }

  // ── FLOW GRATUIT ─────────────────────────────────────────────
  if (!currentNode) {
    return (
      <div className="conversation-screen conversation-screen--loading">
        <div className="loading-orb" style={{ '--accent': entityColor }} />
      </div>
    );
  }

  return (
    <div className="conversation-screen" style={{ '--entity-color': entityColor }}>
      <FloatingParticles color={entityColor} count={8} />
      <header className="conversation__header">
        <button
          className="conversation__back"
          onClick={canGoBack ? goBack : onEnd}
          aria-label={canGoBack ? 'Reculer' : 'Quitter'}
        >
          ← {canGoBack ? 'Retour' : 'Quitter'}
        </button>
        <div className="conversation__entity-badge">
          <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conversation__entity-avatar" />
          <span className="conversation__entity-name">{entity?.name}</span>
        </div>
        <ProgressDots
          total={estimatedTotal}
          current={Math.min(stepIndex, estimatedTotal - 1)}
          color={entityColor}
        />
      </header>
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

// ── Renderer étapes premium ───────────────────────────────────
function PremiumStepRenderer({ step, entityId, entity, entityColor, route, isLast, onNext }) {
  if (!step) return null;

  switch (step.type) {
    case 'entity-intro':
    case 'message':
      return (
        <div className="node-message">
          {step.type === 'entity-intro' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={`/svg/${entityId}.svg`} alt={entity?.name}
                style={{ width: 48, height: 48, objectFit: 'contain',
                  filter: `drop-shadow(0 0 12px ${entityColor}80)` }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: entityColor,
                textTransform: 'uppercase', letterSpacing: '.07em' }}>
                {entity?.name}
              </span>
            </div>
          )}
          <ChatBubble text={step.content} speaker="entity" entityColor={entityColor} />
          <button className="conversation__next-btn" style={{ '--accent': entityColor }} onClick={onNext}>
            {isLast ? 'Terminer le parcours ✦' : 'Je comprends →'}
          </button>
        </div>
      );

    case 'entity-bubble':
      return (
        <div className="node-message">
          <EntityCompanionBubble
            entityId={entityId}
            name={entity?.name}
            message={step.content}
          />
          <button className="conversation__next-btn" style={{ '--accent': entityColor, marginTop: 20 }} onClick={onNext}>
            {isLast ? 'Terminer ✦' : 'Continuer →'}
          </button>
        </div>
      );

    case 'question':
      return (
        <div className="node-question">
          <ChatBubble text={step.content} speaker="entity" entityColor={entityColor} />
          <div className="node-choices">
            {(step.options || []).map((opt, i) => (
              <ChoiceButton
                key={i}
                label={opt}
                onClick={onNext}
                entityColor={entityColor}
                index={i}
              />
            ))}
          </div>
        </div>
      );

    case 'interaction':
      return (
        <div className="node-minigame">
          <ChatBubble text={step.content} speaker="entity" entityColor={entityColor} />
          <div style={{ background: 'rgba(255,255,255,.05)', borderRadius: 20,
            padding: '20px', margin: '16px 0', border: `1px solid ${entityColor}40` }}>
            <p style={{ color: entityColor, fontWeight: 700, fontSize: 14,
              textAlign: 'center', marginBottom: 8 }}>
              ✦ Activité interactive
            </p>
            <p style={{ color: 'rgba(225,218,248,.7)', fontSize: 13,
              textAlign: 'center', lineHeight: 1.6 }}>
              {step.content}
            </p>
          </div>
          <button className="conversation__next-btn" style={{ '--accent': entityColor }} onClick={onNext}>
            {isLast ? 'Terminer ✦' : 'J\'ai fait l\'activité →'}
          </button>
        </div>
      );

    case 'action':
      return (
        <div className="node-reframe">
          <div className="node-reframe__badge" style={{ borderColor: entityColor }}>
            <span>✦</span>
            <p>{step.content}</p>
          </div>
          {isLast ? (
            <EntityEndCard
              entityId={entityId}
              name={entity?.name}
              endingMessage={route.moral || "Tu as fait quelque chose de courageux aujourd'hui."}
              formula={route.magicFormula}
              onNext={onNext}
            />
          ) : (
            <button className="conversation__next-btn" style={{ '--accent': entityColor }} onClick={onNext}>
              Je retiens ça →
            </button>
          )}
        </div>
      );

    default:
      return (
        <div className="node-message">
          <ChatBubble text={step.content || '...'} speaker="entity" entityColor={entityColor} />
          <button className="conversation__next-btn" style={{ '--accent': entityColor }} onClick={onNext}>
            {isLast ? 'Terminer ✦' : 'Continuer →'}
          </button>
        </div>
      );
  }
}

// ── Flow gratuit renderer (inchangé) ──────────────────────────
function NodeRenderer({ node, entity, entityColor, entityId, formula, onAdvance, onChoose, onEnd }) {
  if (!node) return null;

  switch (node.type) {
    case 'message':
      return (
        <div className="node-message">
          <ChatBubble text={node.text} speaker="entity" entityColor={entityColor} />
          <button className="conversation__next-btn" style={{ '--accent': entityColor }} onClick={onAdvance}>
            Je comprends →
          </button>
        </div>
      );

    case 'message+question':
      return (
        <div className="node-question">
          <ChatBubble text={node.text} speaker="entity" entityColor={entityColor} />
          <p className="node-question__label">{node.question}</p>
          <div className="node-choices">
            {node.options.map((opt, i) => (
              <ChoiceButton key={opt.id} label={opt.label} onClick={() => onChoose(opt)} entityColor={entityColor} index={i} />
            ))}
          </div>
        </div>
      );

    case 'question':
      return (
        <div className="node-question">
          <ChatBubble text={node.text} speaker="entity" entityColor={entityColor} />
          <div className="node-choices">
            {node.options.map((opt, i) => (
              <ChoiceButton key={opt.id} label={opt.label} onClick={() => onChoose(opt)} entityColor={entityColor} index={i} />
            ))}
          </div>
        </div>
      );

    case 'reframe':
      return (
        <div className="node-reframe">
          <div className="node-reframe__badge" style={{ borderColor: entityColor }}>
            <span>💬</span>
            <p>{node.text}</p>
          </div>
          <button className="conversation__next-btn" style={{ '--accent': entityColor }} onClick={onAdvance}>
            Oui, c'est ça →
          </button>
        </div>
      );

    case 'minigame':
      return (
        <div className="node-minigame">
          <ChatBubble text={node.intro} speaker="entity" entityColor={entityColor} />
          <MiniGameRenderer game={node.game} entityColor={entityColor} entityId={entityId} onComplete={onAdvance} />
        </div>
      );

    case 'formula':
      return (
        <div className="node-formula">
          <FormulaCard formula={formula} entityColor={entityColor} onNext={onAdvance} />
        </div>
      );

    case 'moral':
      return (
        <div className="node-moral">
          <MoralCard entityId={entityId} entityColor={entityColor} onNext={onAdvance} />
        </div>
      );

    case 'end':
      return (
        <div className="node-end">
          <div className="node-end__milo">
            <img src="/svg/milo.svg" alt="Milo" className="node-end__milo-img" />
          </div>
          <ChatBubble text={node.text} speaker="entity" entityColor="#c4b8e8" />
          <button className="conversation__next-btn conversation__next-btn--end" style={{ '--accent': entityColor }} onClick={onEnd}>
            Retourner dans la vraie vie ✦
          </button>
        </div>
      );

    default:
      return (
        <div>
          <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center' }}>(node inconnu : {node.type})</p>
          <button onClick={onAdvance}>Suivant</button>
        </div>
      );
  }
}