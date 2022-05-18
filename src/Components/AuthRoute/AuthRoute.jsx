import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const AuthRoute = () => {
  const { authToken } = useSelector((store) => store.auth);
  return authToken !== null ? <Navigate to="/" replace={true} /> : <Outlet />;
};

export default AuthRoute;
