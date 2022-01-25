import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ResetPassword.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = (props) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const pReset = async (e) => {
    e.preventDefault();
    if (
      document.getElementById("OTP").value.length == 0 ||
      document.getElementById("password").value.length == 0
    ) {
      // setOtpError(true);
      alert("Enter valid details");
    } else {
      const resetPasswordResult = await axios.put(
        "http://localhost:2000/admin/reset-password",
        { otp, new_password: password, email: props.email }
      );
    }
  };

  return (
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
          error={otpError}
        />
        <TextField
          id="password"
          label="Enter password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          color="info"
          fullWidth="true"
          style={{ margin: "5px", color: "white" }}
          error={passwordError}
        />
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
          Authenticate
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
