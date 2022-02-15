import {
  userRoleConstants,
  teacherConstants,
  studentConstants,
  adminConstants,
  hodConstants,
  principalConstants,
} from "../constants";
import jwt from "jsonwebtoken";
import axios from "../axios";

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    jwt.verify(
      token,
      "this-is-secrete-key-store-it-in-.env",
      (error, result) => {
        if (error) {
          dispatch(userLogout());
        }
      }
    );

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "students") {
        dispatch({
          type: studentConstants.STUDENT_LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else if (user.role === "admin") {
        dispatch({
          type: adminConstants.ADMIN_LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else if (user.role === "teacher") {
        dispatch({
          type: teacherConstants.TEACHER_LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else if (user.role === "hod") {
        dispatch({
          type: hodConstants.HOD_LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else if (user.role === "principal") {
        dispatch({
          type: principalConstants.PRINCIPAL_LOGIN_SUCCESS,
          payload: { token, user },
        });
      }
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "students") {
        dispatch({ type: studentConstants.STUDENT_LOGOUT_REQUEST });
        const res = await axios.post(`/erp/signout`);

        if (res.status == 201) {
          localStorage.clear();
          dispatch({
            type: studentConstants.STUDENT_LOGOUT_SUCCESS,
          });
          dispatch({ type: userRoleConstants.USER });
        } else {
          dispatch({
            type: studentConstants.STUDENT_LOGOUT_FAILURE,
            payload: { error: "error" },
          });
        }
      } else if (user.role === "admin") {
        dispatch({ type: adminConstants.ADMIN_LOGOUT_REQUEST });
        const res = await axios.post(`/erp/signout`);

        if (res.status == 201) {
          localStorage.clear();
          dispatch({
            type: adminConstants.ADMIN_LOGOUT_SUCCESS,
          });
          dispatch({ type: userRoleConstants.USER });
        } else {
          dispatch({
            type: adminConstants.ADMIN_LOGOUT_FAILURE,
            payload: { error: "error" },
          });
        }
      } else if (user.role === "hod") {
        dispatch({ type: hodConstants.HOD_LOGOUT_REQUEST });
        const res = await axios.post(`/erp/signout`);

        if (res.status == 201) {
          localStorage.clear();
          dispatch({
            type: hodConstants.HOD_LOGOUT_SUCCESS,
          });
          dispatch({ type: userRoleConstants.USER });
        } else {
          dispatch({
            type: hodConstants.HOD_LOGOUT_FAILURE,
            payload: { error: "error" },
          });
        }
      } else if (user.role === "principal") {
        dispatch({ type: principalConstants.PRINCIPAL_LOGOUT_REQUEST });
        const res = await axios.post(`/erp/signout`);

        if (res.status == 201) {
          localStorage.clear();
          dispatch({
            type: principalConstants.PRINCIPAL_LOGOUT_SUCCESS,
          });
          dispatch({ type: userRoleConstants.USER });
        } else {
          dispatch({
            type: principalConstants.PRINCIPAL_LOGOUT_FAILURE,
            payload: { error: "error" },
          });
        }
      } else if (user.role === "teacher") {
        dispatch({ type: teacherConstants.TEACHER_LOGOUT_REQUEST });

        const res = await axios.post(`/erp/signout`);

        if (res.status == 201) {
          localStorage.clear();
          dispatch({
            type: teacherConstants.TEACHER_LOGOUT_SUCCESS,
          });
          dispatch({ type: userRoleConstants.USER });
        } else {
          dispatch({
            type: teacherConstants.TEACHER_LOGOUT_FAILURE,
            payload: { error: "error" },
          });
        }
      }
    }
  };
};
