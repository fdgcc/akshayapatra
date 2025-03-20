import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./shel.css";

const ShelterConnect = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle button click and navigate to Vol.js page
  const handleRequestFoodDonation = () => {
    navigate("/vol");
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="help-icon">❓</div>
        <h2>ShelterConnect</h2>
        <div className="profile-section">
          <span className="notification-icon">🔔</span>
          <img
            src="https://randomuser.me/api/portraits/women/1.jpg"
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </header>

      {/* Meals Info */}
      <section className="meals-info">
        <div className="info-box">
          <p>Today's Meals</p>
          <h1>124</h1>
        </div>
        <div className="info-box">
          <p>Pending Delivery</p>
          <h1>3</h1>
        </div>
      </section>

      {/* Request Button */}
      <button className="request-btn" onClick={handleRequestFoodDonation}>
        + Request Food Donation
      </button>

      {/* Incoming Deliveries */}
      <section className="incoming-deliveries">
        <h3>Incoming Deliveries</h3>

        <div className="delivery-card">
          <div className="order-header">
            <h4>Order #2891</h4>
            <span className="status in-transit">In Transit</span>
          </div>
          <p>From: City Food Bank</p>
          <p>📦 86 meal packages</p>
          <p>⏳ Arriving in 16 mins</p>
          <button className="track-btn">Track Delivery</button>
        </div>

        <div className="delivery-card">
          <div className="order-header">
            <h4>Order #2890</h4>
            <span className="status arrived">Arrived</span>
          </div>
          <p>From: Fresh Meals Co.</p>
          <p>📦 120 meal packages</p>
          <button className="confirm-btn">✅ Confirm Receipt</button>
        </div>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active">🏠 Home</div>
        <div className="nav-item">⏳ History</div>
        <div className="nav-item">📊 Reports</div>
        <div className="nav-item">⚙ Settings</div>
      </nav>
    </div>
  );
};

export default ShelterConnect;
