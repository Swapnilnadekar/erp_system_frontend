import React from "react";
import { Component } from "react";
import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
