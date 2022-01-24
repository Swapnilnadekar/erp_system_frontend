import { principalConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const principalLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: principalConstants.PRINCIPAL_LOGIN_REQUEST });
    try {
      const res = await axios.post(`/erp/principal/signin`, { ...user });
      if (res.status == 201) {
        const { token, user } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: principalConstants.PRINCIPAL_LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
        dispatch({ type: userRoleConstants.ADMIN });
      } else {
        dispatch({
          type: principalConstants.PRINCIPAL_LOGIN_FAILURE,
          payload: {
            error: "error",
          },
        });
      }
    } catch (error) {
      dispatch({
        type: principalConstants.PRINCIPAL_LOGIN_FAILURE,
        payload: {
          error: "error",
        },
      });
      alert("Please try again");
    }
  };
};

export const registerPrincipal = (principal) => {
  return async (dispatch) => {
    dispatch({ type: principalConstants.ADD_NEW_PRINCIPAL_REQEUST });
    const res = await axios.post(`/erp/principal/register`, principal);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: principalConstants.ADD_NEW_PRINCIPAL_SUCCESS,
      });
    } else if (res.status == 203) {
      alert("Principal already exists");
    } else {
      dispatch({
        type: principalConstants.ADD_NEW_PRINCIPAL_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const getAllPrincipal = () => {
  return async (dispatch) => {
    dispatch({
      type: principalConstants.GET_ALL_PRINCIPAL_REQEUST,
    });

    const res = await axios.get(`/erp/principal/get-all-data`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: principalConstants.GET_ALL_PRINCIPAL_SUCCESS,
        payload: {
          principals_list: result,
        },
      });
    } else {
      dispatch({
        type: principalConstants.GET_ALL_PRINCIPAL_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const deletePrincipal = (pri_id) => {
  return async (dispatch) => {
    dispatch({
      type: principalConstants.DELETE_PRINCIPAL_REQEUST,
    });

    const res = await axios.delete(`/erp/principal/delete-data/${pri_id}`);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: principalConstants.DELETE_PRINCIPAL_SUCCESS,
        payload: {
          principals_list: result,
        },
      });
    } else {
      dispatch({
        type: principalConstants.DELETE_PRINCIPAL_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const updatePrincipal = (updated) => {
  return async (dispatch) => {
    dispatch({ type: principalConstants.UPDATE_PRINCIPAL_REQEUST });
    const res = await axios.put(`/erp/principal/edit-data`, updated);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: principalConstants.UPDATE_PRINCIPAL_SUCCESS,
        payload: {
          principal: result,
        },
      });
    } else {
      dispatch({
        type: principalConstants.UPDATE_PRINCIPAL_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
