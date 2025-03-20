import React from "react";
import { useNavigate } from "react-router-dom";
import "./pick.css";
import { FaWalking, FaTruck, FaInfoCircle } from "react-icons/fa";

const Pick = () => {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="pickup-container">
      <h2>Choose Pickup Method</h2>
      <p>Select how you'd like to handle the item pickup</p>

      {/* Self Pickup Option */}
      <div className="pickup-option" onClick={() => navigate("/devl")}>
        <FaWalking className="icon" />
        <div>
          <h4>Self Pickup</h4>
          <p>I’ll handle the pickup myself</p>
        </div>
        <span className="arrow">›</span>
      </div>

      {/* Request Delivery Partner Option */}
      <div className="pickup-option" onClick={() => navigate("/devl")}>
        <FaTruck className="icon green" />
        <div>
          <h4>Request Delivery Partner</h4>
          <p>Let a partner handle the pickup</p>
        </div>
        <span className="arrow">›</span>
      </div>

      {/* Information Message */}
      <div className="info-box">
        <FaInfoCircle className="info-icon" />
        <p>
          Select your preferred pickup method. If you choose delivery partner pickup, 
          we'll connect you with available partners in your area.
        </p>
      </div>
    </div>
  );
};

export default Pick;