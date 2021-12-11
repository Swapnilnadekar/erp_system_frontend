import { userRoleConstants } from "../constants";

const initState = {
  role_admin: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userRoleConstants.ADMIN:
      console.log("Inside Admin Case");
      console.log("role_admin=", state.role_admin);
      state = { role_admin: true };
      break;

    case userRoleConstants.USER:
      console.log("Inside User Case");
      console.log("role_admin=", state.role_admin);
      state = { role_admin: false };
      break;
  }
  return state;
};
