import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Register.css";

const Register = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    branch: "",
    roll_no: "",
    DOB: "",
    contact: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-2">
      <h1 className="my-3">Registration Form</h1>
      <form>
        <div className="register_form">
          <TextField
            label="Name"
            variant="outlined"
            id="name"
            onChange={onChange}
          />
          <TextField
            label="Email ID"
            variant="outlined"
            id="email"
            onChange={onChange}
          />
          <TextField
            label="Branch"
            variant="outlined"
            id="branch"
            onChange={onChange}
          />
          <TextField
            label="Roll No."
            variant="outlined"
            id="roll_no"
            onChange={onChange}
          />
          <TextField
            label="Date-Of-Birth"
            variant="outlined"
            id="dob"
            onChange={onChange}
          />
          <TextField
            label="Mobile No."
            variant="outlined"
            id="contact"
            onChange={onChange}
          />
          <TextField
            label="Username"
            variant="outlined"
            id="username"
            onChange={onChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            id="password"
            onChange={onChange}
          />
          <TextField
            label="Re-Enter Password"
            variant="outlined"
            id="cpassword"
            onChange={onChange}
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
          <div className="a_links">
            <h4>Have an account?</h4>
            <div className="vl"></div>
            <a href="/">Login</a>
            <h4></h4>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
