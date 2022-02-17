import { viewResourcesConstants } from "../constants";

const initState = {
  resources_list: [],
  loading: false,
  error: "",
};

const viewResources = (state = initState, action) => {
  switch (action.type) {
    case viewResourcesConstants.GET_ALL_RESOURCES_REQEUST:
      state = { ...state, loading: true };
      break;

    case viewResourcesConstants.GET_ALL_RESOURCES_SUCCESS:
      state = {
        ...state,
        resources_list: action.payload.resources_list,
        loading: false,
      };
      break;

    case viewResourcesConstants.GET_ALL_RESOURCES_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    default:
      break;
  }
  return state;
};
export default viewResources;
