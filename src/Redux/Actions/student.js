import { studentConstants } from "../constants";
import axios from "../axios";

export const studentLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.STUDENT_LOGIN_REQUEST });
    const res = await axios.post(`/student/signin`, { ...user });
    if (res.status == 201) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch({
        type: studentConstants.STUDENT_LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: studentConstants.STUDENT_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
    }
  };
};
