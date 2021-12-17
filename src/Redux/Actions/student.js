import { studentConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const studentLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.STUDENT_LOGIN_REQUEST });
    try {
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
        dispatch({ type: userRoleConstants.USER });
      } else {
        dispatch({
          type: studentConstants.STUDENT_LOGIN_FAILURE,
          payload: {
            error: "error",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: studentConstants.STUDENT_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
      alert("Please try again");
    }
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    dispatch({
      type: studentConstants.GET_ALL_STUDENTS_REQEUST,
    });

    const res = await axios.get(`/admin/teacher/get-all-student-data`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: studentConstants.GET_ALL_STUDENTS_SUCCESS,
        payload: {
          students_list: result,
        },
      });
    } else {
      dispatch({
        type: studentConstants.GET_ALL_STUDENTS_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
