// MiniGameWorryJar.jsx
import React, { useState } from 'react';
import './MiniGame.css';

const WORRIES = ['Demain','L\'école','Un ami','La famille','Mon corps','L\'avenir','Ce que j\'ai dit','Ce qu\'on pense de moi'];

export function MiniGameWorryJar({ onComplete, entityColor }) {
  const [inJar, setInJar] = useState([]);
  const [done, setDone] = useState(false);
  const TARGET = 3;

  const put = w => {
    setInJar(p => { const n=[...p,w]; if(n.length>=TARGET) setDone(true); return n; });
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Tes soucis sont dans le bocal. Ta tête est plus légère ✦':`Glisse tes soucis dans le bocal (${inJar.length}/${TARGET})`}</p>
      <div className="worryjar__jar" style={{borderColor:entityColor}}>
        <div className="worryjar__fill" style={{height:`${(inJar.length/TARGET)*100}%`,background:`linear-gradient(to top,${entityColor}60,${entityColor}20)`}}/>
        <div className="worryjar__contents">{inJar.map((w,i)=><span key={i} className="worryjar__item" style={{color:entityColor}}>{w}</span>)}</div>
        <span className="worryjar__lid">🫙</span>
      </div>
      {!done && (
        <div className="worryjar__worries">
          {WORRIES.filter(w=>!inJar.includes(w)).slice(0,5).map((w,i)=>(
            <button key={i} className="worryjar__worry" style={{'--color':entityColor}} onClick={()=>put(w)}>{w}</button>
          ))}
        </div>
      )}
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>Le bocal est fermé ✦</button>}
    </div>
  );
}

export default MiniGameWorryJar;
