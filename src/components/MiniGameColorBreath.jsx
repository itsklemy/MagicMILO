import React, { useState } from 'react';
import './MiniGame.css';

const COLORS = ['#c4b8e8','#ff80b5','#ffd166','#4ecdc4','#ff6b8a','#a8f0eb'];

export default function MiniGameColorBreath({ onComplete, entityColor }) {
  const [breathes, setBreathes] = useState([]);
  const [phase, setPhase] = useState('inhale');
  const [done, setDone] = useState(false);
  const TARGET = 5;

  const handleBreathe = () => {
    if (phase === 'inhale') { setPhase('exhale'); return; }
    const color = COLORS[breathes.length % COLORS.length];
    setBreathes(p => { const n=[...p,color]; if(n.length>=TARGET) setDone(true); return n; });
    setPhase('inhale');
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Regarde le ciel que tu as colorié ✦':phase==='inhale'?'Inspire...':'Expire et colorie le ciel'}</p>
      <div className="colorbreath__sky">
        {breathes.map((color,i)=>(
          <div key={i} className="colorbreath__blob" style={{background:color,left:`${(i/TARGET)*80+10}%`}}/>
        ))}
        {breathes.length===0 && <div className="colorbreath__base">☁</div>}
      </div>
      {!done && (
        <button className="colorbreath__btn" style={{background:phase==='exhale'?`${entityColor}30`:'rgba(255,255,255,.06)',borderColor:phase==='exhale'?entityColor:'rgba(255,255,255,.2)',color:phase==='exhale'?entityColor:'rgba(225,218,248,.7)'}} onClick={handleBreathe}>
          {phase==='inhale'?'Inspire doucement':'Expire et colorie'}
        </button>
      )}
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>J'ai mis de la couleur ✦</button>}
    </div>
  );
}
