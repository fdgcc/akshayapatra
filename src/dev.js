import React from "react";
import { useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa"; // Import delivery icon
import "./dev.css"; // Reuse existing styles

const DeliveryStarted = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Navigating..."); // Debugging log
    navigate("/"); // Change route accordingly
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <FaShippingFast className="success-icon" />
        <h2>Delivery Started!</h2>
        <p>Your donation is on the way to the receiver.</p>
        <button className="home-btn" onClick={handleNavigate}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default DeliveryStarted;
