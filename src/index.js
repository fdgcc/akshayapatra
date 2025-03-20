import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import routing components
import "./index.css";
import Onboarding from "./onboarding";
import AuthPage from "./AuthPage";
import HomePage from "./HomePage";
import FoodDonationForm from "./food";
import Confirmation from "./Confirmation";
import ShelterConnect from "./shel";
import DeliveryTracking from "./devl";
import DeliveryStarted from "./dev";
import './dev.css';
import './devl.css';
import Vol from "./vol";
import Pick from "./pick";
import "./pick.css";
import "./Confirmation.css";
import "./food.css";
import "./HomePage.css";
import "./onboarding.css";
import "./AuthPage.css";
import "./vol.css";
import "./shel.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap everything inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/HomePage" element={<HomePage />} /> {/* ✅ Fixed route to match AuthPage redirection */}
        <Route path="/shel" element={<ShelterConnect />} /> {/* ✅ Added missing route */}
        <Route path="/devl" element={<DeliveryTracking />} />
        <Route path="/confirmation-food" element={<Confirmation />} />
        <Route path="/pick" element={<Pick />} />
        <Route path="/vol" element={<Vol />} />
        <Route path="/food" element={<FoodDonationForm />} />
        <Route path="/dev" element={<DeliveryStarted />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// Performance monitoring (optional)
reportWebVitals();
