import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./Confirmation.css";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("Navigating..."); // Debugging log
    navigate("/"); // Change route accordingly
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-card">
        <FaCheckCircle className="success-icon" />
        <h2>Request Submitted!</h2>
        <p>You will be notified when someone accepts your donation.</p>
        <button className="home-btn" onClick={handleNavigate}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
