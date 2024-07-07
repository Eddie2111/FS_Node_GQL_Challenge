import React from "react";
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated && location.pathname === "/signin") {
    return <Navigate to="/" />;
  }
  if (!isAuthenticated && location.pathname === "/signin") {
    return children;
  }
  if (!isAuthenticated ) {
    return <Navigate to="/signin" />;
  }
  if (!isAuthenticated && location.pathname === "/home") {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
