import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import "./Home.css";
import { getAllAdmin } from "../../Redux/Actions/admin";

const Home = () => {
  const student = useSelector((state) => state.student);
  const teacher = useSelector((state) => state.teacher);
  const hod = useSelector((state) => state.hod);
  const admin = useSelector((state) => state.admin);
  const principal = useSelector((state) => state.principal);

  const dispatch = useDispatch();

  // useEffect(() => {}, [student, teacher, admin, hod, principal]);

  const adminRender = () => {
    return (
      <div className="user_details">
        <div className="user_role_container">
        <img src={admin.user.profile_pic} alt="img" />
          <h6>{admin.user.role}</h6>
        </div>
        <div className="name_branch_container">
          <h6>Name: {admin.user.name}</h6>
          <h6>Branch: {admin.user.branch}</h6>
        </div>
        <div className="contact_email_container">
          <h6>Contact: {admin.user.contact}</h6>
          <h6>Email: {admin.user.email}</h6>
        </div>
      </div>
    );
  };

  const teacherRender = () => {
    return (
      <div className="user_details">
        <div className="user_role_container">
        <img src={teacher.user.profile_pic} alt="img" />
          <h6>{teacher.user.role}</h6>
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
    );
  };

  const hodRender = () => {
    return (
      <div className="user_details">
        <div className="user_role_container">
        <img src={hod.user.profile_pic} alt="img" />
          <h6>{hod.user.role}</h6>
        </div>
        <div className="name_branch_container">
          <h6>Name: {hod.user.name}</h6>
          <h6>Branch: {hod.user.branch}</h6>
        </div>
        <div className="contact_email_container">
          <h6>Contact: {hod.user.contact}</h6>
          <h6>Email: {hod.user.email}</h6>
        </div>
      </div>
    );
  };

  const principalRender = () => {
    return (
      <div className="user_details">
        <div className="user_role_container">
        <img src={principal.user.profile_pic} alt="img" />
          <h6>{principal.user.role}</h6>
        </div>
        <div className="name_branch_container">
          <h6>Name: {principal.user.name}</h6>
          <h6>Branch: {principal.user.branch}</h6>
        </div>
        <div className="contact_email_container">
          <h6>Contact: {principal.user.contact}</h6>
          <h6>Email: {principal.user.email}</h6>
        </div>
      </div>
    );
  };

  const studentRender = () => {
    return (
      <div className="user_details">
        <div className="user_role_container">
          <img src={student.user.profile_pic} alt="img" />
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
    );
  };

  return (
    <>
      <Header />
      <div className="home_container">
        <div className="user_details_card">
          {teacher.authenticate ? teacherRender() : <></>}
          {student.authenticate ? studentRender() : <></>}
          {hod.authenticate ? hodRender() : <></>}
          {admin.authenticate ? adminRender() : <></>}
          {principal.authenticate ? principalRender() : <></>}
        </div>
      </div>
    </>
  );
};

export default Home;
