import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { teacherLogin, teacherLogout } from "../../Redux/Actions/teacher";
import { studentLogin } from "../../Redux/Actions/student";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { checkBoxState } from "../../Redux/Actions/userRole";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    if (checkbox == true) {
      const user = {
        username,
        password,
      };

      dispatch(teacherLogin(user));
      dispatch(checkBoxState(checkbox));
    } else {
      const user = {
        username,
        password,
      };

      dispatch(studentLogin(user));
      dispatch(checkBoxState(checkbox));
    }
  };

  if (teacher.authenticate) {
    console.log("Logged in");
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
          <div class="vl"></div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => {
                  setCheckbox(e.target.checked);
                }}
                value={checkbox}
              />
            }
            label="I am an admin"
          />
          <h4></h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
