import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const submitRef = useRef(null);

  // Login handler
  const handleLogin = async () => {
    const email = emailRef.current.value;
    const password = passRef.current.value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        // Redirect based on role
        window.location.href = data.role === "admin" ? "/admin" : "/";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error, try again later");
    }
  };

  // Enter key navigation
  const handleEnter = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nextRef?.current?.focus();
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <div className="auth-group">
          <label>Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="you@example.com"
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

        <button ref={submitRef} className="auth-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="auth-footer">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
