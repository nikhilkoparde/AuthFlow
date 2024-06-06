import React from "react";
import { UserProvider } from "./Context/UserContext";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DashboardPage from "./Pages/DashboardPage/DashboardPage";
import ProtectedRoute from "./Components/ProtectedRoute";
import ResetPassword from "./Components/PasswordResetForm/ResetPassword";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/resetpassword"
            element={<ResetPassword></ResetPassword>}
          />
        </Routes>
        <ToastContainer />
      </Router>
    </UserProvider>
  );
};

export default App;
