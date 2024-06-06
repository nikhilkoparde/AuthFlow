import React, { useState } from "react";
import { auth } from "../../Services/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./ResetPassword.css";

const PasswordResetForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setError("");
      setMessage("Password reset email sent. Please check your inbox.");
    } catch (error) {
      setMessage("");
      setError(
        " Failed to send password reset link to email, Please Enter valid email."
      );
    }
  };

  return (
    <div className="password-reset-container">
      <h1 className="company-logo">AuthFlow</h1>
      <br></br>
      <h1>
        <FontAwesomeIcon icon={faLock} />
      </h1>
      <h5>Trouble with logging in?</h5>
      <p>
        Enter your email address and we'll send you a link to get back into your
        account.
      </p>
      <form onSubmit={handlePasswordReset} className="password-reset-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="password-reset-input"
          required
        />
        <button type="submit" className="password-reset-button">
          Send Password Reset Link
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="signup-link-container">
        <p className="signup-text">
          {" "}
          <Link
            to="/signin"
            className="signup-link"
            style={{ textDecoration: "none" }}
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetForm;
