import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">CMS</Link>
        <nav className="nav-links">
          <Link to="/market">Market</Link>
          <Link to="/exhibition">Exhibition</Link>
          <Link to="/users">Users</Link>
          <Link to="/artist-orders">Artist Orders</Link>
        </nav>
        <div className="user-menu">
          <button className="notifications">🔔</button>
          <div className="user-avatar">
            <img src="/placeholder.svg" alt="Avatar" />
            <div className="dropdown-menu">
              <div>My Account</div>
              <div>Settings</div>
              <div>Logout</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
