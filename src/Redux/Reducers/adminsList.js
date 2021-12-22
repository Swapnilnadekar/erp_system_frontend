import { adminConstants } from "../constants";

const initState = {
  admins_list: [],
  loading: false,
  error: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case adminConstants.GET_ALL_ADMIN_REQEUST:
      state = { ...state, loading: true };
      break;

    case adminConstants.GET_ALL_ADMIN_SUCCESS:
      state = {
        ...state,
        admins_list: action.payload.admins_list,
        loading: false,
      };
      break;

    case adminConstants.GET_ALL_ADMIN_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case adminConstants.ADD_NEW_ADMIN_REQEUST:
      state = { ...state, loading: true };
      break;

    case adminConstants.ADD_NEW_ADMIN_SUCCESS:
      const newAdmin = action.payload.admin;
      const updated_admins_list = [...state.admins_list, newAdmin];

      state = {
        ...state,
        admins_list: updated_admins_list,
        loading: false,
      };
      break;

    case adminConstants.ADD_NEW_ADMIN_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case adminConstants.UPDATE_ADMIN_REQEUST:
      state = { ...state, loading: true };
      break;

    case adminConstants.UPDATE_ADMIN_SUCCESS:
      var updatedAdmin = action.payload.admin;
      var updatedList = state.admins_list.filter((current) => {
        return current.adm_id !== updatedAdmin.adm_id;
      });
      updatedList = [...updatedList, updatedAdmin];

      state = {
        ...state,
        admins_list: updatedList,
        loading: false,
      };
      break;

    case adminConstants.UPDATE_ADMIN_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;
  }
  return state;
};