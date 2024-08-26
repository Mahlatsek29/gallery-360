import React from 'react';
import Card from '../components/Card';
import '../styles/artistorders.css';

function ArtistOrders() {
  return (
    <div className="page-container">
      <h2>Artist Orders</h2>
      <div className="card-grid">
        <Card title="Order 1" image="/placeholder.svg" />
        <Card title="Order 2" image="/placeholder.svg" />
        <Card title="Order 3" image="/placeholder.svg" />
        <Card title="Order 4" image="/placeholder.svg" />
      </div>
    </div>
  );
}

export default ArtistOrders;
