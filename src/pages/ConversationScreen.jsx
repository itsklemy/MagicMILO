import React, { useState, useEffect, useRef } from 'react';
import { useFlow } from '../hooks/useFlow';
import ChatBubble from '../components/ChatBubble';
import ChoiceButton from '../components/ChoiceButton';
import ProgressDots from '../components/ProgressDots';
import FloatingParticles from '../components/FloatingParticles';
import FormulaScreen from '../pages/FormulaScreen';
import FormulaCard from '../components/FormulaCard';
import MoralCard from '../components/MoralCard';
import MiniGameBreathCloud from '../components/MiniGameBreathCloud';
import MiniGameMonsterShrink from '../components/MiniGameMonsterShrink';
import MiniGameFireCalm from '../components/MiniGameFireCalm';
import MiniGameRainRelease from '../components/MiniGameRainRelease';
import MiniGameLightLinks from '../components/MiniGameLightLinks';
import MiniGameHeartBeat from '../components/MiniGameHeartBeat';
import MiniGameFireBreath from '../components/MiniGameFireBreath';
import MiniGameTearJar from '../components/MiniGameTearJar';
import MiniGameStarCatcher from '../components/MiniGameStarCatcher';
import MiniGameMirrorLight from '../components/MiniGameMirrorLight';
import MiniGameHeartWarm from '../components/MiniGameHeartWarm';
import MiniGameFriendBridge from '../components/MiniGameFriendBridge';
import MiniGameWorryJar from '../components/MiniGameWorryJar';
import MiniGameCourageShield from '../components/MiniGameCourageShield';
import MiniGameVictoryJar from '../components/MiniGameVictoryJar';
import MiniGameColorBreath from '../components/MiniGameColorBreath';
import formulasData from '../data/formulas.json';
import entitiesData from '../data/entities.json';
import lunaData from '../data/luna.json';
import amoraData from '../data/amora.json';
import philoData from '../data/philo.json';
import { premiumRoutes } from '../data/premiumRoutes';
import './ConversationScreen.css';

const ALL_ENTITIES = { ...entitiesData, ...lunaData, ...amoraData, ...philoData };

const flowModules = {
  brumo: () => import('../data/flows/brumo.json'),
  ignis: () => import('../data/flows/ignis.json'),
  pluma: () => import('../data/flows/pluma.json'),
  nox:   () => import('../data/flows/nox.json'),
  soli:  () => import('../data/flows/soli.json'),
};

function MiniGameRenderer({ game, entityColor, entityId, onComplete }) {
  const p = { onComplete, entityColor };
  switch (game) {
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
      return <button onClick={onComplete} className="conversation__next-btn" style={{'--accent':entityColor}}>Continuer ✦</button>;
  }
}

export default function ConversationScreen({ entityId, routeId, isPremium, onEnd }) {
  const [flowData, setFlowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [premiumStep, setPremiumStep] = useState(0);
  const [showFormula, setShowFormula] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const bottomRef = useRef(null);

  const entity = ALL_ENTITIES[entityId];
  const entityColor = entity?.colors?.primary || '#9b8ec4';
  const isPremiumEntity = entity?.isPremium;

  const routes = premiumRoutes[entityId] || [];
  const premiumRoute = routeId ? routes.find(r => r.id === routeId) : routes[0];
  const isUsingPremiumFlow = isPremium && premiumRoute;

  useEffect(() => {
    if (isUsingPremiumFlow) { setLoading(false); return; }
    setLoading(true);
    const loader = flowModules[entityId];
    if (loader) loader().then(mod => { setFlowData(mod.default || mod); setLoading(false); });
  }, [entityId, isUsingPremiumFlow]);

  const { currentNode, advance, choose, goBack, canGoBack, stepIndex, estimatedTotal } = useFlow(isUsingPremiumFlow ? null : flowData);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [currentNode, premiumStep, showFormula]);

  if (loading) return <div className="conversation-screen conversation-screen--loading"><div className="loading-orb" style={{'--accent':entityColor}}/></div>;

  // ── FLOW PREMIUM ────────────────────────────────────────────
  if (isUsingPremiumFlow && premiumRoute) {
    const steps = premiumRoute.steps || [];
    const totalSteps = steps.length;
    const currentStep = steps[premiumStep];
    const isLastStep = premiumStep >= totalSteps - 1;

    if (showFormula) {
      return (
        <FormulaScreen
          formula={premiumRoute.magicFormula}
          entityColor={entityColor}
          entityId={entityId}
          onNext={() => {
            setShowFormula(false);
            if (isLastStep) { onEnd(); } else { setPremiumStep(p => p + 1); }
          }}
        />
      );
    }

    const handleNext = () => {
      if (currentStep?.type === 'formula') { setShowFormula(true); return; }
      if (isLastStep) { onEnd(); } else { setPremiumStep(p => p + 1); }
    };

    // Écran héro
    if (showHero) {
      return (
        <div className="conversation-screen conversation-screen--premium" style={{'--entity-color':entityColor}}>
          <FloatingParticles color={entityColor} count={10}/>
          <header className="conversation__header">
            <button className="conversation__back" onClick={onEnd}>← Quitter</button>
            <div className="conversation__entity-badge">
              <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conversation__entity-avatar"/>
              <span className="conversation__entity-name">{entity?.name}</span>
            </div>
            <div/>
          </header>
          <div className="conversation__body">
            <div className="premium-hero">
              <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="premium-hero__entity"/>
              <div className="premium-hero__badge" style={{color:entityColor}}>✦ Parcours Premium</div>
              <h2 className="premium-hero__title" style={{color:entityColor}}>{premiumRoute.title}</h2>
              <p className="premium-hero__subtitle">{premiumRoute.subtitle}</p>
              <div className="premium-hero__info" style={{borderColor:`${entityColor}30`,background:`${entityColor}10`}}>
                ✦ {totalSteps} étapes · Formule magique · Accompagnement
              </div>
              <button className="conversation__next-btn" style={{'--accent':entityColor}} onClick={() => setShowHero(false)}>
                Commencer ✦
              </button>
            </div>
            <div ref={bottomRef}/>
          </div>
        </div>
      );
    }

    return (
      <div className="conversation-screen conversation-screen--premium" style={{'--entity-color':entityColor}}>
        <FloatingParticles color={entityColor} count={8}/>

        {/* Entité visible sur le côté */}
        <div className="premium-entity-side" style={{opacity:.15}}>
          <img src={`/svg/${entityId}.svg`} alt="" aria-hidden="true" style={{width:'100%',height:'100%',objectFit:'contain',filter:`drop-shadow(0 0 40px ${entityColor})`}}/>
        </div>

        <header className="conversation__header conversation__header--premium">
          <button className="conversation__back" onClick={premiumStep > 0 ? () => setPremiumStep(p => p-1) : onEnd}>
            ← {premiumStep > 0 ? 'Retour' : 'Quitter'}
          </button>
          <div className="conversation__entity-badge">
            <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conversation__entity-avatar"/>
            <span className="conversation__entity-name">{entity?.name}</span>
          </div>
          <ProgressDots total={totalSteps} current={premiumStep} color={entityColor}/>
        </header>

        <div className="conversation__body">
          <PremiumStepRenderer
            step={currentStep}
            entityId={entityId}
            entity={entity}
            entityColor={entityColor}
            isLast={isLastStep}
            route={premiumRoute}
            onNext={handleNext}
          />
          <div ref={bottomRef}/>
        </div>
      </div>
    );
  }

  // ── FLOW GRATUIT ─────────────────────────────────────────────
  if (!currentNode) return <div className="conversation-screen conversation-screen--loading"><div className="loading-orb" style={{'--accent':entityColor}}/></div>;

  const formulas = formulasData[entityId] || [];
  const formula = formulas[stepIndex % formulas.length] || formulas[0];

  return (
    <div className="conversation-screen" style={{'--entity-color':entityColor}}>
      <FloatingParticles color={entityColor} count={8}/>
      <header className="conversation__header">
        <button className="conversation__back" onClick={canGoBack ? goBack : onEnd}>← {canGoBack?'Retour':'Quitter'}</button>
        <div className="conversation__entity-badge">
          <img src={`/svg/${entityId}.svg`} alt={entity?.name} className="conversation__entity-avatar"/>
          <span className="conversation__entity-name">{entity?.name}</span>
        </div>
        <ProgressDots total={estimatedTotal} current={Math.min(stepIndex,estimatedTotal-1)} color={entityColor}/>
      </header>
      <div className="conversation__body">
        <NodeRenderer node={currentNode} entity={entity} entityColor={entityColor} entityId={entityId} formula={formula} onAdvance={advance} onChoose={choose} onEnd={onEnd}/>
        <div ref={bottomRef}/>
      </div>
    </div>
  );
}

function PremiumStepRenderer({ step, entityId, entity, entityColor, isLast, route, onNext }) {
  if (!step) return null;
  switch (step.type) {
    case 'entity-intro':
      return (
        <div className="node-message">
          <div className="premium-entity-intro" style={{borderColor:`${entityColor}30`,background:`${entityColor}08`}}>
            <img src={`/svg/${entityId}.svg`} alt={entity?.name} style={{width:56,height:56,objectFit:'contain',filter:`drop-shadow(0 0 16px ${entityColor}80)`,animation:'float 4s ease-in-out infinite'}}/>
            <div className="premium-entity-intro__bubble" style={{borderColor:`${entityColor}40`,background:`${entityColor}10`}}>
              <p style={{color:'rgba(225,218,248,.9)',fontSize:16,lineHeight:1.65,fontStyle:'italic'}}>{step.content}</p>
            </div>
          </div>
          <button className="conversation__next-btn" style={{'--accent':entityColor}} onClick={onNext}>{isLast?'Terminer ✦':'Je t\'écoute →'}</button>
        </div>
      );

    case 'entity-bubble':
      return (
        <div className="node-message">
          <div className="premium-bubble" style={{borderColor:`${entityColor}30`,background:`${entityColor}08`}}>
            <img src={`/svg/${entityId}.svg`} alt="" style={{width:40,height:40,objectFit:'contain',flexShrink:0,filter:`drop-shadow(0 0 10px ${entityColor}60)`}}/>
            <p style={{color:'rgba(225,218,248,.85)',fontSize:15,lineHeight:1.65,fontStyle:'italic'}}>{step.content}</p>
          </div>
          <button className="conversation__next-btn" style={{'--accent':entityColor,marginTop:20}} onClick={onNext}>{isLast?'Terminer ✦':'Continuer →'}</button>
        </div>
      );

    case 'question':
      return (
        <div className="node-question">
          <ChatBubble text={step.content} speaker="entity" entityColor={entityColor}/>
          <div className="node-choices">
            {(step.options||[]).map((opt,i) => (
              <button key={i} className="premium-choice" style={{'--color':entityColor}} onClick={onNext}>
                <span className="premium-choice__star" style={{color:entityColor}}>✦</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      );

    case 'interaction':
      return (
        <div className="node-minigame">
          <div className="premium-bubble" style={{borderColor:`${entityColor}30`,background:`${entityColor}08`}}>
            <img src={`/svg/${entityId}.svg`} alt="" style={{width:36,height:36,objectFit:'contain',flexShrink:0}}/>
            <p style={{color:'rgba(225,218,248,.85)',fontSize:14,lineHeight:1.6}}>{step.content}</p>
          </div>
          <MiniGameRenderer game={step.gameId} entityColor={entityColor} entityId={entityId} onComplete={onNext}/>
        </div>
      );

    case 'formula':
      return (
        <div className="node-message">
          <div style={{background:`${entityColor}12`,border:`1.5px solid ${entityColor}35`,borderRadius:24,padding:'20px',textAlign:'center',margin:'8px 0 24px'}}>
            <p style={{color:entityColor,fontSize:11,fontWeight:700,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:12}}>✦ Ta formule magique</p>
            <p style={{color:'white',fontFamily:'var(--font-display)',fontSize:18,lineHeight:1.5,fontWeight:700}}>{step.content}</p>
          </div>
          <button className="conversation__next-btn" style={{'--accent':entityColor}} onClick={onNext}>Je la répète ✦</button>
        </div>
      );

    case 'action':
      return (
        <div className="node-reframe">
          <div className="node-reframe__badge" style={{borderColor:entityColor}}>
            <span style={{color:entityColor}}>✦</span>
            <p>{step.content}</p>
          </div>
          <button className="conversation__next-btn" style={{'--accent':entityColor,marginTop:20}} onClick={onNext}>{isLast?'Terminer le parcours ✦':'Je retiens ça →'}</button>
        </div>
      );

    default:
      return (
        <div className="node-message">
          <ChatBubble text={step.content||'...'} speaker="entity" entityColor={entityColor}/>
          <button className="conversation__next-btn" style={{'--accent':entityColor}} onClick={onNext}>{isLast?'Terminer ✦':'Continuer →'}</button>
        </div>
      );
  }
}

function NodeRenderer({ node, entity, entityColor, entityId, formula, onAdvance, onChoose, onEnd }) {
  if (!node) return null;
  switch (node.type) {
    case 'message':
      return <div className="node-message"><ChatBubble text={node.text} speaker="entity" entityColor={entityColor}/><button className="conversation__next-btn" style={{'--accent':entityColor}} onClick={onAdvance}>Je comprends →</button></div>;
    case 'message+question':
      return <div className="node-question"><ChatBubble text={node.text} speaker="entity" entityColor={entityColor}/><p className="node-question__label">{node.question}</p><div className="node-choices">{node.options.map((opt,i)=><ChoiceButton key={opt.id} label={opt.label} onClick={()=>onChoose(opt)} entityColor={entityColor} index={i}/>)}</div></div>;
    case 'question':
      return <div className="node-question"><ChatBubble text={node.text} speaker="entity" entityColor={entityColor}/><div className="node-choices">{node.options.map((opt,i)=><ChoiceButton key={opt.id} label={opt.label} onClick={()=>onChoose(opt)} entityColor={entityColor} index={i}/>)}</div></div>;
    case 'reframe':
      return <div className="node-reframe"><div className="node-reframe__badge" style={{borderColor:entityColor}}><span>💬</span><p>{node.text}</p></div><button className="conversation__next-btn" style={{'--accent':entityColor}} onClick={onAdvance}>Oui, c'est ça →</button></div>;
    case 'minigame':
      return <div className="node-minigame"><ChatBubble text={node.intro} speaker="entity" entityColor={entityColor}/><MiniGameRenderer game={node.game} entityColor={entityColor} entityId={entityId} onComplete={onAdvance}/></div>;
    case 'formula':
      return <div className="node-formula"><FormulaCard formula={formula} entityColor={entityColor} onNext={onAdvance}/></div>;
    case 'moral':
      return <div className="node-moral"><MoralCard entityId={entityId} entityColor={entityColor} onNext={onAdvance}/></div>;
    case 'end':
      return <div className="node-end"><div className="node-end__milo"><img src="/svg/milo.svg" alt="Milo" className="node-end__milo-img"/></div><ChatBubble text={node.text} speaker="entity" entityColor="#c4b8e8"/><button className="conversation__next-btn conversation__next-btn--end" style={{'--accent':entityColor}} onClick={onEnd}>Retourner dans la vraie vie ✦</button></div>;
    default:
      return <div><p style={{color:'rgba(255,255,255,0.5)',textAlign:'center'}}>(node:{node.type})</p><button onClick={onAdvance}>Suivant</button></div>;
  }
}