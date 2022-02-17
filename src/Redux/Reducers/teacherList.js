import { teacherConstants } from "../constants";

const initState = {
  teachers_list: [],
  loading: false,
  error: "",
};

const teacherList = (state = initState, action) => {
  switch (action.type) {
    case teacherConstants.GET_ALL_TEACHER_REQEUST:
      state = { ...state, loading: true };
      break;

    case teacherConstants.GET_ALL_TEACHER_SUCCESS:
      state = {
        ...state,
        teachers_list: action.payload.teachers_list,
        loading: false,
      };
      break;

    case teacherConstants.GET_ALL_TEACHER_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    // case teacherConstants.ADD_NEW_TEACHER_REQEUST:
    //   state = { ...state, loading: true };
    //   break;

    // case teacherConstants.ADD_NEW_TEACHER_SUCCESS:
    //   const newTeacher = action.payload.teacher;
    //   const updated_teachers_list = [...state.teachers_list, newTeacher];

    //   state = {
    //     ...state,
    //     teachers_list: updated_teachers_list,
    //     loading: false,
    //   };
    //   break;

    // case teacherConstants.ADD_NEW_TEACHER_FAILURE:
    //   state = { ...state, loading: false, error: action.payload.error };
    //   break;

    case teacherConstants.UPDATE_TEACHER_REQEUST:
      state = { ...state, loading: true };
      break;

    case teacherConstants.UPDATE_TEACHER_SUCCESS:
      var updatedTeacher = action.payload.teacher;
      var updatedList = state.teachers_list.filter((current) => {
        return current._id !== updatedTeacher._id;
      });
      updatedList = [...updatedList, updatedTeacher];

      state = {
        ...state,
        teachers_list: updatedList,
        loading: false,
      };
      break;

    case teacherConstants.UPDATE_TEACHER_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    default:
      break;
  }
  return state;
};
export default teacherList;
