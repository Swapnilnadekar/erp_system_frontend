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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import "./Login.css";
import { adminLogin } from "../../Redux/Actions/admin";
import { hodLogin } from "../../Redux/Actions/hod";
import { principalLogin } from "../../Redux/Actions/principal";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPassswordError] = useState(false);
  const [role, setRole] = useState("teacher");

  const student = useSelector((state) => state.student);
  const teacher = useSelector((state) => state.teacher);
  const admin = useSelector((state) => state.admin);
  const hod = useSelector((state) => state.hod);
  const principal = useSelector((state) => state.principal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      student.authenticate ||
      teacher.authenticate ||
      admin.authenticate ||
      hod.authenticate ||
      principal.authenticate
    ) {
      navigate("/home");
    }
  }, [student, teacher, admin, hod, principal]);

  const userLogin = (e) => {
    e.preventDefault();
    if (document.getElementById("login_username").value.length == 0) {
      setNameError(true);
      alert("Enter username");
    } else if (document.getElementById("login_password").value.length == 0) {
      setPassswordError(true);
      alert("Enter password");
    } else {
      const user = {
        username,
        password,
      };
      if (checkbox == true) {
        if (role === "teacher") {
          dispatch(teacherLogin(user));
        } else if (role === "admin") {
          dispatch(adminLogin(user));
        } else if (role === "hod") {
          dispatch(hodLogin(user));
        } else if (role === "principal") {
          dispatch(principalLogin(user));
        }
      } else {
        dispatch(studentLogin(user));
      }
    }

    setUsername("");
    setPassword("");
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
          error={nameError}
        />
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            label="Password"
            error={passwordError}
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
        {checkbox === true ? (
          <RadioGroup
            aria-label="role"
            defaultValue="teacher"
            name="radio-buttons-group"
            onChange={(e) => setRole(e.target.value)}
          >
            <div className="radio_btns">
              <FormControlLabel
                value="teacher"
                control={<Radio />}
                label="Teacher"
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
              <FormControlLabel value="hod" control={<Radio />} label="hod" />
              <FormControlLabel
                value="principal"
                control={<Radio />}
                label="Principal"
              />
            </div>
          </RadioGroup>
        ) : (
          <></>
        )}
        <div className="a_links">
          <a href="">Forgot Password</a>
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
        </div>
      </form>
    </div>
  );
};

export default Login;
