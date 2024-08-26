import React from 'react';
import '../styles/card.css';

function Card({ title, image }) {
  return (
    <div className="card">
      <img src={image} alt="Card" />
      <div className="card-content">
        <h3>{title}</h3>
        <div className="card-actions">
          <button className="accept-button">Accept</button>
          <button className="decline-button">Decline</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
