import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Ensure it's imported
import "./food.css";

const FoodDonationForm = () => {
  const navigate = useNavigate(); // ✅ Ensure it's called correctly

  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Prevent form reload

    if (!foodType || !quantity || !expiryDate || !location || !image) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    console.log("Form Submitted! Navigating to Confirmation...");
    
    navigate("/confirmation-food"); // ✅ Ensure the route is correct
  };

  return (
    <div className="donation-form-container">
      <button className="back-btn" onClick={() => navigate("/home")}>&larr; Back</button>
      <h2>Donate Food</h2>

      <form onSubmit={handleSubmit}> {/* ✅ Form handles submission */}
        <label>Food Type</label>
        <select value={foodType} onChange={(e) => setFoodType(e.target.value)} required>
          <option value="">Select Food Type</option>
          <option value="Cooked Meals">Cooked Meals</option>
          <option value="Fresh Produce">Fresh Produce</option>
          <option value="Packaged Food">Packaged Food</option>
        </select>

        <label>Quantity (Servings)</label>
        <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

        <label>Expiry Time</label>
        <input type="datetime-local" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />

        <label>Pickup Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter address" required />

        <label>Food Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} required />

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Food Preview" />
          </div>
        )}

        <button type="submit" className="submit-btn">Submit Donation Request</button>
      </form>
    </div>
  );
};

export default FoodDonationForm;
