import React, { Children } from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const accessToken = JSON.parse(localStorage.getItem("authData"))?.accessToken;

  // console.log(accessToken)

  return accessToken ? children : <Navigate to="/login" replace />;
}

export default Protected;
