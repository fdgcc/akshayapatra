import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("donor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }
    if (isSignup && role === "") {
      alert("Please select a role.");
      return;
    }
    
    // Redirect based on role
    const dashboardRoute = role === "donor" ? "/HomePage" : "/shel";
    navigate(dashboardRoute, { state: { role, email } });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Join Our Community" : "Welcome Back"}</h2>
        <p>{isSignup ? "Make a difference by joining as a volunteer or donor." : "Login to continue your journey."}</p>

        {!isSignup && (
          <div className="role-selector">
            <button
              className={`role-btn ${role === "donor" ? "active" : ""}`}
              onClick={() => setRole("donor")}
            >
              Donor
            </button>
            <button
              className={`role-btn ${role === "receiver" ? "active" : ""}`}
              onClick={() => setRole("receiver")}
            >
              Receiver
            </button>
          </div>
        )}

        {isSignup && <input type="text" placeholder="Full Name" className="input-field" />}
        <input 
          type="email" 
          placeholder="Enter your email or phone" 
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isSignup && <p className="forgot-password">Forgot Password?</p>}

        <button className="auth-btn" onClick={handleAuth}>{isSignup ? "Create Account" : "Login"}</button>

        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <button className="google-btn">Google</button>
            <button className="apple-btn">Apple</button>
          </div>
        </div>

        <p className="switch-auth">
          {isSignup ? "Already have an account?" : "Don't have an account?"} <span onClick={() => setIsSignup(!isSignup)}>{isSignup ? "Login" : "Sign Up"}</span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
