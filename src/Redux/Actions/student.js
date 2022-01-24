import { studentConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const studentLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.STUDENT_LOGIN_REQUEST });
    try {
      const res = await axios.post(`/erp/student/signin`, { ...user });
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

    const res = await axios.get(`/erp/student/get-all-data`);

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

export const deleteStudents = (std_id) => {
  return async (dispatch) => {
    dispatch({
      type: studentConstants.DELETE_STUDENT_REQEUST,
    });

    const res = await axios.delete(`/erp/student/delete-data/${std_id}`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: studentConstants.DELETE_STUDENT_SUCCESS,
        payload: {
          students_list: result,
        },
      });
    } else {
      dispatch({
        type: studentConstants.DELETE_STUDENT_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const registerStudent = (student) => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.ADD_NEW_STUDENT_REQEUST });
    const res = await axios.post(`/erp/student/register`, student);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: studentConstants.ADD_NEW_STUDENT_SUCCESS,
        payload: {
          student: result,
        },
      });
    } else {
      dispatch({
        type: studentConstants.ADD_NEW_STUDENT_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const updateStudent = (updated) => {
  return async (dispatch) => {
    dispatch({ type: studentConstants.UPDATE_STUDENT_REQEUST });
    const res = await axios.put(`/erp/student/edit-data`, updated);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: studentConstants.UPDATE_STUDENT_SUCCESS,
        payload: {
          student: result,
        },
      });
    } else {
      dispatch({
        type: studentConstants.UPDATE_STUDENT_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
