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

import './styles/transitions.css';

const ALL_ENTITIES = {
  ...entitiesData,
  ...lunaData,
};

const SCREENS = {
  OPENING:          'opening',
  HOME:             'home',
  ENTITY_SELECT:    'entity-select',
  PREMIUM_SHOWCASE: 'premium-showcase',
  CONVERSATION:     'conversation',
  END:              'end',
  LEGAL:            'legal',
  SETTINGS: 'settings',
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

  const handleEntitySelect = (entityId, routeId = null) => {
    const entity = ALL_ENTITIES[entityId];
    if (entity?.isPremium) {
      const allowed = requirePremium('unlock_entity_' + entityId);
      if (!allowed) return;
    }
    navigateTo(SCREENS.CONVERSATION, entityId, routeId);
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
    />
  );

      case SCREENS.LEGAL:
        return (
          <LegalScreen
            initialDoc={legalDoc}
            onClose={() => navigateTo(SCREENS.HOME)}
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