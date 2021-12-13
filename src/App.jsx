import React, {useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import { useSelector } from "react-redux";



const App = () => {

  return (
    <div className="app_container">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
