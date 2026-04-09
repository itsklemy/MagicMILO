// MiniGameHeartBeat.jsx
import React, { useState, useRef } from 'react';
import './MiniGame.css';

export default function MiniGameHeartBeat({ onComplete, entityColor }) {
  const [bpm, setBpm] = useState(120);
  const [beats, setBeats] = useState([]);
  const [done, setDone] = useState(false);
  const [goodCount, setGoodCount] = useState(0);
  const timestamps = useRef([]);

  const handleTap = () => {
    if (done) return;
    const now = Date.now();
    timestamps.current.push(now);
    if (timestamps.current.length > 6) timestamps.current.shift();
    if (timestamps.current.length >= 3) {
      const gaps = [];
      for (let i = 1; i < timestamps.current.length; i++) gaps.push(timestamps.current[i] - timestamps.current[i-1]);
      const avg = gaps.reduce((a,b) => a+b, 0) / gaps.length;
      const newBpm = Math.min(180, Math.max(20, Math.round(60000 / avg)));
      setBpm(newBpm);
      if (newBpm <= 65) {
        setGoodCount(p => {
          const n = p + 1;
          if (n >= 4) setDone(true);
          return n;
        });
      }
    }
    const id = Date.now();
    setBeats(p => [...p, id]);
    setTimeout(() => setBeats(p => p.filter(b => b !== id)), 600);
  };

  const color = bpm > 100 ? '#ff6b6b' : bpm > 70 ? '#ffd166' : entityColor;

  return (
    <div className="minigame">
      <p className="minigame__instruction">{done ? 'Ton cœur est plus calme ✦' : bpm <= 65 ? 'Encore un peu...' : 'Tapote l\'écran au rythme de ta respiration'}</p>
      <div className="heartbeat__bpm" style={{ color }}>{bpm} bpm</div>
      <div className="heartbeat__meter"><div className="heartbeat__bar" style={{ width: `${Math.min(100,(bpm/180)*100)}%`, background: `linear-gradient(90deg,${entityColor},${color})` }}/></div>
      {!done && (
        <button className="heartbeat__button" style={{ '--color': entityColor }} onClick={handleTap}>
          <span className="heartbeat__heart" style={{ color, transform: beats.length > 0 ? 'scale(1.3)' : 'scale(1)' }}>♥</span>
          {beats.map(id => <span key={id} className="heartbeat__ripple" style={{ borderColor: entityColor }}/>)}
        </button>
      )}
      {done && <button className="minigame__cta" style={{ '--accent': entityColor }} onClick={onComplete}>Mon cœur est calme ✦</button>}
      {!done && <p className="heartbeat__hint">Objectif : respirer lentement en tapotant</p>}
    </div>
  );
}
