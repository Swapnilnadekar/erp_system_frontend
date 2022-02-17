import { hodConstants } from "../constants";

const initState = {
  hods_list: [],
  loading: false,
  error: "",
};

const hodList = (state = initState, action) => {
  switch (action.type) {
    case hodConstants.GET_ALL_HOD_REQEUST:
      state = { ...state, loading: true };
      break;

    case hodConstants.GET_ALL_HOD_SUCCESS:
      state = {
        ...state,
        hods_list: action.payload.hods_list,
        loading: false,
      };
      break;

    case hodConstants.GET_ALL_HOD_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case hodConstants.UPDATE_HOD_REQEUST:
      state = { ...state, loading: true };
      break;

    case hodConstants.UPDATE_HOD_SUCCESS:
      var updatedHod = action.payload.hod;
      var updatedList = state.hods_list.filter((current) => {
        return current._id !== updatedHod._id;
      });
      updatedList = [...updatedList, updatedHod];

      state = {
        ...state,
        hods_list: updatedList,
        loading: false,
      };
      break;

    case hodConstants.UPDATE_HOD_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    default:
      break;
  }
  return state;
};
export default hodList;
