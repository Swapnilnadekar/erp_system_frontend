import { userRoleConstants } from "../constants";

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
