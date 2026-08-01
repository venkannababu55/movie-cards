import React, { useState, useEffect } from 'react';
import './App.css';
import seriesData from './api/seriesdata.json';

import moneyHeistImg from './assets/Screenshot 2026-07-31 104005.png';
import strangerThingsImg from './assets/stangerthings.png';
import witcherImg from './assets/thewitcher.png';
import squidGameImg from './assets/squidgame.png';

const images = {
  "money-heist": moneyHeistImg,
  "stranger-things": strangerThingsImg,
  "the-witcher": witcherImg,
  "squid-game": squidGameImg,
};

const Netflix = ({ curElem }) => {
  const { id, name, rating, description, genre, cast, watch_url } = curElem;
  let age = 18;

  const canwatch = () => {
    if (age >= 18) {
      return (
        <a href={watch_url} target="_blank" rel="noopener noreferrer" className="btn">
          Watch Now
        </a>
      );
    } else {
      return (
        <button className="btn btn-disabled" disabled>
          Not Eligible
        </button>
      );
    }
  };

  return (
    <div className="netflix-card">
      <div className="image-wrapper">
        <img src={images[id]} alt={name} className="poster-image" />
      </div>
      <div className="card-content">
        <h3 className="netflix-title">Name: {name}</h3>
        <h4 className="netflix-rating">Rating: {rating}/10</h4>
        <p className="netflix-description">Description: {description}</p>
        <p className="netflix-cast">
          Cast: {Array.isArray(cast) ? cast.join(", ") : cast}
        </p>
        <p className="netflix-genre">
          Genre: {Array.isArray(genre) ? genre.join(", ") : genre}
        </p>
        {canwatch()}
      </div>
    </div>
  );
};

function App() {
  const [phase, setPhase] = useState('intro'); // 'intro' | 'fadeout' | 'done'

  useEffect(() => {
    // Phase 1: Show N logo — hold it centered, start zoom
    // After 1.2s, begin fade out (quicker intro)
    const t1 = setTimeout(() => setPhase('fadeout'), 1200);
    // Phase 2: After fade completes, unmount overlay
    const t2 = setTimeout(() => setPhase('done'), 1700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="app-container">

      {/* Netflix Intro Overlay */}
      {phase !== 'done' && (
        <div className={`netflix-intro-overlay ${phase === 'fadeout' ? 'fadeout' : ''}`}>
          {/* The N zooms slowly toward the camera, filling the screen */}
          <div className="netflix-n-wrapper">
            <svg
              className="netflix-n-svg"
              viewBox="0 0 111 152"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Left bar gradient - slightly darker on left edge */}
                <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8b0000" />
                  <stop offset="30%" stopColor="#e50914" />
                  <stop offset="100%" stopColor="#e50914" />
                </linearGradient>
                {/* Right bar gradient - slightly darker on right edge */}
                <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e50914" />
                  <stop offset="70%" stopColor="#e50914" />
                  <stop offset="100%" stopColor="#8b0000" />
                </linearGradient>
                {/* Diagonal ribbon - the signature N stroke */}
                <linearGradient id="lg3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c0060f" />
                  <stop offset="40%" stopColor="#e50914" />
                  <stop offset="100%" stopColor="#6b0000" />
                </linearGradient>
                {/* Inner shadow for depth on the ribbon */}
                <filter id="innerShadow">
                  <feDropShadow dx="-4" dy="0" stdDeviation="5"
                    floodColor="#000" floodOpacity="0.55" />
                </filter>
              </defs>

              {/* Left vertical bar */}
              <rect x="0" y="0" width="30" height="152" fill="url(#lg1)" />

              {/* Right vertical bar */}
              <rect x="81" y="0" width="30" height="152" fill="url(#lg2)" />

              {/* The diagonal ribbon — exact Netflix N stroke */}
              <polygon
                points="0,0 30,0 111,152 81,152"
                fill="url(#lg3)"
                filter="url(#innerShadow)"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className={phase === 'done' ? 'content-visible' : 'content-hidden'}>
        {/* Giant NETFLIX background watermark */}
        <div className="netflix-bg-text" aria-hidden="true">NETFLIX</div>

        <header className="app-header">
          <h1>Trending Now</h1>
        </header>
        <main className="grid-container">
          {seriesData.map((curElem) => (
            <Netflix key={curElem.id} curElem={curElem} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
