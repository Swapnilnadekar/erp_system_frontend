import { adminConstants, userRoleConstants } from "../constants";
import axios from "../axios";

export const adminLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADMIN_LOGIN_REQUEST });
    try {
      const res = await axios.post(`/admin/signin`, { ...user });
      if (res.status == 201) {
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
  console.log(admin);
  return async (dispatch) => {
    dispatch({ type: adminConstants.ADD_NEW_ADMIN_REQEUST });
    const res = await axios.post(`/admin/register`, admin);

    if (res.status == 201) {
      const { result } = res.data;
      dispatch({
        type: adminConstants.ADD_NEW_ADMIN_SUCCESS,
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
