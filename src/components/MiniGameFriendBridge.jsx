import React, { useState } from 'react';
import './MiniGame.css';

const WORDS = [
  { word: 'Pardon', good: true }, { word: 'Merci', good: true },
  { word: 'Je t\'écoute', good: true }, { word: 'Tu comptes', good: true },
  { word: 'Je suis là', good: true }, { word: 'Jamais', good: false },
  { word: 'Toujours', good: false }, { word: 'C\'est ta faute', good: false },
];

export default function MiniGameFriendBridge({ onComplete, entityColor }) {
  const [placed, setPlaced] = useState([]);
  const [used, setUsed] = useState([]);
  const [done, setDone] = useState(false);
  const TARGET = 4;

  const handleWord = item => {
    setUsed(p => [...p, item.word]);
    if (item.good) setPlaced(p => { const n=[...p,item.word]; if(n.length>=TARGET) setDone(true); return n; });
  };

  const remaining = WORDS.filter(w => !used.includes(w.word));

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Le pont est solide ✦':`Choisis les mots qui construisent le pont (${placed.length}/${TARGET})`}</p>
      <div className="friendbridge__bridge" style={{borderColor:entityColor}}>
        <span className="friendbridge__person">🧒</span>
        <div className="friendbridge__planks">
          {placed.map((w,i)=><span key={i} className="friendbridge__plank" style={{background:`${entityColor}25`,borderColor:entityColor,color:entityColor}}>{w}</span>)}
        </div>
        <span className="friendbridge__person">🧒</span>
      </div>
      {!done && (
        <div className="friendbridge__words">
          {remaining.map((item,i)=>(
            <button key={i} className="friendbridge__word" style={{'--color':entityColor}} onClick={()=>handleWord(item)}>{item.word}</button>
          ))}
        </div>
      )}
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>Le pont est construit ✦</button>}
    </div>
  );
}
