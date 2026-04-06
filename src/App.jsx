import React, { useState } from 'react';
import OpeningBookScreen from './pages/OpeningBookScreen';
import HomeScreen from './pages/HomeScreen';
import EntitySelectionScreen from './pages/EntitySelectionScreen';
import ConversationScreen from './pages/ConversationScreen';
import EndScreen from './pages/EndScreen';
import entitiesData from './data/entities.json';
import './styles/transitions.css';

/**
 * ÉCRANS DE L'APPLICATION
 * opening → home → entity-select → conversation → end → home
 */
const SCREENS = {
  OPENING:       'opening',
  HOME:          'home',
  ENTITY_SELECT: 'entity-select',
  CONVERSATION:  'conversation',
  END:           'end',
};

export default function App() {
  const [screen, setScreen]               = useState(SCREENS.OPENING);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /** Navigation avec fondu entre écrans */
  const navigateTo = (nextScreen, entityId = null) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (entityId !== null) setSelectedEntity(entityId);
      setScreen(nextScreen);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBookOpen       = ()         => navigateTo(SCREENS.HOME);
  const handleStartJourney   = ()         => navigateTo(SCREENS.ENTITY_SELECT);
  const handleEntitySelect   = (entityId) => navigateTo(SCREENS.CONVERSATION, entityId);
  const handleConversationEnd= ()         => navigateTo(SCREENS.END);
  const handleEndRestart     = ()         => navigateTo(SCREENS.HOME);

  const entityColor = selectedEntity
    ? entitiesData[selectedEntity]?.colors?.primary
    : '#c4b8e8';

  const renderScreen = () => {
    switch (screen) {
      case SCREENS.OPENING:
        return <OpeningBookScreen onOpen={handleBookOpen} />;

      case SCREENS.HOME:
        return <HomeScreen onContinue={handleStartJourney} />;

      case SCREENS.ENTITY_SELECT:
        return <EntitySelectionScreen onSelect={handleEntitySelect} />;

      case SCREENS.CONVERSATION:
        return (
          <ConversationScreen
            entityId={selectedEntity}
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

      default:
        return <OpeningBookScreen onOpen={handleBookOpen} />;
    }
  };

  return (
    <div className={`app-root ${isTransitioning ? 'app-root--out' : 'app-root--in'}`}>
      {renderScreen()}
    </div>
  );
}
