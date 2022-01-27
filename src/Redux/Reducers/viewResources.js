import { viewResourcesConstants } from "../constants";

const initState = {
  resources_list: [],
  loading: false,
  error: "",
};

export default (state = initState, action) => {
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
  }
  return state;
};
