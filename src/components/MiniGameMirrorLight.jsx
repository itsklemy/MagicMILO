import React, { useState } from 'react';
import './MiniGame.css';

export default function MiniGameMirrorLight({ onComplete, entityColor }) {
  const [angle, setAngle] = useState(0);
  const [filled, setFilled] = useState(0);
  const [done, setDone] = useState(false);
  const TARGET = 45;

  const handleSlider = e => {
    const val = Number(e.target.value);
    setAngle(val);
    const dist = Math.abs(val - TARGET);
    const pct = Math.max(0, 100 - (dist / 20) * 100);
    setFilled(pct);
    if (dist <= 20 && pct >= 80 && !done) setTimeout(() => setDone(true), 800);
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'La lumière est revenue sur toi ✦':'Oriente le prisme pour envoyer la lumière vers ton reflet'}</p>
      <div className="mirrorlight__scene">
        <div className="mirrorlight__prism" style={{transform:`rotate(${angle}deg)`}}>💎</div>
        <div className="mirrorlight__ray" style={{opacity:filled/100,background:`linear-gradient(90deg,${entityColor}00,${entityColor}cc,${entityColor}00)`,transform:`rotate(${angle-45}deg)`}}/>
        <div className="mirrorlight__mirror" style={{boxShadow:`0 0 ${filled*.4}px ${entityColor}`,opacity:0.4+(filled/100)*.6,color:entityColor,fontSize:48}}>✦</div>
      </div>
      {!done && <input type="range" min="0" max="90" value={angle} onChange={handleSlider} className="mirrorlight__slider" style={{'--color':entityColor}}/>}
      <div className="mirrorlight__gauge"><div className="mirrorlight__gauge-fill" style={{width:`${filled}%`,background:entityColor}}/></div>
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>J'ai vu ma propre lumière ✦</button>}
    </div>
  );
}
