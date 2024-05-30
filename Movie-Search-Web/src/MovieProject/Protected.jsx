import React, { useEffect } from "react";
import { Route, Navigate, useNavigate, Routes } from "react-router-dom";
import Movies from "./Movies";

export default function Protected(props) {
  const navigate = useNavigate();
  const isSignUp = localStorage.getItem("isSignUp");
  const isLogIn = localStorage.getItem("isLogIn");
  useEffect(() => {
    if (!isSignUp && !isLogIn) {
      navigate("/signup");
    }
  }, [isSignUp, isLogIn, navigate]);

  return (
    <Route
      path={props.path}
      element={isSignUp && isLogIn ? <Movies /> : <Navigate to="/signup" />}
    />
  );
}
