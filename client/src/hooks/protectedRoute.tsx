import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  console.log(location?.pathname ?? "");
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
    if (isAuthenticated && location.pathname.includes("/signin")) {
      return <Navigate to="/home" />;
    }

  return children;
};

export default ProtectedRoute;
