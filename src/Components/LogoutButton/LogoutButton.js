import React, { useContext } from "react";
import { auth } from "../../Services/firebase";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../Pages/HomePage/HomePage.css";
const LogoutButton = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    navigate("/signin");
  };

  return (
    <button className="btn" onClick={handleLogout}>
      {" "}
      <i class="bi bi-box-arrow-left"></i> Logout
    </button>
  );
};

export default LogoutButton;
