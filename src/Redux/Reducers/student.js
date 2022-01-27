import { studentConstants } from "../constants";

const initState = {
  token: "",
  user: {
    name: "",
    email: "",
    branch: "",
    roll_no: "",
    dob: "",
    contact: "",
    username: "",
    profile_pic: "",
  },
  role: "student",
  authenticate: false,
  authenticating: false,
  loading: false,
  error: "",
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case studentConstants.STUDENT_LOGIN_REQUEST:
      state = { ...state, authenticating: true, loading: true };
      break;

    case studentConstants.STUDENT_LOGIN_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;

    case studentConstants.STUDENT_LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        authenticate: false,
        loading: false,
        error: action.payload.error,
      };
      break;

    case studentConstants.STUDENT_LOGOUT_REQUEST:
      state = { ...state, loading: true };
      break;

    case studentConstants.STUDENT_LOGOUT_SUCCESS:
      state = { ...initState, loading: true };
      break;

    case studentConstants.STUDENT_LOGOUT_FAILURE:
      state = { ...initState, error: action.payload.error, loading: false };
      break;

    case studentConstants.DELETE_STUDENT_REQEUST:
      state = { ...state, loading: true };
      break;

    case studentConstants.DELETE_STUDENT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;

    case studentConstants.DELETE_STUDENT_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;
  }
  return state;
};
