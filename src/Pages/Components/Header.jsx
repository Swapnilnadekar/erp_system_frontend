import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { userLogout } from "../../Redux/Actions/commonUserCode";

const Header = (props) => {
  const teacher = useSelector((state) => state.teacher);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {}, [student.authenticate, teacher.authenticate]);

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <div className="header_container">
        <div className="logo">
          <h1>ERP System</h1>
        </div>
        <div className="links">
          <NavLink className="nav_link" to="/">
            Home
          </NavLink>
          {/* <NavLink className="nav_link">Students</NavLink>
          <NavLink className="nav_link">Add Admin</NavLink>
          <NavLink className="nav_link">Contact us</NavLink>
          <NavLink className="nav_link">Edit Profile</NavLink> */}
          <ul onClick={logout}>Logout</ul>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default Header;
