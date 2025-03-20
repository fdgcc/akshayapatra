import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa"; // Import icons
import "./AuthPage.css";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("donor");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Email validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Password validation function (8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char)
  const isValidPassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  // Authentication handler with validation
  const handleAuth = () => {
    if (isSignup && !fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!email.trim() || !isValidEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!password.trim() || !isValidPassword(password)) {
      alert("Password must be at least 8 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.");
      return;
    }

    if (isSignup && !role) {
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

        {/* Role selection only for login */}
        {!isSignup && (
          <div className="role-selector">
            <button
              className={`role-btn ${role === "donor" ? "active" : ""}`}
              onClick={() => setRole("donor")}
            >
              <FaHandHoldingHeart /> Donor
            </button>
            <button
              className={`role-btn ${role === "receiver" ? "active" : ""}`}
              onClick={() => setRole("receiver")}
            >
              <FaHandsHelping /> Receiver
            </button>
          </div>
        )}

        {/* Full Name Input for Signup */}
        {isSignup && (
          <input 
            type="text" 
            placeholder="Full Name" 
            className="input-field" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
          />
        )}

        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isSignup && <p className="forgot-password">Forgot Password?</p>}

        {/* Authentication Button */}
        <button className="auth-btn" onClick={handleAuth}>
          {isSignup ? "Create Account" : "Login"}
        </button>

        {/* Social Login */}
        <div className="social-login">
          <p>Or continue with</p>
          <div className="social-icons">
            <button className="google-btn">Google</button>
            <button className="apple-btn">Apple</button>
          </div>
        </div>

        {/* Switch between Login & Signup */}
        <p className="switch-auth">
          {isSignup ? "Already have an account?" : "Don't have an account?"} 
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
