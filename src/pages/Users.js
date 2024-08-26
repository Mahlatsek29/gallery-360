import React from 'react';
import Card from '../components/Card';
import '../styles/users.css';

function Users() {
  return (
    <div className="page-container">
      <h2>Users</h2>
      <div className="card-grid">
        <Card title="User 1" image="/placeholder.svg" />
        <Card title="User 2" image="/placeholder.svg" />
        <Card title="User 3" image="/placeholder.svg" />
        <Card title="User 4" image="/placeholder.svg" />
      </div>
    </div>
  );
}

export default Users;
