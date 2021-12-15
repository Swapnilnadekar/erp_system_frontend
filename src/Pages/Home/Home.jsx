import React, { useEffect } from "react";
import Header from "../Components/Header";
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
          <Avatar
            alt="Remy Sharp"
            src="https://www.zica.org/images/icon-student.jpg"
            style={{ height: "200px", width: "230px" }}
          />
          {teacher.authenticate ? (
            <div className="user_details">
              <h6>{teacher.user.role}</h6>
              <h6>Name: {teacher.user.name}</h6>
              <h6>Email: {teacher.user.email}</h6>
              <h6>Contact: {teacher.user.contact}</h6>
              <h6>Branch: {teacher.user.branch}</h6>
            </div>
          ) : (
            <div className="user_details">
              <div className="user_details1">
                <h6>{student.role}</h6>
              </div>
              <h6>Name: {student.user.name}</h6>
              <h6>Email: {student.user.email}</h6>
              <h6>Contact: {student.user.contact}</h6>

              <div className="user_details2">
                <h6>Branch: {student.user.branch}</h6>
                
                <h6>Roll No.: {student.user.roll_no}</h6>
              </div>
              <h6>Date of birth: {student.user.dob}</h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
