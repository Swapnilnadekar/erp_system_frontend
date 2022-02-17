import { adminConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const adminLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_LOGIN_REQUEST });
    try {
      const res = await axios.post(`erp/admin/signin`, { ...user });
      if (res.status === 201) {
        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: adminConstants.ADMIN_LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
        dispatch({ type: userRoleConstants.ADMIN });
      } else {
        dispatch({
          type: adminConstants.ADMIN_LOGIN_FAILURE,
          payload: {
            error: "error",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: adminConstants.ADMIN_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
      alert("Please try again");
    }
  };
};

export const registerAdmin = (admin) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADD_NEW_ADMIN_REQEUST });
    const res = await axios.post(`/erp/admin/register`, admin);

    if (res.status === 201) {
      const { result } = res.data;
      dispatch({
        type: adminConstants.ADD_NEW_ADMIN_SUCCESS,
        payload: {
          admin: result,
        },
      });
    } else {
      dispatch({
        type: adminConstants.ADD_NEW_ADMIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const getAllAdmin = () => {
  return async (dispatch) => {
    dispatch({
      type: adminConstants.GET_ALL_ADMIN_REQEUST,
    });

    const res = await axios.get(`/erp/admin/get-all-data`);

    if (res.status === 201) {
      const { result } = res.data;
      dispatch({
        type: adminConstants.GET_ALL_ADMIN_SUCCESS,
        payload: {
          admins_list: result,
        },
      });
    } else {
      dispatch({
        type: adminConstants.GET_ALL_ADMIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const deleteAdmin = (adm_id) => {
  return async (dispatch) => {
    dispatch({
      type: adminConstants.DELETE_ADMIN_REQEUST,
    });

    const res = await axios.delete(`/erp/admin/delete-data/${adm_id}`);

    if (res.status === 201) {
      const { result } = res.data;
      dispatch({
        type: adminConstants.DELETE_ADMIN_SUCCESS,
        payload: {
          admins_list: result,
        },
      });
    } else {
      dispatch({
        type: adminConstants.DELETE_ADMIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const updateAdmin = (updated) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.UPDATE_ADMIN_REQEUST });
    const res = await axios.put(`/erp/admin/edit-data`, updated);

    if (res.status === 201) {
      const { result } = res.data;
      dispatch({
        type: adminConstants.UPDATE_ADMIN_SUCCESS,
        payload: {
          admin: result,
        },
      });
    } else {
      dispatch({
        type: adminConstants.UPDATE_ADMIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
