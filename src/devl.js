import React, { useState } from "react";
import { GoogleMap, LoadScript, Polyline, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./devl.css";

const containerStyle = {
  width: "100%",
  height: "50vh",
};

const center = { lat: 37.7749, lng: -122.4194 }; // Example coordinates

const routePath = [
  { lat: 37.7749, lng: -122.4194 }, // Start
  { lat: 37.7849, lng: -122.4094 }, // Midpoint
  { lat: 37.7949, lng: -122.3994 }, // Destination
];

const pickupLocation = { lat: 37.7749, lng: -122.4194 };
const deliveryLocation = { lat: 37.7949, lng: -122.3994 };

const DeliveryTracking = () => {
  const navigate = useNavigate(); // ✅ Fix: Define navigate
  const [pickedUp, setPickedUp] = useState(false);

  return (
    <div className="tracking-container">
      {/* Header */}
      <header className="tracking-header">
        <button className="back-button" onClick={() => navigate(-1)}> {/* ✅ Fix: Navigate back */}
          ←
        </button>
        <h2>Delivery Tracking</h2>
      </header>

      {/* Map */}
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Polyline path={routePath} options={{ strokeColor: "#0000FF", strokeWeight: 4 }} />
          <Marker position={pickupLocation} label="P" />
          <Marker position={deliveryLocation} label="D" />
        </GoogleMap>
      </LoadScript>

      {/* Delivery Details */}
      <div className="delivery-details">
        <p className="status">🟢 Pickup</p>
        <div className="location">
          <p>📍 <strong>Pickup Location:</strong> 123 Donor Street, City</p>
          <p>🚩 <strong>Delivery Location:</strong> 456 NGO Avenue, City</p>
        </div>
        <button className="pickup-btn" onClick={() => setPickedUp(true)}>
          ✅ Mark as Picked Up
        </button>
        <button className="deliver-btn" disabled={!pickedUp} onClick={() => alert("Delivery Started!")}>
          🚚 Deliver Now
        </button>
      </div>
    </div>
  );
};

export default DeliveryTracking;
