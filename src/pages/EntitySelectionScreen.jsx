import React from 'react';
import EntityCard from '../components/EntityCard';
import FloatingParticles from '../components/FloatingParticles';
import entitiesData from '../data/entities.json';
import lunaData from '../data/luna.json';
import './EntitySelectionScreen.css';

const ALL_ENTITIES = { ...entitiesData, ...lunaData };

export default function EntitySelectionScreen({
  onSelect,
  onShowPremium,
  isPremium,
}) {
  const entities = Object.values(ALL_ENTITIES);

  return (
    <div className="entity-screen">
      <FloatingParticles color="#c4b8e8" count={10} />

      <div className="entity-screen__inner">

        <div className="entity-screen__header">
          <p className="entity-screen__milo">Milo te demande :</p>
          <h2 className="entity-screen__question">
            Qu'est-ce qui est là,<br />en ce moment ?
          </h2>
        </div>

        <div className="entity-grid">
          {entities.map((entity, i) => (
            <EntityCard
              key={entity.id}
              entity={entity}
              onSelect={onSelect}
              index={i}
              isPremium={entity.isPremium}
            />
          ))}
        </div>

        {!isPremium && (
          <button
            className="entity-screen__premium-cta"
            onClick={onShowPremium}
          >
            ✦ Voir tous les parcours Premium
          </button>
        )}

        <p className="entity-screen__note">
          Tu peux choisir ce qui se rapproche le plus de ce que tu ressens.
        </p>
      </div>
    </div>
  );
}