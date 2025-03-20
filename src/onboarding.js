import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./onboarding.css";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate(); // Ensure `useNavigate` is correctly used inside <Router>

  const steps = [
    {
      title: "Donate Surplus Food",
      description: "Help those in need by donating excess food.",
      image: "donat.png",
    },
    {
      title: "Track Donations in Real-Time",
      description: "Monitor your contributions and impact instantly.",
      image: "2.jpg",
    },
    {
      title: "Help End Hunger",
      description: "Join us in making a difference in communities.",
      image: "3.jpg",
    },
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/auth"); // Redirect to Login/Signup Page
    }
  };

  return (
    <div className="onboarding-container">
      <button className="skip-btn" onClick={() => navigate("/auth")}>
        Skip
      </button>
      <img src={steps[step].image} alt="Onboarding Illustration" className="onboarding-image" />
      <h2 className="title">{steps[step].title}</h2>
      <p className="description">{steps[step].description}</p>
      <div className="dots">
        {steps.map((_, index) => (
          <span key={index} className={index === step ? "dot active" : "dot"}></span>
        ))}
      </div>
      <button className="next-btn" onClick={nextStep}>
        {step < steps.length - 1 ? "Next" : "Get Started"}
      </button>
    </div>
  );
};

export default Onboarding;
