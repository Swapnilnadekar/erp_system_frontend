import { hodConstants } from "../constants";

const initState = {
  token: "",
  user: {
    name: "",
    email: "",
    contact: "",
    role: "",
    branch: "",
    userName: "",
    profile_pic: "",
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
    case hodConstants.HOD_LOGIN_REQUEST:
      state = { ...state, authenticating: true, loading: true };
      break;

    case hodConstants.HOD_LOGIN_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;

    case hodConstants.HOD_LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        authenticate: false,
        loading: false,
        error: action.payload.error,
      };

    case hodConstants.HOD_LOGOUT_REQUEST:
      state = { ...state, loading: true };
      break;

    case hodConstants.HOD_LOGOUT_SUCCESS:
      state = { ...initState, loading: false };

    case hodConstants.HOD_LOGOUT_FAILURE:
      state = { ...initState, error: "error", loading: false };

    case hodConstants.ADD_NEW_HOD_REQEUST:
      state = { ...state, loading: true };
      break;

    case hodConstants.ADD_NEW_HOD_SUCCESS:
      state = { ...state, loading: false };
      break;

    case hodConstants.ADD_NEW_HOD_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;
  }
  return state;
};
