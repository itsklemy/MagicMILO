import React, { useState, useEffect, useRef } from 'react';
import './MiniGame.css';

const GOOD = ['✦','✧','★','☆'];
const BAD  = ['●','▲','◆'];
const TARGET = 6;

export default function MiniGameStarCatcher({ onComplete, entityColor }) {
  const [items, setItems] = useState([]);
  const [caught, setCaught] = useState(0);
  const [done, setDone] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => {
      const isGood = Math.random() > 0.35;
      const id = idRef.current++;
      setItems(p => [...p, { id, isGood, symbol: isGood?GOOD[Math.floor(Math.random()*GOOD.length)]:BAD[Math.floor(Math.random()*BAD.length)], x: Math.random()*80+10 }]);
      setTimeout(() => setItems(p => p.filter(i => i.id!==id)), 2200);
    }, 650);
    return () => clearInterval(t);
  }, [done]);

  const catchItem = item => {
    setItems(p => p.filter(i => i.id!==item.id));
    if (item.isGood) setCaught(p => { const n=p+1; if(n>=TARGET) setDone(true); return n; });
  };

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done?`Tu as attrapé ${caught} étoiles ✦`:`Attrape les étoiles claires, laisse filer les formes sombres (${caught}/${TARGET})`}</p>
      <div className="starcatcher__field">
        {items.map(item => (
          <button key={item.id} className={`starcatcher__item${item.isGood?'':' starcatcher__item--bad'}`}
            style={{left:`${item.x}%`,color:item.isGood?entityColor:'rgba(255,255,255,.25)',fontSize:item.isGood?28:20}}
            onClick={()=>catchItem(item)}>{item.symbol}</button>
        ))}
      </div>
      <div className="starcatcher__score">
        <span style={{color:entityColor}}>✦ {caught}</span>
        <span style={{color:'rgba(255,255,255,.25)'}}>● laissés</span>
      </div>
      {done && <button className="minigame__cta" style={{'--accent':entityColor}} onClick={onComplete}>J'ai gardé le meilleur ✦</button>}
    </div>
  );
}
