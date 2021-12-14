import {
  userRoleConstants,
  teacherConstants,
  studentConstants,
} from "../constants";

export const checkBoxState = (state) => {
  console.log(state);
  return async (dispatch) => {
    if (state === true) {
      console.log("state = true");
      dispatch({ type: userRoleConstants.ADMIN });
    } else {
      console.log("state = false");
      dispatch({ type: userRoleConstants.USER });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.role === "student") {
        dispatch({
          type: studentConstants.STUDENT_LOGIN_SUCCESS,
          payload: { token, user },
        });
      } else {
        dispatch({
          type: teacherConstants.TEACHER_LOGIN_SUCCESS,
          payload: { token, user },
        });
      }
    } else {
      console.log("No logged in user");
      // dispatch({
      //   type: studentConstants.STUDENT_LOGIN_FAILURE,
      //   payload: { error: "Failed to Login" },
      // });
    }
  };
};
