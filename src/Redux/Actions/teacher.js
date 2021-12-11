import { teacherConstants } from "../constants";
import axios from "../axios";

export const teacherLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: teacherConstants.TEACHER_LOGIN_REQUEST });
    const res = await axios.post(`/admin/teacher/signin`, { ...user });
    if (res.status == 201) {
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: teacherConstants.TEACHER_LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: teacherConstants.TEACHER_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));

      dispatch({
        type: teacherConstants.USER_AUTH_SUCCESS,
        payload: { token, user },
      });
    } else {
      dispatch({
        type: teacherConstants.USER_AUTH_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};

export const teacherLogout = () => {
  return async (dispatch) => {
    dispatch({ type: teacherConstants.TEACHER_LOGOUT_REQUEST });

    const res = await axios.post(`/admin/teacher/signout`);

    if (res.status == 201) {
      localStorage.clear();
      dispatch({
        type: teacherConstants.TEACHER_LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: teacherConstants.TEACHER_LOGOUT_FAILURE,
        payload: { error: "error" },
      });
    }
  };
};
