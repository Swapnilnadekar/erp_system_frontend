import { uploadResourcesConstants } from "../constants";

const initState = {
  file: {
    file_name: "",
    uploaded_by: "",
    subject: "",
    time: "",
    file_path: "",
  },
  loading: false,
  error: "",
  message: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case uploadResourcesConstants.ADD_NEW_RESOURCES_REQEUST:
      state = { ...state, loading: true };
      break;

    case uploadResourcesConstants.ADD_NEW_RESOURCES_SUCCESS:
      state = { ...state, file: action.payload.result, loading: false };
      break;

    case uploadResourcesConstants.ADD_NEW_RESOURCES_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    default:
      break;
  }
  return state;
};
