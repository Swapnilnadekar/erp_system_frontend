import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { userLogout } from "../../../Redux/Actions/commonUserCode";
import { NavDropdown } from "react-bootstrap";

const Header = (props) => {
  const teacher = useSelector((state) => state.teacher);
  const admin = useSelector((state) => state.admin);
  const hod = useSelector((state) => state.hod);
  const principal = useSelector((state) => state.principal);
  const student = useSelector((state) => state.student);
  const dispatch = useDispatch();

  useEffect(() => {}, [teacher.authenticate]);

  const logout = () => {
    dispatch(userLogout());
  };

  return (
    <>
      <div className="header_container">
        <div className="logo">
          <h3>ERP System</h3>
        </div>
        <div className="header_links">
          <NavLink className="nav_link" to="/home">
            Home
          </NavLink>

          {student.authenticate ? (
            <>
              <NavLink className="nav_link" to="/view-learning-resources">
                View Learning Resources
              </NavLink>
            </>
          ) : (
            ""
          )}

          {teacher.authenticate || hod.authenticate ? (
            <>
              <NavLink className="nav_link" to="/upload-learning-resources">
                ULS
              </NavLink>
            </>
          ) : (
            ""
          )}
          {teacher.authenticate ||
          hod.authenticate ||
          admin.authenticate ||
          principal.authenticate ? (
            <>
              <NavLink className="nav_link" to="/register">
                Register
              </NavLink>
              <NavDropdown
                id="nav-dropdown"
                title="Show All Data"
                menuVariant="dark"
              >
                <div className="dropdownlist">
                  <NavLink className="nav_link" to="/get-all-students">
                    Students
                  </NavLink>
                  <NavLink className="nav_link" to="/get-all-admin">
                    Admin
                  </NavLink>
                  <NavLink className="nav_link" to="/get-all-hod">
                    Hod
                  </NavLink>
                  <NavLink className="nav_link" to="/get-all-principal">
                    Principal
                  </NavLink>
                  <NavLink className="nav_link" to="/get-all-teacher">
                    Teacher
                  </NavLink>
                  <NavDropdown.Divider />
                </div>
              </NavDropdown>
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
