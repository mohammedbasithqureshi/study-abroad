import React from "react";
import "../styles/auth.css";

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Start your study abroad journey</p>

        <div className="auth-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        <div className="auth-group">
          <label>Phone Number</label>
          <input type="tel" placeholder="+91 9876543210" />
        </div>

        <div className="auth-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input type="password" placeholder="********" />
          <div className="password-rules">
            <span>• Minimum 8 characters</span>
            <span>• One uppercase letter</span>
            <span>• One number</span>
            <span>• One special character</span>
          </div>
        </div>

        <div className="auth-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="********" />
        </div>

        <button className="auth-btn">Create Account</button>

        <div className="social-login">
          <button className="google">Sign up with Google</button>
          <button className="github">Sign up with GitHub</button>
          <button className="microsoft">Sign up with Microsoft</button>
        </div>

        <div className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
