// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute component to protect admin routes
const PrivateRoute = ({ element }) => {
  const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

  if (!isAdminLoggedIn) {
    // Redirect to admin login page if not logged in
    return <Navigate to="/admin" />;
  }

  return element; // Render the protected route if logged in
};

export default PrivateRoute;
