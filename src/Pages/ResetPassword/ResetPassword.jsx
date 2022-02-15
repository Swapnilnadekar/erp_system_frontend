import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ResetPassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const pReset = async (e) => {
    e.preventDefault();
    if (
      document.getElementById("OTP").value.length === 0 ||
      document.getElementById("password").value.length === 0
    ) {
      alert("Enter valid details");
    } else {
      const resetPasswordResult = await axios.put(
        "http://localhost:2000/erp/reset-password",
        { otp, new_password: password, email: props.email }
      );

      if (resetPasswordResult.status === 401) {
        alert(resetPasswordResult.data);
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="reset_container">
    <div className="container">
      <h3>Enter OTP </h3>
      <p>
        Please check your emails for a message with your otp. Your otp is 4
        numbers long.
      </p>

      <form className="reset" onSubmit={pReset}>
        <TextField
          id="OTP"
          label="Enter OTP"
          variant="outlined"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          color="info"
          fullWidth="true"
          style={{ margin: "5px", color: "white" }}
        />
        <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Enter Password
          </InputLabel>
          <OutlinedInput
            id="password"
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
            label="Enter password"
          />
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          autoCapitalize="0"
          style={{
            margin: "20px",
            textTransform: "none",
            backgroundColor: "Blue",
            color: "white",
          }}
          color="inherit"
        >
          SUBMIT
        </Button>
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;
