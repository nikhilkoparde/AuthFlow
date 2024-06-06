import React, { useContext } from "react";
import { auth } from "../../Services/firebase";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../Pages/HomePage/HomePage.css";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const LogoutButton = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            auth.signOut();
            setUser(null);
            navigate("/signin");
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <button className="btn" onClick={handleLogout}>
      {" "}
      <i class="bi bi-box-arrow-left"></i> Logout
    </button>
  );
};

export default LogoutButton;
