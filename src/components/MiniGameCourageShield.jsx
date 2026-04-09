import React, { useState } from 'react';
import './MiniGame.css';

const WORDS = ['Courage','Douceur','Force','Amour','Patience','Confiance','Joie','Lumière','Vérité','Solidité','Tendresse','Espoir'];

export default function MiniGameCourageShield({ onComplete, entityColor }) {
  const [chosen, setChosen] = useState([]);
  const [done, setDone] = useState(false);
  const TARGET = 3;

  const toggle = w => {
    if (chosen.includes(w)) { setChosen(p => p.filter(x=>x!==w)); return; }
    if (chosen.length >= TARGET) return;
    const n = [...chosen, w];
    setChosen(n);
    if (n.length === TARGET) setDone(true);
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Ton bouclier est prêt ✦':`Choisis 3 mots pour ton bouclier (${chosen.length}/${TARGET})`}</p>
      <div className="courageshield__shield" style={{borderColor:entityColor}}>
        <div className="courageshield__emblem" style={{color:entityColor}}>🛡</div>
        <div className="courageshield__words-placed">
          {chosen.map((w,i)=><span key={i} className="courageshield__placed-word" style={{color:entityColor}}>✦ {w}</span>)}
        </div>
      </div>
      <div className="courageshield__words">
        {WORDS.map((w,i)=>(
          <button key={i} className={`courageshield__word${chosen.includes(w)?' courageshield__word--chosen':''}`}
            style={{background:chosen.includes(w)?`${entityColor}30`:'rgba(255,255,255,.06)',borderColor:chosen.includes(w)?entityColor:'rgba(255,255,255,.1)',color:chosen.includes(w)?entityColor:'rgba(225,218,248,.7)'}}
            onClick={()=>toggle(w)} disabled={done&&!chosen.includes(w)}>{w}</button>
        ))}
      </div>
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>Mon bouclier est prêt ✦</button>}
    </div>
  );
}
