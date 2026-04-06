import React from 'react';
import './ChatBubble.css';

/**
 * ChatBubble — Bulle de dialogue dans la conversation.
 * @param {string} text - Texte affiché
 * @param {string} speaker - 'entity' ou 'system'
 * @param {string} entityColor - Couleur de l'entité active
 * @param {boolean} animated - Active l'animation d'apparition
 */
export default function ChatBubble({ text, speaker = 'entity', entityColor, animated = true }) {
  return (
    <div className={`chat-bubble chat-bubble--${speaker} ${animated ? 'chat-bubble--animated' : ''}`}>
      <p
        className="chat-bubble__text"
        style={speaker === 'entity' ? { '--bubble-color': entityColor } : {}}
      >
        {text}
      </p>
    </div>
  );
}
