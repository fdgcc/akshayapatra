import React from "react";
import { useNavigate } from "react-router-dom";  
import "./vol.css"; 
import { FaTruck } from "react-icons/fa";  

const Vol = () => {
  const navigate = useNavigate();  

  const handleStartDelivery = () => {
    navigate("/pick");  // ✅ Updated to match the correct route in App.js
  };

  return (
    <div className="container">
      <header className="header">
        <h2>FoodHero</h2>
        <button className="refresh-btn">🔄</button>
      </header>

      <section className="deliveries">
        <p>Today's Deliveries</p>
        <div className="delivery-box">
          <h1>5</h1>
          <FaTruck className="truck-icon" />
        </div>
      </section>

      <section className="pickup-requests">
        <h3>Pickup Requests</h3>
        
        <div className="request-card">
          <div className="request-info">
            <h4>Fresh Harvest Market</h4>
            <p>📍 2.8 miles away</p>
            <p>📦 12 food packages</p>
          </div>
          <span className="status pending">Pending</span>
          <button className="start-btn" onClick={handleStartDelivery}>Start Delivery</button>
        </div>

        <div className="request-card">
          <div className="request-info">
            <h4>Local Food Bank</h4>
            <p>📍 31 miles away</p>
            <p>📦 8 food packages</p>
          </div>
          <span className="status pending">Pending</span>
          <button className="start-btn" onClick={handleStartDelivery}>Start Delivery</button>
        </div>
      </section>

      <section className="top-volunteers">
        <h3>Top Volunteers</h3>
        <ul>
          <li><span className="avatar">🟣</span> John Smith - <strong>42 deliveries</strong> 🏆</li>
          <li><span className="avatar">🔵</span> Sarah Johnson - <strong>38 deliveries</strong> 🥈</li>
          <li><span className="avatar">⚫</span> Mike Wilson - <strong>35 deliveries</strong> 🥉</li>
        </ul>
      </section>

      <footer className="nav-bar">
        <button className="nav-item active" onClick={() => navigate("/")}>🏠 Home</button>
        <button className="nav-item" onClick={() => navigate("/history")}>⏳ History</button>
        <button className="nav-item" onClick={() => navigate("/profile")}>👤 Profile</button>
      </footer>
    </div>
  );
};

export default Vol;
