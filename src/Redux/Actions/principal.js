import { principalConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const principalLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: principalConstants.PRINCIPAL_LOGIN_REQUEST });
    try {
      const res = await axios.post(`/admin/principal/signin`, { ...user });
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
    const res = await axios.post(`/admin/principal/register`, principal);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: principalConstants.ADD_NEW_PRINCIPAL_SUCCESS,
      });
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
