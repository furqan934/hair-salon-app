import React from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const user = useContext(AuthContext);
  if (!user || !user.token) {
    // redirect to login page if the user are not login
    return <Navigate to="login" replace />;
  }
  return children; // return protected page if the user are loginUser
};

export default ProtectedRoute;
