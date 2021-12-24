import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import "./Home.css";

const Home = () => {
  const student = useSelector((state) => state.student);
  const teacher = useSelector((state) => state.teacher);

  useEffect(() => {
    console.log(student);
    console.log(teacher);
  }, [student, teacher]);

  return (
    <>
      <Header />
      <div className="home_container">
        <div className="user_details_card">
         
          {teacher.authenticate ? (
            <div className="user_details">
              <div className="user_role_container">
                 <Avatar
            alt="Remy Sharp"
            src="https://www.clipartmax.com/png/full/319-3191274_male-avatar-admin-profile.png"
            style={{ height: "200px", width: "230px" }}
          />
                <div className="role_container">
                <h6>{teacher.role} : {teacher.user.role}</h6>
                </div>
              </div>
              <div className="name_branch_container">
                <h6>Name: {teacher.user.name}</h6>
                <h6>Branch: {teacher.user.branch}</h6>
              </div>
              <div className="contact_email_container">
                <h6>Contact: {teacher.user.contact}</h6>
                <h6>Email: {teacher.user.email}</h6>
              </div>
            </div>
          ) : (
            <div className="user_details">
              <div className="user_role_container">
              <Avatar
            alt="Remy Sharp"
            src="https://www.zica.org/images/icon-student.jpg"
            style={{ height: "200px", width: "230px" }}
          />
                <h6>{student.user.role}</h6>
              </div>
              <div className="name_branch_container">
                <h6>Name: {student.user.name}</h6>
                <h6>Branch: {student.user.branch}</h6>
              </div>
              <div className="contact_email_container">
                <h6>Contact: {student.user.contact}</h6>
                <h6>Email: {student.user.email}</h6>
              </div>
              <div className="roll_dob_container">
                <h6>Roll No.: {student.user.roll_no}</h6>
                <h6>Date of birth: {student.user.dob}</h6>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
