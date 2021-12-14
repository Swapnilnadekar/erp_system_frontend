import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { teacherLogin } from "../../Redux/Actions/teacher";
import { studentLogin } from "../../Redux/Actions/student";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { checkBoxState } from "../../Redux/Actions/commonUserCode";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const teacher = useSelector((state) => state.teacher);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {
    if (student.authenticate || teacher.authenticate) {
      navigate("/home");
    }
  }, [student, teacher]);

  const userLogin = (e) => {
    e.preventDefault();
    if (document.getElementById("login_username").value.length == 0) {
      alert("Enter username");
    } else if (document.getElementById("login_password").value.length == 0) {
      alert("Enter password");
    } else {
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
          id="login_username"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          color="info"
          fullWidth="true"
          style={{ margin: "5px", color: "white" }}
        />
        {/* <TextField
          id="login_password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          color="info"
          fullWidth="true"
          style={{ margin: "5px", color: "white" }}
        /> */}
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="login_password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          autoCapitalize="0"
          style={{
            margin: "20px",
            textTransform: "none",
            backgroundColor: "#ff0000",
            color: "white",
          }}
          color="inherit"
        >
          Signin
        </Button>
        <div className="a_links">
          <a href="">Forgot Password</a>
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
                style={{ color: "white" }}
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
