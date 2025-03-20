import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils, FaUsers } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        <h2 className="text-xl font-semibold">FoodShare</h2>
        <div className="flex items-center gap-3">
          <span className="notification-icon">🔔</span>
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="profile-pic"
          />
        </div>
      </div>

      {/* Donate Button */}
      <button
        className="donate-btn"
        onClick={() => navigate("/food")} // Navigate properly

      >
        <MdOutlineAddBox className="text-xl mr-2" /> Donate Food
      </button>

      {/* Stats */}
      <div className="stats-container">
        <div className="stat-card">
          <FaUtensils className="stat-icon" />
          <div>
            <p className="text-xl font-bold">247</p>
            <p className="text-sm text-gray-500">Meals Donated</p>
          </div>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div>
            <p className="text-xl font-bold">12</p>
            <p className="text-sm text-gray-500">Active Donations</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="section">
        <p className="quick-action">Schedule Pickup</p>
        <p className="quick-action">Become Volunteer</p>
      </div>

      {/* Nearby Collection Centers */}
      <div className="map-container">
        <h3>Nearby Collection Centers</h3>
        <div className="map-placeholder">Map will be displayed here</div>
      </div>

      {/* Donation History */}
      <div className="donation-history">
        <h3>Donation History</h3>
        <div className="donation-card">
          <p className="font-semibold">Fresh Vegetables</p>
          <p className="text-gray-500">Donated on March 13, 2025</p>
          <span className="status completed">Completed</span>
        </div>
        <div className="donation-card">
          <p className="font-semibold">Canned Goods</p>
          <p className="text-gray-500">Donated on March 10, 2025</p>
          <span className="status in-progress">In Progress</span>
        </div>
        <div className="donation-card">
          <p className="font-semibold">Bread and Pastries</p>
          <p className="text-gray-500">Donated on March 5, 2025</p>
          <span className="status completed">Completed</span>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© 2025 FoodShare. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
