import { teacherConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const teacherLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: teacherConstants.TEACHER_LOGIN_REQUEST });
    try {
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
        dispatch({ type: userRoleConstants.ADMIN });
      } else {
        dispatch({
          type: teacherConstants.TEACHER_LOGIN_FAILURE,
          payload: {
            error: "error",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: teacherConstants.TEACHER_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
      alert("Please try again");
    }
  };
};
