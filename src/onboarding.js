import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./onboarding.css";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

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

  // Automatically move to step 1 after 5 seconds if step is 0 (intro screen)
  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, 8000); // 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [step]);

  const nextStep = () => {
    if (step < steps.length) {
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

      {step === 0 ? (
        <>
          <img src="aksh.jpg" alt="Welcome Image" className="welcome-image" />
          <h2 className="title">AKSHYAPATRA</h2>
          <p className="description">A platform to donate food and help communities.</p>
        </>
      ) : (
        <>
          <img src={steps[step - 1].image} alt="Onboarding Illustration" className="onboarding-image" />
          <h2 className="title">{steps[step - 1].title}</h2>
          <p className="description">{steps[step - 1].description}</p>
        </>
      )}

      <div className="dots">
        {[...Array(steps.length + 1)].map((_, index) => (
          <span key={index} className={index === step ? "dot active" : "dot"}></span>
        ))}
      </div>

      {step !== 0 && (
        <button className="next-btn" onClick={nextStep}>
          {step < steps.length ? "Next" : "Get Started"}
        </button>
      )}
    </div>
  );
};

export default Onboarding;
