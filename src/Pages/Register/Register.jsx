import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "../Components/Header";
import "./Register.css";

import { useDispatch, useSelector } from "react-redux";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);


  const submitForm = async (e) => {
    e.preventDefault();
    // if 
    // (document.getElementById("register_name").value.length == 0) {
    //   setNameError(true);
    //   alert("Enter Name");
    // } else if (document.getElementById("register_email").value.length == 0) {
    //   setEmailError(true);
    //   alert("Enter password");
    // } else
    // {
    if (checkbox == true) {
      const newUser = {
        name,
        email,
        branch,
        contact,
        username,
        password,
      };

      const result = await axios.post(
        `http://localhost:2000/admin/teacher/register`,
        newUser
      );
      if (result.status === 201) {
        console.log("New User added");
      } else {
        console.log("Error");
      }
    } else {
      const newUser = {
        name,
        email,
        branch,
        roll_no,
        dob,
        contact,
        username,
        password,
      };
      const result = await axios.post(
        `http://localhost:2000/student/register`,
        newUser
      );
      if (result.status === 201) {
        console.log("New User added");
      } else {
        console.log("Error");
      }

      setName("");
      setEmail("");
      setBranch("");
      setRoll_no(0);
      setDob("");
      setContact("");
      setUsername("");
      setPassword("");
      setCpassword("");
    }
  
  };


  return (
    <>
    <Header />
    <div className="register_container">
      <h1>ERP System</h1>
      <form className="register_form" onSubmit={submitForm}>
        <TextField
          id="register_name"
          color="info"
          label="Name"
          variant="outlined"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={{ width: "65%", margin: "4px" }}
          error={nameError}
        />
        <div
          className="email_contact_container"
          style={{ width: "65%", margin: "4px" }}
        >
          <TextField
            value={email}
            id="register_email"
            color="info"
            label="Email ID"
            variant="outlined"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <TextField
            value={contact}
            id="register_contact"
            color="info"
            label="Mobile No."
            variant="outlined"
            id="contact"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div
          className="class_details_container"
          style={{ width: "65%", margin: "4px" }}
        >
          <TextField
            value={branch}
            id="register_branch"
            color="info"
            label="Branch"
            variant="outlined"
            id="branch"
            onChange={(e) => setBranch(e.target.value)}
          />
          <TextField
            value={roll_no}
            id="register_roll"
            color="info"
            label="Roll No."
            variant="outlined"
            id="roll_no"
            onChange={(e) => setRoll_no(e.target.value)}
          />
        </div>

        <TextField
          value={dob}
          id="register_dob"
          color="info"
          label="Date of birth"
          variant="outlined"
          id="dob"
          onChange={(e) => setDob(e.target.value)}
          style={{ width: "25%", margin: "4px" }}
        />

        <TextField
          value={username}
          id="register_username"
          color="info"
          label="Username"
          variant="outlined"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "65%", margin: "4px" }}
        />
        {/* <TextField
          value={password}
          id="register_password"
          color="info"
          label="Password"
          variant="outlined"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "65%", margin: "4px" }}
        />
        <TextField
          value={cpassword}
          id="register_c_password"
          color="info"
          label="Re-Enter Password"
          variant="outlined"
          id="cpassword"
          onChange={(e) => setCpassword(e.target.value)}
          style={{ width: "65%", margin: "4px" }}
        /> */}
        <FormControl sx={{ m: 1, width: "65%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Enter Password
          </InputLabel>
          <OutlinedInput
            id="register_password"
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
        <FormControl sx={{ m: 1, width: "65%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="login_c_password"
            type={showCPassword ? "text" : "password"}
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowCPassword(!showCPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showCPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          style={{ margin: "5px", textTransform: "none" }}
          color="success"
        >
          Register
        </Button>
        <div className="a_links">
          <a href="/">Have an account ?&nbsp;Login</a>
          <div className="vl"></div>
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
    </>
  );
};

export default Register;
