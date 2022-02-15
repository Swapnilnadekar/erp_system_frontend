import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "../Components/Header/Header";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "./Register.css";
import { useDispatch } from "react-redux";
import { registerStudent } from "../../Redux/Actions/student";
import { registerTeacher } from "../../Redux/Actions/teacher";
import { registerHod } from "../../Redux/Actions/hod";
import { registerAdmin } from "../../Redux/Actions/admin";
import { registerPrincipal } from "../../Redux/Actions/principal";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [roll_noError, setRoll_noError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [cpasswordError, setCpasswordError] = useState(false);
  const [profile_pic, setProfile_pic] = useState("");
  const [role, setRole] = useState("student");

  const dispatch = useDispatch();

  const submitForm = async (e) => {
    e.preventDefault();

    if (document.getElementById("register_name").value.length === 0) {
      setNameError(true);
      alert("Enter name");
    } else if (document.getElementById("register_email").value.length === 0) {
      setEmailError(true);
      alert("Enter email");
    } else if (document.getElementById("register_contact").value.length === 0) {
      setContactError(true);
      alert("Enter contact");
    } else if (
      document.getElementById("register_username").value.length === 0
    ) {
      setUsernameError(true);
      alert("Enter username");
    } else if (document.getElementById("register_roll").value.length === 0) {
      setRoll_noError(true);
      alert("Enter Roll No.");
    } else if (
      document.getElementById("register_password").value.length === 0
    ) {
      setPasswordError(true);
      alert("Enter password");
    } else if (
      document.getElementById("register_cpassword").value.length === 0
    ) {
      setCpasswordError(true);
      alert("Enter confirm password");
    } else {
      if (password !== cpassword) {
        alert("Please enter same password in confirm password");
        return;
      }

      if (role === "teacher") {
        const newTeacher = new FormData();
        newTeacher.append("name", name);
        newTeacher.append("email", email);
        newTeacher.append("branch", branch);
        newTeacher.append("contact", contact);
        newTeacher.append("username", username);
        newTeacher.append("password", password);
        newTeacher.append("profile_pic", profile_pic);

        dispatch(registerTeacher(newTeacher));

        setName("");
        setEmail("");
        setBranch("");
        setContact("");
        setUsername("");
        setPassword("");
        setCpassword("");
      } else if (role === "hod") {
        const newHod = new FormData();
        newHod.append("name", name);
        newHod.append("email", email);
        newHod.append("branch", branch);
        newHod.append("contact", contact);
        newHod.append("username", username);
        newHod.append("password", password);
        newHod.append("profile_pic", profile_pic);

        dispatch(registerHod(newHod));

        setName("");
        setEmail("");
        setBranch("");
        setContact("");
        setUsername("");
        setPassword("");
        setCpassword("");
      } else if (role === "admin") {
        const newAdmin = new FormData();
        newAdmin.append("name", name);
        newAdmin.append("email", email);
        newAdmin.append("contact", contact);
        newAdmin.append("username", username);
        newAdmin.append("password", password);
        newAdmin.append("profile_pic", profile_pic);

        dispatch(registerAdmin(newAdmin));

        setName("");
        setEmail("");
        setContact("");
        setUsername("");
        setPassword("");
        setCpassword("");
      } else if (role === "principal") {
        const newPrincipal = new FormData();
        newPrincipal.append("name", name);
        newPrincipal.append("email", email);
        newPrincipal.append("contact", contact);
        newPrincipal.append("username", username);
        newPrincipal.append("password", password);
        newPrincipal.append("profile_pic", profile_pic);

        dispatch(registerPrincipal(newPrincipal));

        setName("");
        setEmail("");
        setContact("");
        setUsername("");
        setPassword("");
        setCpassword("");
      } else {
        const newStudent = new FormData();
        newStudent.append("name", name);
        newStudent.append("email", email);
        newStudent.append("branch", branch);
        newStudent.append("roll_no", roll_no);
        newStudent.append("dob", dob);
        newStudent.append("contact", contact);
        newStudent.append("username", username);
        newStudent.append("password", password);
        newStudent.append("profile_pic", profile_pic);

        dispatch(registerStudent(newStudent));

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
    }
  };

  const setDate = (e) => {
    var date = new Date(e),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    var date = [date.getFullYear(), mnth, day].join("-");
    setDob(date);
  };

  const adminFormData = (role) => {
    return (
      <>
        <TextField
          id="register_name"
          color="info"
          label="Name"
          variant="outlined"
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
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={contact}
            id="register_contact"
            color="info"
            label="Mobile No."
            variant="outlined"
            onChange={(e) => setContact(e.target.value)}
            error={contactError}
          />
          <input
            type="file"
            name="profile_pic"
            onChange={(e) => setProfile_pic(e.target.files[0])}
          />
        </div>
        {role === "teacher" || role === "hod" ? (
          <div>
            <InputLabel id="demo-simple-select-autowidth-label">
              Branch
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              label="Branch"
            >
              <MenuItem value={"COMP"} style={{ color: "black" }}>
                COMP
              </MenuItem>
              <MenuItem value={"IT"} style={{ color: "black" }}>
                IT
              </MenuItem>
              <MenuItem value={"ENTC"} style={{ color: "black" }}>
                ENTC
              </MenuItem>
            </Select>
          </div>
        ) : (
          <></>
        )}
        <TextField
          value={username}
          id="register_username"
          color="info"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "65%", margin: "4px" }}
          error={usernameError}
        />
        <FormControl sx={{ m: 1, width: "65%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Enter Password
          </InputLabel>
          <OutlinedInput
            id="register_password"
            type={showPassword ? "text" : "password"}
            value={password}
            error={passwordError}
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
            id="register_cpassword"
            type={showCPassword ? "text" : "password"}
            value={cpassword}
            error={cpasswordError}
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

  const studentFormData = () => {
    return (
      <>
        <TextField
          id="register_name"
          color="info"
          label="Name"
          variant="outlined"
          error={nameError}
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
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={contact}
            id="register_contact"
            color="info"
            label="Mobile No."
            variant="outlined"
            error={contactError}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div
          className="class_details_container"
          style={{ width: "65%", margin: "4px" }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Branch
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            label="Branch"
          >
            <MenuItem value={"COMP"} style={{ color: "black" }}>
              COMP
            </MenuItem>
            <MenuItem value={"IT"} style={{ color: "black" }}>
              IT
            </MenuItem>
            <MenuItem value={"ENTC"} style={{ color: "black" }}>
              ENTC
            </MenuItem>
          </Select>

          <TextField
            value={roll_no}
            id="register_roll"
            color="info"
            label="Roll No."
            variant="outlined"
            error={roll_noError}
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

        <input
          type="file"
          name="profile_pic"
          onChange={(e) => setProfile_pic(e.target.files[0])}
        />

        <TextField
          value={username}
          id="register_username"
          color="info"
          label="Username"
          variant="outlined"
          error={usernameError}
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
            error={passwordError}
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
            id="register_cpassword"
            type={showCPassword ? "text" : "password"}
            value={cpassword}
            error={cpasswordError}
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
              <MenuItem value={"teacher"} style={{ color: "black" }}>
                Teacher
              </MenuItem>
              <MenuItem value={"admin"} style={{ color: "black" }}>
                Admin
              </MenuItem>
              <MenuItem value={"hod"} style={{ color: "black" }}>
                HOD
              </MenuItem>
              <MenuItem value={"principal"} style={{ color: "black" }}>
                Principal
              </MenuItem>
            </Select>
          </div>

          {role === "student" ? studentFormData(role) : adminFormData(role)}

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
