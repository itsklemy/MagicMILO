import React, { useState } from 'react';
import OpeningBookScreen     from './pages/OpeningBookScreen';
import HomeScreen            from './pages/HomeScreen';
import EntitySelectionScreen from './pages/EntitySelectionScreen';
import ConversationScreen    from './pages/ConversationScreen';
import EndScreen             from './pages/EndScreen';
import LegalScreen           from './pages/LegalScreen';
import AuthPremiumModal      from './components/AuthPremiumModal';
import { PremiumEntityShowcase } from './components/EntityPresence';
import { useAuth }           from './hooks/useAuth';
import entitiesData          from './data/entities.json';
import lunaData              from './data/luna.json';
import SettingsScreen from './pages/SettingsScreen'
import amoraData from './data/amora.json';
import philoData from './data/philo.json';
import { premiumRoutes } from './data/premiumRoutes';
import PotionProgress, { PotionFloatingIcon } from './components/PotionProgress';
import RouteSelectScreen from './pages/RouteSelectScreen';

import './styles/transitions.css';

const ALL_ENTITIES = {
  ...entitiesData,
  ...lunaData,
  ...amoraData,
  ...philoData,
};

const SCREENS = {
  OPENING:          'opening',
  HOME:             'home',
  ENTITY_SELECT:    'entity-select',
  PREMIUM_SHOWCASE: 'premium-showcase',
  CONVERSATION:     'conversation',
  END:              'end',
  LEGAL:            'legal',
  SETTINGS:         'settings',
  GRIMOIRE:         'grimoire',
  ROUTE_SELECT: 'route-select',
};
export default function App() {
  const [screen,          setScreen]          = useState(SCREENS.OPENING);
  const [selectedEntity,  setSelectedEntity]  = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedRouteId, setSelectedRouteId] = useState(null);
  const [legalDoc,        setLegalDoc]        = useState('cgu');

  const {
    user,
    isPremium,
    isConnected,
    isLoading,
    showAuthModal,
    setShowAuthModal,
    requirePremium,
    loginWithGoogle,
    loginWithApple,
    startPremiumPurchase,
    restorePurchase,
    logout,
  } = useAuth();


  const navigateTo = (nextScreen, entityId = null, routeId = null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (entityId !== null) setSelectedEntity(entityId);
      if (routeId  !== null) setSelectedRouteId(routeId);
      setScreen(nextScreen);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBookOpen        = ()      => navigateTo(SCREENS.HOME);
  const handleStartJourney    = ()      => navigateTo(SCREENS.ENTITY_SELECT);
  const handleConversationEnd = ()      => navigateTo(SCREENS.END);
  const handleEndRestart      = ()      => navigateTo(SCREENS.HOME);
  const handleShowPremium     = ()      => navigateTo(SCREENS.PREMIUM_SHOWCASE);

  const handleShowLegal = (doc) => {
    setLegalDoc(doc);
    navigateTo(SCREENS.LEGAL);
  };

const [routeSelectEntity, setRouteSelectEntity] = useState(null);

  const handleEntitySelect = (entityId) => {
  const entity = ALL_ENTITIES[entityId];
  
  // Entité premium non débloquée
  if (entity?.isPremium && !isPremium) {
    requirePremium('unlock_entity_' + entityId);
    return;
  }
  
  // Utilisateur premium sur entité avec parcours premium → écran de choix
  if (isPremium && premiumRoutes[entityId]) {
    setRouteSelectEntity(entityId);
    navigateTo(SCREENS.ROUTE_SELECT);
    return;
  }
  
  // Sinon flow gratuit
  navigateTo(SCREENS.CONVERSATION, entityId, null);
};

  const handlePremiumRouteSelect = (entityId) => {
    const allowed = requirePremium('unlock_premium_route');
    if (!allowed) return;
    navigateTo(SCREENS.CONVERSATION, entityId);
  };

  const entityColor = selectedEntity
    ? ALL_ENTITIES[selectedEntity]?.colors?.primary
    : '#c4b8e8';

  const renderScreen = () => {
    switch (screen) {

      case SCREENS.OPENING:
        return <OpeningBookScreen onOpen={handleBookOpen} />;

      case SCREENS.HOME:
  return (
    <HomeScreen
      onContinue={handleStartJourney}
      onShowPremium={handleShowPremium}
      onShowLegal={handleShowLegal}
      onShowSettings={() => navigateTo(SCREENS.SETTINGS)}
      isPremium={isPremium}
      
    />
  );

  {isPremium && screen !== SCREENS.GRIMOIRE && screen !== SCREENS.OPENING && (
  <PotionFloatingIcon onOpen={() => navigateTo(SCREENS.GRIMOIRE)} />
)}
      case SCREENS.ENTITY_SELECT:
        return (
          <EntitySelectionScreen
            onSelect={handleEntitySelect}
            onShowPremium={handleShowPremium}
            isPremium={isPremium}
            entities={ALL_ENTITIES}
          />
        );

      case SCREENS.PREMIUM_SHOWCASE:
        return (
          <PremiumEntityShowcase
            entities={Object.values(ALL_ENTITIES)}
            onSelectEntity={handlePremiumRouteSelect}
            onClose={() => navigateTo(SCREENS.ENTITY_SELECT)}
          />
        );

      case SCREENS.CONVERSATION:
        return (
          <ConversationScreen
            entityId={selectedEntity}
            routeId={selectedRouteId}
            isPremium={isPremium}
            onEnd={handleConversationEnd}
          />
        );

      case SCREENS.END:
        return (
          <EndScreen
            entityId={selectedEntity}
            entityColor={entityColor}
            onRestart={handleEndRestart}
          />
        );

        case SCREENS.SETTINGS:
  return (
    <SettingsScreen
      isPremium={isPremium}
      user={user}
      onLogout={logout}
      onClose={() => navigateTo(SCREENS.HOME)}
      onRestore={restorePurchase}
      onShowLegal={handleShowLegal}
    />
  );

  case SCREENS.GRIMOIRE:
  return (
    <PotionProgress
      onClose={() => navigateTo(SCREENS.HOME)}
    />
  );

      case SCREENS.LEGAL:
        return (
          <LegalScreen
            initialDoc={legalDoc}
            onClose={() => navigateTo(SCREENS.HOME)}
          />
        );

        case SCREENS.ROUTE_SELECT:
  return (
    <RouteSelectScreen
      entityId={routeSelectEntity}
      entity={ALL_ENTITIES[routeSelectEntity]}
      onSelectRoute={(routeId) => navigateTo(SCREENS.CONVERSATION, routeSelectEntity, routeId)}
      onBack={() => navigateTo(SCREENS.ENTITY_SELECT)}
    />
  );



      default:
        return <OpeningBookScreen onOpen={handleBookOpen} />;
    }
  };

  return (
    <>
      <div className={`app-root ${isTransitioning ? 'app-root--out' : 'app-root--in'}`}>
        {renderScreen()}
      </div>

      <AuthPremiumModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        isConnected={isConnected}
        isLoading={isLoading}
        onGoogleLogin={loginWithGoogle}
        onAppleLogin={loginWithApple}
        onPurchase={startPremiumPurchase}
        onRestore={restorePurchase}
      />
    </>
  );
}