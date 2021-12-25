import { hodConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const hodLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: hodConstants.HOD_LOGIN_REQUEST });
    try {
      const res = await axios.post(`/admin/hod/signin`, { ...user });
      if (res.status == 201) {
        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: hodConstants.HOD_LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
        dispatch({ type: userRoleConstants.ADMIN });
      } else {
        dispatch({
          type: hodConstants.HOD_LOGIN_FAILURE,
          payload: {
            error: "error",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: hodConstants.HOD_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
      alert("Please try again");
    }
  };
};

export const registerHod = (hod) => {
  console.log(hod);
  return async (dispatch) => {
    dispatch({ type: hodConstants.ADD_NEW_HOD_REQEUST });
    const res = await axios.post(`/admin/hod/register`, hod);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: hodConstants.ADD_NEW_HOD_SUCCESS,
      });
    } else if (res.status == 203) {
      alert("HOD for the specified branch already exists");
    } else {
      dispatch({
        type: hodConstants.ADD_NEW_HOD_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const getAllHod = () => {
  return async (dispatch) => {
    dispatch({
      type: hodConstants.GET_ALL_HOD_REQEUST,
    });

    const res = await axios.get(`/admin/hod/get-all-hod-data`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: hodConstants.GET_ALL_HOD_SUCCESS,
        payload: {
          hods_list: result, 
        },
      });
    } else {
      dispatch({
        type: hodConstants.GET_ALL_HOD_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const deleteHod = (_id) => {
  return async (dispatch) => {
    dispatch({
      type: hodConstants.DELETE_HOD_REQEUST,
    });

    const res = await axios.delete(`/admin/hod/delete-hod/${_id}`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: hodConstants.DELETE_HOD_SUCCESS,
        payload: {
          hods_list: result,
        },
      });
    } else {
      dispatch({
        type: hodConstants.DELETE_HOD_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const updateHod = (updated) => {
  return async (dispatch) => {
    dispatch({ type: hodConstants.UPDATE_HOD_REQEUST });
    const res = await axios.put(`/admin/hod/edit-hod-data`, updated);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: hodConstants.UPDATE_HOD_SUCCESS,
        payload: {
          hod: result,
        },
      });
    } else {
      dispatch({
        type: hodConstants.UPDATE_HOD_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

