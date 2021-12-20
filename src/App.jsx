import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./Redux/Actions/commonUserCode";
import PrivateRoute from "./PrivateRoute";
import GetAllStudents from "./Pages/GetAllStudents/GetAllStudents";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const App = () => {
  const teacher = useSelector((state) => state.teacher);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!teacher.authenticate || !student.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [teacher.authenticate, student.authenticate]);

  return (
    <div className="app_container">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/register"
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/get-all-students"
          element={
            <PrivateRoute>
              <GetAllStudents />
            </PrivateRoute>
          }
        />
         <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
     
    </div>
  );
};

export default App;
