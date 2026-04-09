import React, { useState, useEffect } from 'react';
import './FormulaScreen.css';

export default function FormulaScreen({ formula, entityColor, entityId, onNext }) {
  const [visible, setVisible] = useState(0);
  const [repeated, setRepeated] = useState(false);
  const [stars, setStars] = useState([]);
  const words = formula.split(' ');

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++; setVisible(i);
      if (i >= words.length) clearInterval(t);
    }, 300);
    return () => clearInterval(t);
  }, [formula]);

  const handleRepeat = () => {
    setRepeated(true);
    setStars(Array.from({length:14},(_,i)=>({id:i,x:Math.random()*80+10,y:Math.random()*60+20,delay:Math.random()*.5})));
    const key = 'magicmilo_formulas';
    const existing = JSON.parse(localStorage.getItem(key)||'[]');
    if (!existing.find(f=>f.text===formula)) {
      existing.push({text:formula,entityId,date:new Date().toISOString()});
      localStorage.setItem(key, JSON.stringify(existing));
    }
    window.dispatchEvent(new Event('magicmilo_progress_update'));
  };

  return (
    <div className="formula-screen" style={{'--entity-color':entityColor}}>
      <div className="formula-screen__bg"/>

      <div className="formula-screen__entity">
        <img src={`/svg/${entityId}.svg`} alt={entityId} className="formula-screen__entity-img"/>
        {!repeated && visible>=words.length && (
          <p className="formula-screen__prompt">Répète avec moi...</p>
        )}
      </div>

      <div className="formula-screen__box">
        <p className="formula-screen__label">✦ Formule magique</p>
        <p className="formula-screen__text">
          {words.map((w,i)=>(
            <span key={i} className="formula-screen__word" style={{opacity:i<visible?1:0}}>{w}{' '}</span>
          ))}
        </p>
      </div>

      {stars.map(s=>(
        <div key={s.id} className="formula-screen__star" style={{left:`${s.x}%`,top:`${s.y}%`,animationDelay:`${s.delay}s`,color:entityColor}}>✦</div>
      ))}

      <div className="formula-screen__actions">
        {!repeated ? (
          <button className="formula-screen__repeat-btn" style={{'--color':entityColor}} onClick={handleRepeat} disabled={visible<words.length}>
            Je la répète ✦
          </button>
        ) : (
          <>
            <div className="formula-screen__collected">⭐ Formule ajoutée à ton grimoire</div>
            <button className="formula-screen__next-btn" style={{'--color':entityColor}} onClick={onNext}>Continuer →</button>
          </>
        )}
      </div>
    </div>
  );
}
