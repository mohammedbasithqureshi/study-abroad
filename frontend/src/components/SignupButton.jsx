import React from "react";
import { useNavigate } from "react-router-dom";
const SignupButton = () => {
  const navigate = useNavigate();

  return (
    <button className="signup-button" onClick={() => navigate("/signup")}>
      Sign Up
    </button>
  );
};

export default SignupButton;
