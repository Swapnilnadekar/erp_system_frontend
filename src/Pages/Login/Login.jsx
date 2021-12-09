import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login_container">
      <h1>ERP System</h1>

      <div className="login_form">
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
        <Button variant="contained">Signin</Button>
        <div className="a_links">
          <a>Forgot Password</a>
          <div class="vl"></div>
          <a href="/register">New user register</a>
          <h4></h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
