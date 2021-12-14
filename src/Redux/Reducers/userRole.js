import { userRoleConstants } from "../constants";

const initState = {
  role_admin: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case userRoleConstants.ADMIN:
      state = { role_admin: true };
      break;

    case userRoleConstants.USER:
      state = { role_admin: false };
      break;
  }
  return state;
};
