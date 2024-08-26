import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Market from './pages/Market';
import Exhibition from './pages/Exhibition';
import Users from './pages/Users';
import ArtistOrders from './pages/ArtistOrders';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/market" element={<Market />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/users" element={<Users />} />
          <Route path="/artist-orders" element={<ArtistOrders />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
