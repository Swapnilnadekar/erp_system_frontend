import React, {useState, useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState(false);

    useEffect(()=>{
        if(otp.authenticate){
            navigate("/otp");
        }
    })

    const pReset = (e) =>{
        e.preventDefault();
        if (document.getElementById("reset").value.length == 0) {
            setOtpError(true);
            alert("Enter OTP");
    }
}

  return (
    <div className="container">
      <h3>Enter OTP </h3>
         <p>Please check your emails for a message with your otp. Your otp is 4 numbers long.</p>


        <form className="reset" onSubmit={pReset}>
        <TextField
          id="reset"
          label="Enter OTP"
          variant="outlined"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          color="info"
          fullWidth="true"
          style={{ margin: "5px", color: "white" }}
          error={otpError}
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
     
    </div>
  );
}

export default ResetPassword
