import React, { useState, useEffect, useRef } from 'react';
import FloatingParticles from '../components/FloatingParticles';
import FormulaScreen from '../pages/FormulaScreen';

// Mini-jeux gratuits
import MiniGameBreathCloud   from '../components/MiniGameBreathCloud';
import MiniGameMonsterShrink from '../components/MiniGameMonsterShrink';
import MiniGameFireCalm      from '../components/MiniGameFireCalm';
import MiniGameRainRelease   from '../components/MiniGameRainRelease';
import MiniGameLightLinks    from '../components/MiniGameLightLinks';

// Mini-jeux premium
import MiniGameHeartBeat     from '../components/MiniGameHeartBeat';
import MiniGameFireBreath    from '../components/MiniGameFireBreath';
import MiniGameTearJar       from '../components/MiniGameTearJar';
import MiniGameStarCatcher   from '../components/MiniGameStarCatcher';
import MiniGameMirrorLight   from '../components/MiniGameMirrorLight';
import MiniGameHeartWarm     from '../components/MiniGameHeartWarm';
import MiniGameFriendBridge  from '../components/MiniGameFriendBridge';
import MiniGameWorryJar      from '../components/MiniGameWorryJar';
import MiniGameCourageShield from '../components/MiniGameCourageShield';
import MiniGameVictoryJar    from '../components/MiniGameVictoryJar';
import MiniGameColorBreath   from '../components/MiniGameColorBreath';

import entitiesData from '../data/entities.json';
import lunaData     from '../data/luna.json';
import amoraData    from '../data/amora.json';
import philoData    from '../data/philo.json';
import { premiumRoutes } from '../data/premiumRoutes';
import { recordProgress } from '../components/PotionProgress';

import './ConversationScreen.css';

const ALL_ENTITIES = { ...entitiesData, ...lunaData, ...amoraData, ...philoData };

import brumoFlow from '../data/flows/brumo.json';
import ignisFlow from '../data/flows/ignis.json';
import plumaFlow from '../data/flows/pluma.json';
import noxFlow   from '../data/flows/nox.json';
import soliFlow  from '../data/flows/soli.json';

const flowModules = {
  brumo: brumoFlow,
  ignis: ignisFlow,
  pluma: plumaFlow,
  nox:   noxFlow,
  soli:  soliFlow,
};

// ── Renderer mini-jeux ────────────────────────────────────────
function MiniGameRenderer({ gameId, entityColor, entityId, onComplete }) {
  const p = { onComplete, entityColor };
  switch (gameId) {
    case 'BreathCloud':    return <MiniGameBreathCloud {...p}/>;
    case 'MonsterShrink':  return <MiniGameMonsterShrink {...p}/>;
    case 'FireCalm':       return <MiniGameFireCalm {...p}/>;
    case 'RainRelease':    return <MiniGameRainRelease {...p}/>;
    case 'LightLinks':     return <MiniGameLightLinks {...p} variant={entityId==='nox'?'stars':'fireflies'}/>;
    case 'HeartBeat':      return <MiniGameHeartBeat {...p}/>;
    case 'FireBreath':     return <MiniGameFireBreath {...p}/>;
    case 'TearJar':        return <MiniGameTearJar {...p}/>;
    case 'StarCatcher':    return <MiniGameStarCatcher {...p}/>;
    case 'MirrorLight':    return <MiniGameMirrorLight {...p}/>;
    case 'HeartWarm':      return <MiniGameHeartWarm {...p}/>;
    case 'FriendBridge':   return <MiniGameFriendBridge {...p}/>;
    case 'WorryJar':       return <MiniGameWorryJar {...p}/>;
    case 'CourageShield':  return <MiniGameCourageShield {...p}/>;
    case 'VictoryJar':     return <MiniGameVictoryJar {...p}/>;
    case 'ColorBreath':    return <MiniGameColorBreath {...p}/>;
    default:
      return (
        <button className="conv__btn" style={{'--accent':entityColor}} onClick={onComplete}>
          Continuer ✦
        </button>
      );
  }
}

// ── Composant principal ───────────────────────────────────────
export default function ConversationScreen({ entityId, routeId, isPremium, onEnd }) {
  const [loading,     setLoading]     = useState(true);
  const [freeFlow,    setFreeFlow]    = useState(null);
  const [history,     setHistory]     = useState([]);  // étapes visitées
  const [current,     setCurrent]     = useState(null); // étape courante
  const [showFormula, setShowFormula] = useState(false);
  const [showHero,    setShowHero]    = useState(true);
  const [chosenLabel, setChosenLabel] = useState(null); // réponse sélectionnée
  const bottomRef = useRef(null);

  const entity      = ALL_ENTITIES[entityId];
  const entityColor = entity?.colors?.primary || '#9b8ec4';
  const routes      = premiumRoutes[entityId] || [];
  const route       = routeId ? routes.find(r => r.id === routeId) : routes[0];
  const isPremiumFlow = isPremium && route;

  // ── Charge flow gratuit ───────────────────────────────────
  useEffect(() => {
    if (isPremiumFlow) { setLoading(false); return; }
    const flow = flowModules[entityId];
if (flow) { setFreeFlow(flow); setLoading(false); }
else setLoading(false);
  }, [entityId, isPremiumFlow]);

  // ── Init parcours premium ─────────────────────────────────
  useEffect(() => {
    if (!isPremiumFlow || !route) return;
    const first = route.steps?.find(s => s.id === 'start') || route.steps?.[0];
    if (first) setCurrent(first);
  }, [isPremiumFlow, route]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [current, showFormula, history]);

  // ── Navigation dans le parcours premium ──────────────────
  const getStep = (id) => route?.steps?.find(s => s.id === id);

  const goNext = (nextId) => {
  if (!nextId) {
    recordProgress(entityId);
    onEnd();
    return;
  }

    if (nextId === 'formula') {
      setShowFormula(true);
      return;
    }
    const next = getStep(nextId);
    if (next) {
      setHistory(h => [...h, current]);
      setCurrent(next);
      setChosenLabel(null);
    } else {
      recordProgress(entityId);
      onEnd();
    }
  };

  const goBack = () => {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(h => h.slice(0, -1));
    setCurrent(prev);
    setChosenLabel(null);
  };

  const handleChoice = (option) => {
    setChosenLabel(option.label);
    setTimeout(() => goNext(option.next), 400);
  };

  // ── Affiche formule plein écran ───────────────────────────
  if (showFormula && route) {
    return (
      <FormulaScreen
        formula={route.magicFormula}
        entityColor={entityColor}
        entityId={entityId}
        onNext={() => {
          setShowFormula(false);
          recordProgress(entityId);
          onEnd();
        }}
      />
    );
  }

  if (loading) return <LoadingScreen entityColor={entityColor} />;

  // ── FLOW GRATUIT ──────────────────────────────────────────
  if (!isPremiumFlow) {
    return (
      <FreeConversation
        entityId={entityId}
        entity={entity}
        entityColor={entityColor}
        flowData={freeFlow}
        onEnd={onEnd}
      />
    );
  }

  // ── Écran héro ────────────────────────────────────────────
  if (showHero) {
    return (
      <div className="conv-screen conv-screen--premium" style={{'--ec': entityColor}}>
        <FloatingParticles color={entityColor} count={10}/>
        <header className="conv__header">
          <button className="conv__back" onClick={onEnd}>← Quitter</button>
          <EntityBadge entity={entity} entityId={entityId} entityColor={entityColor}/>
          <div style={{width:60}}/>
        </header>
        <div className="conv__body">
          <div className="conv-hero">
            <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conv-hero__img" style={{filter:`drop-shadow(0 0 28px ${entityColor})`}}/>
            <div className="conv-hero__badge" style={{color:entityColor}}>✦ Parcours Premium</div>
            <h2 className="conv-hero__title" style={{color:entityColor}}>{route?.title}</h2>
            <p className="conv-hero__subtitle">{route?.subtitle}</p>
            <div className="conv-hero__info" style={{borderColor:`${entityColor}30`,background:`${entityColor}10`}}>
              ✦ 8 étapes · Accompagnement personnalisé · Formule magique
            </div>
            <button className="conv__cta" style={{'--accent':entityColor}} onClick={()=>setShowHero(false)}>
              Commencer ✦
            </button>
          </div>
          <div ref={bottomRef}/>
        </div>
      </div>
    );
  }

  // ── FLOW PREMIUM ──────────────────────────────────────────
  if (!current) return <LoadingScreen entityColor={entityColor}/>;

  return (
    <div className="conv-screen conv-screen--premium" style={{'--ec': entityColor}}>
      <FloatingParticles color={entityColor} count={6}/>

      {/* Entité fantôme sur le côté */}
      <div className="conv__entity-ghost">
        <img src={`/svg/${entityId}.svg`} alt="" aria-hidden="true"
          style={{width:'100%',height:'100%',objectFit:'contain',filter:`drop-shadow(0 0 40px ${entityColor})`}}/>
      </div>

      <header className="conv__header">
        <button className="conv__back" onClick={history.length > 0 ? goBack : onEnd}>
          ← {history.length > 0 ? 'Retour' : 'Quitter'}
        </button>
        <EntityBadge entity={entity} entityId={entityId} entityColor={entityColor}/>
        <div style={{width:60}}/>
      </header>

      <div className="conv__body">
        <StepRenderer
          step={current}
          entity={entity}
          entityId={entityId}
          entityColor={entityColor}
          chosenLabel={chosenLabel}
          onNext={goNext}
          onChoice={handleChoice}
        />
        <div ref={bottomRef}/>
      </div>
    </div>
  );
}

// ── Renderer d'une étape ──────────────────────────────────────
function StepRenderer({ step, entity, entityId, entityColor, chosenLabel, onNext, onChoice }) {
  if (!step) return null;

  switch (step.type) {

    case 'entity-intro':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={step.content}/>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onNext(step.next)}>
            Je t'écoute →
          </button>
        </div>
      );

    case 'entity-bubble':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={step.content}/>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onNext(step.next)}>
            {step.btnLabel || 'Continuer →'}
          </button>
        </div>
      );

    case 'question':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={step.content}/>
          <div className="conv-choices">
            {step.options.map((opt, i) => (
              <button
                key={i}
                className={`conv-choice ${chosenLabel===opt.label ? 'conv-choice--chosen' : ''}`}
                style={{'--color': entityColor}}
                onClick={() => onChoice(opt)}
              >
                <span className="conv-choice__star" style={{color:entityColor}}>✦</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );

    case 'interaction':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={step.content}/>
          <MiniGameRenderer
            gameId={step.gameId}
            entityColor={entityColor}
            entityId={entityId}
            onComplete={() => onNext(step.next)}
          />
        </div>
      );

    case 'adult-alert':
      return (
        <div className="conv-step">
          <div className="conv-adult-alert" style={{borderColor:`${entityColor}50`,background:`${entityColor}10`}}>
            <img src={`/svg/${entityId}.svg`} alt="" style={{width:52,height:52,objectFit:'contain'}}/>
            <div>
              <p className="conv-adult-alert__title" style={{color:entityColor}}>
                {step.title || 'Parler à un adulte de confiance'}
              </p>
              <p className="conv-adult-alert__text">{step.content}</p>
            </div>
          </div>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onNext(step.next)}>
            {step.btnLabel || 'Je vais essayer →'}
          </button>
        </div>
      );

    case 'action':
      return (
        <div className="conv-step">
          <div className="conv-action" style={{borderColor:`${entityColor}40`,background:`${entityColor}08`}}>
            <p className="conv-action__label" style={{color:entityColor}}>✦ Pour ce soir</p>
            <p className="conv-action__text">{step.content}</p>
          </div>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onNext(step.next)}>
            {step.btnLabel || 'Je retiens ça ✦'}
          </button>
        </div>
      );

    case 'formula':
      return (
        <div className="conv-step">
          <div className="conv-formula" style={{borderColor:`${entityColor}40`,background:`${entityColor}10`}}>
            <p className="conv-formula__label" style={{color:entityColor}}>✦ Ta formule magique</p>
            <p className="conv-formula__text">{step.content}</p>
          </div>
          <button className="conv__btn conv__btn--gold" style={{'--accent':entityColor}} onClick={()=>onNext(step.next)}>
            Je la répète ✦
          </button>
        </div>
      );

    default:
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={step.content||'...'}/>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onNext(step.next)}>
            Continuer →
          </button>
        </div>
      );
  }
}

// ── Sous-composants ───────────────────────────────────────────
function EntitySpeech({ entityId, entity, entityColor, text }) {
  return (
    <div className="conv-speech">
      <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conv-speech__avatar"
        style={{filter:`drop-shadow(0 0 14px ${entityColor}80)`}}/>
      <div className="conv-speech__bubble" style={{borderColor:`${entityColor}35`,background:`${entityColor}10`}}>
        <p className="conv-speech__text">{text}</p>
      </div>
    </div>
  );
}

function EntityBadge({ entity, entityId, entityColor }) {
  return (
    <div className="conv-badge">
      <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conv-badge__img"/>
      <span className="conv-badge__name" style={{color:entityColor}}>{entity?.name}</span>
    </div>
  );
}

function LoadingScreen({ entityColor }) {
  return (
    <div className="conv-screen conv-screen--loading">
      <div className="loading-orb" style={{'--accent':entityColor}}/>
    </div>
  );
}

// ── Flow gratuit simplifié ────────────────────────────────────
function FreeConversation({ entityId, entity, entityColor, flowData, onEnd }) {
  const [nodeId, setNodeId] = useState('start');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [nodeId]);

  if (!flowData) return <LoadingScreen entityColor={entityColor}/>;
  console.log('flowData:', flowData);
console.log('nodeId:', nodeId);
console.log('nodes:', flowData?.nodes);
console.log('node:', flowData?.nodes?.[nodeId]);

const nodes = flowData.nodes || flowData;
const node = nodes[nodeId] || nodes.start;
if (!node) return <LoadingScreen entityColor={entityColor}/>;

  const advance = (nextId) => {
    if (!nextId || nextId === 'end') { onEnd(); return; }
   const nodes = flowData.nodes || flowData;
if (nodes[nextId]) setNodeId(nextId);
else onEnd();
  };

  return (
    <div className="conv-screen" style={{'--ec': entityColor}}>
      <FloatingParticles color={entityColor} count={8}/>
      <header className="conv__header">
        <button className="conv__back" onClick={onEnd}>← Quitter</button>
        <EntityBadge entity={entity} entityId={entityId} entityColor={entityColor}/>
        <div style={{width:60}}/>
      </header>
      <div className="conv__body">
        <FreeNodeRenderer
          node={node}
          entity={entity}
          entityId={entityId}
          entityColor={entityColor}
          onAdvance={advance}
          onEnd={onEnd}
        />
        <div ref={bottomRef}/>
      </div>
    </div>
  );
}

function FreeNodeRenderer({ node, entity, entityId, entityColor, onAdvance, onEnd }) {
  if (!node) return null;
  switch (node.type) {
    case 'message':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={node.text}/>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onAdvance(node.next)}>
            Je comprends →
          </button>
        </div>
      );
    case 'question':
    case 'message+question':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={node.text||node.question}/>
          <div className="conv-choices">
            {(node.options||[]).map((opt,i) => (
              <button key={i} className="conv-choice" style={{'--color':entityColor}} onClick={()=>onAdvance(opt.next||opt.id)}>
                <span className="conv-choice__star" style={{color:entityColor}}>✦</span>
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    case 'minigame':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={node.intro||node.text}/>
          <MiniGameRenderer gameId={node.game} entityColor={entityColor} entityId={entityId} onComplete={()=>onAdvance(node.next)}/>
        </div>
      );
    case 'end':
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={node.text}/>
          <button className="conv__btn conv__btn--end" style={{'--accent':entityColor}} onClick={onEnd}>
            Retourner dans la vraie vie ✦
          </button>
        </div>
      );
    default:
      return (
        <div className="conv-step">
          <EntitySpeech entityId={entityId} entity={entity} entityColor={entityColor} text={node.text||'...'}/>
          <button className="conv__btn" style={{'--accent':entityColor}} onClick={()=>onAdvance(node.next)}>
            Continuer →
          </button>
        </div>
      );
  }
}
