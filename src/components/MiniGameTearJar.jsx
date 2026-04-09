import React, { useState, useEffect, useRef } from 'react';
import './MiniGame.css';

export default function MiniGameTearJar({ onComplete, entityColor }) {
  const [tears, setTears] = useState([]);
  const [caught, setCaught] = useState(0);
  const [done, setDone] = useState(false);
  const idRef = useRef(0);
  const TARGET = 8;

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => {
      const id = idRef.current++;
      setTears(p => [...p, { id, x: Math.random()*80+10, delay: Math.random()*0.3 }]);
      setTimeout(() => setTears(p => p.filter(t => t.id !== id)), 2500);
    }, 550);
    return () => clearInterval(t);
  }, [done]);

  const catchTear = id => {
    setTears(p => p.filter(t => t.id !== id));
    setCaught(p => { const n=p+1; if(n>=TARGET){setDone(true);} return n; });
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Le bocal est plein. Tes larmes sont en sécurité ✦':`Touche les larmes pour les mettre dans le bocal (${caught}/${TARGET})`}</p>
      <div className="tearjar__field">
        {tears.map(t => (
          <button key={t.id} className="tearjar__tear" style={{left:`${t.x}%`,color:entityColor,animationDelay:`${t.delay}s`}} onClick={()=>catchTear(t.id)}>💧</button>
        ))}
        <div className="tearjar__jar" style={{borderColor:entityColor}}>
          <div className="tearjar__fill" style={{height:`${(caught/TARGET)*100}%`,background:`linear-gradient(to top,${entityColor}80,${entityColor}30)`}}/>
          <span className="tearjar__jar-label">🫙</span>
        </div>
      </div>
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>Mes larmes sont au chaud ✦</button>}
    </div>
  );
}
