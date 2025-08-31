import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const userName = useSelector((state) => state.register.users);

  if (userName.length === 0) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};