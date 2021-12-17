import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { userLogout } from "../../Redux/Actions/commonUserCode";

const Header = (props) => {
  const teacher = useSelector((state) => state.teacher);
  const dispatch = useDispatch();

  useEffect(() => {}, [teacher.authenticate]);

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <div className="header_container">
        <div className="logo">
          <h1>ERP System</h1>
        </div>
        <div className="header_links">
          <NavLink className="nav_link" to="/home">
            Home
          </NavLink>
          {teacher.authenticate ? (
            <>
              <NavLink className="nav_link" to="/register">
                Register
              </NavLink>
              <NavLink className="nav_link" to="/get-all-students">
                Students
              </NavLink>
            </>
          ) : (
            ""
          )}
        </div>
        <IconButton aria-label="logout" onClick={logout} className="logout_btn">
          <LogoutIcon />
          <ul>Logout</ul>
        </IconButton>
      </div>
      {props.children}
    </>
  );
};

export default Header;
