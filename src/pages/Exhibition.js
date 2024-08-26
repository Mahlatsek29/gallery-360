import React from 'react';
import Card from '../components/Card';
import '../styles/exhibition.css';

function Exhibition() {
  return (
    <div className="page-container">
      <h2>Exhibition</h2>
      <div className="card-grid">
        <Card title="Exhibition Item 1" image="/placeholder.svg" />
        <Card title="Exhibition Item 2" image="/placeholder.svg" />
        <Card title="Exhibition Item 3" image="/placeholder.svg" />
        <Card title="Exhibition Item 4" image="/placeholder.svg" />
      </div>
    </div>
  );
}

export default Exhibition;
