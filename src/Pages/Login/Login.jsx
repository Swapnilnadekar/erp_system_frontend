import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { teacherLogin, teacherLogout } from "../../Redux/Actions/teacher";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };

    dispatch(teacherLogin(user));
  };

  // const logout = () => {
  //   dispatch(teacherLogout());
  // };

  if (teacher.authenticate) {
    alert("Logged in Successfully");
  }

  return (
    <div className="login_container">
      <h1>ERP System</h1>

      <form className="login_form" onSubmit={userLogin}>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Signin
        </Button>
        <div className="a_links">
          <a>Forgot Password</a>
          <div class="vl"></div>
          <a href="/register">New user register</a>
          <h4></h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
