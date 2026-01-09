import React from "react";
import "../styles/auth.css";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <div className="auth-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>

        <button className="auth-btn">Login</button>

        <div className="social-login">
          <button className="google">Continue with Google</button>
          <button className="github">Continue with GitHub</button>
          <button className="microsoft">Continue with Microsoft</button>
        </div>

        <div className="auth-footer">
          Don’t have an account? <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
