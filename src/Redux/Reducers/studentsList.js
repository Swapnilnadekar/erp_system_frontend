import { studentConstants } from "../constants";

const initState = {
  students_list: [],
  loading: false,
  error: "",
};

const studentsList = (state = initState, action) => {
  switch (action.type) {
    case studentConstants.GET_ALL_STUDENTS_REQEUST:
      state = { ...state, loading: true };
      break;

    case studentConstants.GET_ALL_STUDENTS_SUCCESS:
      state = {
        ...state,
        students_list: action.payload.students_list,
        loading: false,
      };
      break;

    case studentConstants.GET_ALL_STUDENTS_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case studentConstants.ADD_NEW_STUDENT_REQEUST:
      state = { ...state, loading: true };
      break;

    case studentConstants.ADD_NEW_STUDENT_SUCCESS:
      const newStudent = action.payload.student;
      const updated_students_list = [...state.students_list, newStudent];

      state = {
        ...state,
        students_list: updated_students_list,
        loading: false,
      };
      break;

    case studentConstants.ADD_NEW_STUDENT_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    case studentConstants.UPDATE_STUDENT_REQEUST:
      state = { ...state, loading: true };
      break;

    case studentConstants.UPDATE_STUDENT_SUCCESS:
      var updatedStudent = action.payload.student;
      var updatedList = state.students_list.filter((current) => {
        return current._id !== updatedStudent._id;
      });
      updatedList = [...updatedList, updatedStudent];

      state = {
        ...state,
        students_list: updatedList,
        loading: false,
      };
      break;

    case studentConstants.UPDATE_STUDENT_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    default:
      break;
  }
  return state;
};
export default studentsList;
