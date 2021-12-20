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
