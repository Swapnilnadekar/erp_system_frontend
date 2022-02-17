import { userRoleConstants } from "../constants";

const initState = {
  role_admin: false,
};

const userRole = (state = initState, action) => {
  switch (action.type) {
    case userRoleConstants.ADMIN:
      state = { role_admin: true };
      break;

    case userRoleConstants.USER:
      state = { role_admin: false };
      break;

    default:
      break;
  }
  return state;
};

export default userRole;
