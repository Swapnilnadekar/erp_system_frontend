import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "../Components/Header";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [roll_no, setRoll_no] = useState("");
  const [dob, setDob] = useState(new Date());
  const [contact, setContact] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [role, setRole] = useState("student");

  const submitForm = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      alert("Please enter same password in confirm password");
      return;
    }

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
        alert("New User added");
      } else {
        alert("error");
      }

      setName("");
      setEmail("");
      setBranch("");
      setRoll_no(0);
      setDob(new Date());
      setContact("");
      setUsername("");
      setPassword("");
      setCpassword("");
    }
  };

  const teacherFormData = () => {
    return (
      <>
        <TextField
          id="register_name"
          color="info"
          label="Name"
          variant="outlined"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={{ width: "65%", margin: "4px" }}
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
          value={username}
          id="register_username"
          color="info"
          label="Username"
          variant="outlined"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "65%", margin: "4px" }}
        />
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
      </>
    );
  };

  const setDate = (e) => {
    var date = new Date(e),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    var date = [date.getFullYear(), mnth, day].join("-");
    setDob(date);
  };

  const studentFormData = () => {
    return (
      <>
        <TextField
          id="register_name"
          color="info"
          label="Name"
          variant="outlined"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          style={{ width: "65%", margin: "4px" }}
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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date of birth"
            inputFormat="MM/dd/yyyy"
            value={dob}
            onChange={setDate}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

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
      </>
    );
  };

  return (
    <>
      <Header />
      <div className="register_container">
        <form className="register_form" onSubmit={submitForm}>
          <div className="user_role_select">
            <InputLabel id="demo-simple-select-autowidth-label">
              Role
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value={"student"} style={{ color: "black" }}>
                Student
              </MenuItem>
              <MenuItem value={"admin"} style={{ color: "black" }}>
                Admin
              </MenuItem>
            </Select>
          </div>

          {role == "student" ? studentFormData() : teacherFormData()}

          <Button
            type="submit"
            variant="contained"
            style={{ margin: "5px", textTransform: "none" }}
            color="success"
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
