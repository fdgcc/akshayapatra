import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./onboarding"; 
import AuthPage from "./AuthPage"; 
import HomePage from "./HomePage"; 
import FoodDonationForm from "./food"; 
import Confirmation from "./Confirmation"; 
import Vol from "./vol"; 
import Confirmation from "./Confirmation"; 
import DeliveryStarted from "./dev"; 
import ShelterConnect from "./ShelterConnect";
import DeliveryTracking from "./devl";
import Pick from "./pick";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} /> {/* ✅ Ensure consistent lowercase route */}
        <Route path="/shel" element={<ShelterConnect />} />  
        <Route path="/confirmation-food" element={<Confirmation />} />
        <Route path="/food" element={<FoodDonationForm />} />
        <Route path="/pick" element={<Pick />} />
        <Route path="/vol" element={<Vol />} />
        <Route path="/devl" element={<DeliveryTracking />} />
        <Route path="/dev" element={<DeliveryStarted />} />

      </Routes>
    </Router>
  );
}

export default App;
