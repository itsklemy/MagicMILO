import React from 'react';
import EntityCard from '../components/EntityCard';
import FloatingParticles from '../components/FloatingParticles';
import entitiesData from '../data/entities.json';
import './EntitySelectionScreen.css';

/**
 * EntitySelectionScreen — Choix de l'entité/émotion.
 * @param {function} onSelect - (entityId) => void
 */
export default function EntitySelectionScreen({ onSelect }) {
  const entities = Object.values(entitiesData);

  return (
    <div className="entity-screen">
      <FloatingParticles color="#c4b8e8" count={10} />

      <div className="entity-screen__inner">
        {/* Chapeau */}
        <div className="entity-screen__header">
          <p className="entity-screen__milo">Milo te demande :</p>
          <h2 className="entity-screen__question">
            Qu'est-ce que tu ressens là,<br />en ce moment ?
          </h2>
        </div>

        {/* Grille des entités */}
        <div className="entity-grid">
          {entities.map((entity, i) => (
            <EntityCard
              key={entity.id}
              entity={entity}
              onSelect={onSelect}
              index={i}
            />
          ))}
        </div>

        <p className="entity-screen__note">
          Choisis ce qui se rapproche le plus de ce que ton émotion.
        </p>
      </div>
    </div>
  );
}
