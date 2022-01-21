import { teacherConstants } from "../constants";

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
    case teacherConstants.TEACHER_LOGIN_REQUEST:
      state = { ...state, authenticating: true, loading: true };
      break;

    case teacherConstants.TEACHER_LOGIN_SUCCESS:
      state = {
        ...state,
        authenticating: false,
        authenticate: true,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;

    case teacherConstants.TEACHER_LOGIN_FAILURE:
      state = {
        ...state,
        authenticating: false,
        authenticate: false,
        loading: false,
        error: action.payload.error,
      };

    case teacherConstants.TEACHER_LOGOUT_REQUEST:
      state = { ...state, loading: true };
      break;

    case teacherConstants.TEACHER_LOGOUT_SUCCESS:
      state = { ...initState, loading: false };

    case teacherConstants.TEACHER_LOGOUT_FAILURE:
      state = { ...initState, error: "error", loading: false };

    case teacherConstants.ADD_NEW_TEACHER_REQEUST:
      state = { ...state, loading: true };
      break;

    case teacherConstants.ADD_NEW_TEACHER_SUCCESS:
      state = { ...state, loading: false };
      break;

    case teacherConstants.ADD_NEW_TEACHER_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case teacherConstants.DELETE_TEACHER_REQEUST:
      state = { ...state, loading: true };
      break;

    case teacherConstants.DELETE_TEACHER_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;

    case teacherConstants.DELETE_TEACHER_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;
  }
  return state;
};
