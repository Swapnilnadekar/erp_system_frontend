import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Register.css";

const Register = (props) => {
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

  const submitForm = async (e) => {
    e.preventDefault();

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
  };

  return (
    <div className="register_container">
      <h1>ERP System</h1>
      <form className="register_form" onSubmit={submitForm}>
        <TextField
          label="Name"
          variant="outlined"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email ID"
          variant="outlined"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Branch"
          variant="outlined"
          id="branch"
          onChange={(e) => setBranch(e.target.value)}
        />
        <TextField
          label="Roll No."
          variant="outlined"
          id="roll_no"
          onChange={(e) => setRoll_no(e.target.value)}
        />
        <TextField
          label="Date of birth"
          variant="outlined"
          id="dob"
          onChange={(e) => setDob(e.target.value)}
        />
        <TextField
          label="Mobile No."
          variant="outlined"
          id="contact"
          onChange={(e) => setContact(e.target.value)}
        />
        <TextField
          label="Username"
          variant="outlined"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label="Re-Enter Password"
          variant="outlined"
          id="cpassword"
          onChange={(e) => setCpassword(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Register
        </Button>
        <div className="a_links">
          <h4>Have an account ?</h4>
          <a href="/">&nbsp;Login</a>
          <div className="vl"></div>
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
        </div>
      </form>
    </div>
  );
};

export default Register;
