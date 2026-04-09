import React, { useState, useRef } from 'react';
import './MiniGame.css';

export default function MiniGameHeartWarm({ onComplete, entityColor }) {
  const [warmth, setWarmth] = useState(0);
  const [done, setDone] = useState(false);
  const lastPos = useRef(null);

  const handleMove = e => {
    if (done) return;
    const touch = e.touches ? e.touches[0] : e;
    const pos = { x: touch.clientX, y: touch.clientY };
    if (lastPos.current) {
      const dx = pos.x - lastPos.current.x, dy = pos.y - lastPos.current.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      setWarmth(p => { const n = Math.min(100, p + dist * 0.25); if(n>=100&&!done) setDone(true); return n; });
    }
    lastPos.current = pos;
  };

  const color = warmth < 40 ? '#a8d8f0' : warmth < 75 ? '#ffb3c6' : entityColor;

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Le cœur est réchauffé ✦':'Frotte doucement le cœur pour le réchauffer'}</p>
      <div className="heartwarm__zone" onMouseMove={handleMove} onMouseUp={()=>{lastPos.current=null}} onTouchMove={handleMove} onTouchEnd={()=>{lastPos.current=null}}>
        <span style={{fontSize:80+warmth*.5,color,filter:`drop-shadow(0 0 ${warmth*.3}px ${entityColor})`,transition:'color .5s',userSelect:'none',cursor:'pointer'}}>♥</span>
      </div>
      <div className="heartwarm__gauge"><div className="heartwarm__gauge-fill" style={{width:`${warmth}%`,background:`linear-gradient(90deg,#a8d8f0,${entityColor})`}}/></div>
      <p className="heartwarm__hint">{warmth<30?'Encore froid...':warmth<70?'Il se réchauffe...':'Presque chaud !'}</p>
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>Le cœur est au chaud ✦</button>}
    </div>
  );
}
