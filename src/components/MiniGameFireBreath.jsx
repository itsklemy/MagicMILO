import React, { useState } from 'react';
import './MiniGame.css';

export default function MiniGameFireBreath({ onComplete, entityColor }) {
  const [ext, setExt] = useState(0);
  const [blowing, setBlowing] = useState(false);
  const [done, setDone] = useState(false);
  const TOTAL = 5;

  const blow = () => {
    if (done || blowing) return;
    setBlowing(true);
    setTimeout(() => {
      setBlowing(false);
      setExt(p => { const n = p+1; if(n>=TOTAL) setDone(true); return n; });
    }, 800);
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done ? 'Tu as éteint toutes les flammes ✦' : `Souffle sur les flammes — ${TOTAL-ext} restante${TOTAL-ext>1?'s':''}`}</p>
      <div className="firebreath__flames">
        {Array.from({length:TOTAL}).map((_,i) => (
          <div key={i} className={`firebreath__flame${i<ext?' firebreath__flame--out':''}${blowing&&i===ext?' firebreath__flame--blowing':''}`}>
            {i<ext?'💨':'🔥'}
          </div>
        ))}
      </div>
      {!done && <button className="firebreath__blow-btn" style={{'--color':entityColor}} onClick={blow} disabled={blowing}>{blowing?'Soufflant...':'Souffler'}</button>}
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>J'ai éteint le feu ✦</button>}
    </div>
  );
}
