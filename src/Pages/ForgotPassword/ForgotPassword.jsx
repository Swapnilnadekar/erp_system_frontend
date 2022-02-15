import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ForgotPassword.css";
import axios from "axios";
import ResetPassword from "../ResetPassword/ResetPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [enterOTP, setEnterOTP] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const passReset = async (e) => {
    e.preventDefault();
    if (document.getElementById("password_reset").value.length === 0) {
      setEmailError(true);
      alert("Enter email");
    } else {
      const sendOTPReq = await axios.post(
        "http://localhost:2000/erp/forgot-password",
        { email }
      );
      if (sendOTPReq.status === 400) {
        console.log(sendOTPReq);
      } else {
        console.log("OTP sent successfully. Check your email");
        // navigate("/otp-validation");
        setEnterOTP(true);
      }
    }
  };

  return (
    <div className="forcontainer">
      {enterOTP === false ? (
        <>
          <h3>Trouble Logging In? </h3>
          <p>
            Enter your email and we'll send you a OTP to get back into your
            account.
          </p>

          <form className="password_reset" onSubmit={passReset}>
            <TextField
              id="password_reset"
              label="Email ID"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="info"
              fullWidth="true"
              style={{ margin: "5px", color: "white" }}
              error={emailError}
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
              Send OTP
            </Button>
          </form>
        </>
      ) : (
        <ResetPassword email={email} />
      )}
    </div>
  );
};

export default ForgotPassword;
