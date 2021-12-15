import {
  userRoleConstants,
  teacherConstants,
  studentConstants,
} from "../constants";
import axios from "../axios";

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "student") {
        console.log("Student Success");
        dispatch({
          type: studentConstants.STUDENT_LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else {
        console.log("Teacher Success");
        dispatch({
          type: teacherConstants.TEACHER_LOGIN_SUCCESS,
          payload: { token, user },
        });
      }
    } else {
      console.log("No logged in user");
      // dispatch({
      //   type: studentConstants.STUDENT_LOGIN_FAILURE,
      //   payload: { error: "Failed to Login" },
      // });
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "student") {
        dispatch({ type: studentConstants.STUDENT_LOGOUT_REQUEST });
        const res = await axios.post(`/student/signout`);

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
      } else {
        dispatch({ type: teacherConstants.TEACHER_LOGOUT_REQUEST });

        const res = await axios.post(`/admin/teacher/signout`);

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
