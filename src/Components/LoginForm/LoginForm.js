import React, { useState } from "react";
import { auth } from "../../Services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.css"; // Import the CSS file for custom styling

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      setMessage("Successful login");
      localStorage.setItem("useremail", email);
      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
      setMessage("");
      setError("Sorry, your password or email was incorrect.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="company-logo">AuthFlow</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login-input"
            required
          />
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="login-input password-input"
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="eye-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
        </form>
        <div className="signup-link-container">
          <p className="signup-text">
            {" "}
            <Link
              to="/resetpassword"
              className="signup-link"
              style={{ textDecoration: "none" }}
            >
              Forgotten your password?
            </Link>
          </p>
          <p className="signup-text">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="signup-link"
              style={{ textDecoration: "none" }}
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
