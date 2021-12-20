import { adminConstants } from "../constants";

const initState = {
  token: "",
  user: {
    name: "",
    email: "",
    contact: "",
    role: "",
    branch: "",
    userName: "",
  },
  role: "admin",
  authenticate: false,
  authenticating: false,
  loading: false,
  error: "",
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case adminConstants.ADMIN_LOGIN_REQUEST:
      state = { ...state, authenticating: true, loading: true };
      break;

    case adminConstants.ADMIN_LOGIN_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;

    case adminConstants.ADMIN_LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        authenticate: false,
        loading: false,
        error: action.payload.error,
      };

    case adminConstants.ADMIN_LOGOUT_REQUEST:
      state = { ...state, loading: true };
      break;

    case adminConstants.ADMIN_LOGOUT_SUCCESS:
      state = { ...initState, loading: false };

    case adminConstants.ADMIN_LOGOUT_FAILURE:
      state = { ...initState, error: "error", loading: false };

    case adminConstants.ADD_NEW_ADMIN_REQEUST:
      state = { ...state, loading: true };
      break;

    case adminConstants.ADD_NEW_ADMIN_SUCCESS:
      state = { ...state, loading: false };
      break;

    case adminConstants.ADD_NEW_ADMIN_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;
  }
  return state;
};
