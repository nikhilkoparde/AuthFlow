import React, { useState } from "react";
import { auth } from "../../Services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./SignUpForm.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showSuccessAlert, showFailedAlert } from "../Toast/Toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      showFailedAlert("Passwords do not match");
      if (password.length < 6) {
        setError("Password should be at least 6 characters long");
        showFailedAlert("Password should be at least 6 characters long");
        return;
      }
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showSuccessAlert("Successful registration!");
      console.log("Successful registration");
      navigate("/signin");
    } catch (err) {
      console.log(err.message);
      setError("Invalid Email!");
      showFailedAlert("Invalid Email!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="signup-container">
        <div className="signup-box">
          <h1 className="company-logo">AuthFlow</h1>
          <form className="signup-form" onSubmit={handleSignUp}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="signup-input"
              required
            />
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="signup-input password-input"
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="eye-icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="signup-input password-input"
                required
              />
              <FontAwesomeIcon
                icon={showConfirmPassword ? faEyeSlash : faEye}
                className="eye-icon"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          <div className="signup-footer">
            <div className="signup-link-container">
              <p className="signup-text">
                Already have an account?{" "}
                <Link
                  to="/signin"
                  className="signup-link"
                  style={{ textDecoration: "none" }}
                >
                  SignIn
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
