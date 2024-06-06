import React from "react";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./HomePage.css";

export default function HomePage() {
  const user = localStorage.getItem("useremail");
  return (
    <div>
      <div className="dashboard">
        <div className="sidebar">
          {/* Sidebar content */}
          <ul>
            <br></br>
            <h2 className="h2dash">
              <li style={{ color: "black" }}>
                <button className={"btn"}>
                  {" "}
                  <i class="bi bi-person-circle"></i> Dashboard
                </button>
              </li>
            </h2>
            <hr></hr>

            <li>
              <button className={"btn"}>
                {" "}
                <i class="bi bi-person-circle"></i> My Profile
              </button>
            </li>
            <li>
              <button className={"btn"}>
                {" "}
                <i class="bi bi-qr-code-scan"></i> My Unique ID
              </button>
            </li>

            <li>
              <button className={"btn"}>
                {" "}
                <i class="bi bi-calendar-date"></i> Calender
              </button>
            </li>

            <li>
              <button className="btn">
                {" "}
                <i class="bi bi-bag-fill"></i> My Wishlist
              </button>
            </li>

            <li>
              <button className="btn">
                {" "}
                <i class="bi bi-border-all"></i> Feedback
              </button>
            </li>

            <li>
              <LogoutButton />
            </li>
          </ul>
        </div>
        <div className="main-content">
          {/* Main content */}
          <br></br>
          <h2 className="mainname"> Welcome To Your DashBoard : {user}</h2>
        </div>
      </div>
    </div>
  );
}
