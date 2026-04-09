import React, { useState } from 'react';
import './MiniGame.css';

const VICTORIES = ["J'ai essayé quelque chose","J'ai demandé de l'aide","J'ai été gentil","J'ai terminé quelque chose de difficile","J'ai dit la vérité","J'ai pris soin de moi","J'ai écouté quelqu'un","J'ai pardonné"];

export default function MiniGameVictoryJar({ onComplete, entityColor }) {
  const [collected, setCollected] = useState([]);
  const [done, setDone] = useState(false);
  const TARGET = 3;

  const collect = v => {
    setCollected(p => { const n=[...p,v]; if(n.length>=TARGET) setDone(true); return n; });
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?'Ton bocal de victoires est plein ✦':`Mets tes réussites dans le bocal (${collected.length}/${TARGET})`}</p>
      <div className="victoryjar__jar" style={{borderColor:entityColor}}>
        <div className="victoryjar__fill" style={{height:`${(collected.length/TARGET)*100}%`,background:`linear-gradient(to top,${entityColor}60,${entityColor}20)`}}/>
        {collected.map((_,i)=><div key={i} className="victoryjar__star" style={{color:entityColor,position:'absolute',bottom:`${8+i*20}px`,left:'50%',transform:'translateX(-50%)',fontSize:16}}>✦</div>)}
      </div>
      {!done && (
        <div className="victoryjar__list">
          {VICTORIES.filter(v=>!collected.includes(v)).slice(0,5).map((v,i)=>(
            <button key={i} className="victoryjar__item" style={{'--color':entityColor}} onClick={()=>collect(v)}>✦ {v}</button>
          ))}
        </div>
      )}
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>Je garde mes victoires ✦</button>}
    </div>
  );
}
