import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passRef = useRef(null);
  const submitRef = useRef(null);

  const [toast, setToast] = useState({ message: "", type: "" }); // type: success or error

  // Signup handler
  const handleSignup = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const password = passRef.current.value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        showToast("Signup successful! Redirecting...", "success");

        setTimeout(() => {
          window.location.href = data.role === "admin" ? "/admin" : "/";
        }, 2000);
      } else {
        showToast(data.message || "Signup failed", "error");
      }
    } catch (err) {
      console.error(err);
      showToast("Server error, try again later", "error");
    }
  };

  // Show toast helper
  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  // Enter key navigation
  const handleEnter = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  };

  // Social login handlers
  const handleGoogleSignup = () => window.location.href = "http://localhost:5000/api/auth/google";
  const handleGithubSignup = () => window.location.href = "http://localhost:5000/api/auth/github";

  return (
    <div className="auth-page">
      {/* Toast Notification */}
      {toast.message && <div className={`toast ${toast.type}`}>{toast.message}</div>}

      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Sign up to get started</p>

        <div className="auth-group">
          <label>Name</label>
          <input
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            onKeyDown={(e) => handleEnter(e, emailRef)}
          />
        </div>

        <div className="auth-group">
          <label>Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="you@example.com"
            onKeyDown={(e) => handleEnter(e, phoneRef)}
          />
        </div>

        <div className="auth-group">
          <label>Phone</label>
          <input
            ref={phoneRef}
            type="text"
            placeholder="Optional"
            onKeyDown={(e) => handleEnter(e, passRef)}
          />
        </div>

        <div className="auth-group">
          <label>Password</label>
          <input
            ref={passRef}
            type="password"
            placeholder="********"
            onKeyDown={(e) => handleEnter(e, submitRef)}
          />
        </div>

        <button ref={submitRef} className="auth-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <div className="social-login">
          <p>Or sign up with:</p>
          <button className="social-btn google" onClick={handleGoogleSignup}>Google</button>
          <button className="social-btn github" onClick={handleGithubSignup}>GitHub</button>
        </div>

        <div className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
