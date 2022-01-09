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

export const registerTeacher = (teacher) => {
  return async (dispatch) => {
    dispatch({ type: teacherConstants.ADD_NEW_TEACHER_REQEUST });
    const res = await axios.post(`/admin/teacher/register`, teacher);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: teacherConstants.ADD_NEW_TEACHER_SUCCESS,
      });
    } else {
      dispatch({
        type: teacherConstants.ADD_NEW_TEACHER_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const getAllTeacher = () => {
  return async (dispatch) => {
    dispatch({
      type: teacherConstants.GET_ALL_TEACHER_REQEUST,
    });

    const res = await axios.get(`/admin/teacher/get-all-teacher-data`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: teacherConstants.GET_ALL_TEACHER_SUCCESS,
        payload: {
          teachers_list: result,
        },
      });
    } else {
      dispatch({
        type: teacherConstants.GET_ALL_TEACHER_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const deleteTeacher = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: teacherConstants.DELETE_TEACHER_REQEUST,
    });

    const res = await axios.delete(`/admin/teacher/delete-teacher/${_id}`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: teacherConstants.DELETE_TEACHER_SUCCESS,
        payload: {
          teachers_list: result,
        },
      });
    } else {
      dispatch({
        type: teacherConstants.DELETE_TEACHER_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const updateTeacher = (updated) => {
  return async (dispatch) => {
    dispatch({ type: teacherConstants.UPDATE_TEACHER_REQEUST });
    const res = await axios.put(`/admin/teacher/edit-teacher-data`, updated);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: teacherConstants.UPDATE_TEACHER_SUCCESS,
        payload: {
          teacher: result,
        },
      });
    } else {
      dispatch({
        type: teacherConstants.UPDATE_TEACHER_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
