import React from 'react';
import Card from '../components/Card';
import '../styles/market.css';

function Market() {
  return (
    <div className="page-container">
      <h2>Market</h2>
      <div className="card-grid">
        <Card title="Market Item 1" image="/placeholder.svg" />
        <Card title="Market Item 2" image="/placeholder.svg" />
        <Card title="Market Item 3" image="/placeholder.svg" />
        <Card title="Market Item 4" image="/placeholder.svg" />
      </div>
    </div>
  );
}

export default Market;
