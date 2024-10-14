// src/components/FlipCard.js
import React, { useState } from 'react';
import './FlipCard.css'; // Ensure you have the corresponding CSS
// import earthImage from './photos/earth.png';

const FlipCard = ({ title, frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      {/* <img src={earthImage} alt="error" /> */}
      <div className="card-face">
        <div className="product-name">
          <h2>{title}</h2>
        </div>
        <div className="product-image">
          <div>{frontContent}</div>
        </div>
      </div>
      <div className="card-back">
        <p>{backContent}</p>
      </div>
    </div>
  );
};

export default FlipCard;
