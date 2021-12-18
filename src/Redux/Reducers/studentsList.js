import { studentConstants } from "../constants";

const initState = {
  students_list: [],
  loading: false,
  error: "",
};

export default (state = initState, action) => {
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
      const updated_students_list = [...state, newStudent];

      state = {
        ...state,
        students_list: updated_students_list,
        loading: false,
      };
      break;

    case studentConstants.ADD_NEW_STUDENT_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    // case studentConstants.DELETE_STUDENT_REQEUST:
    //   state = { ...state, loading: true };
    //   break;

    // case studentConstants.DELETE_STUDENT_SUCCESS:
    //   state = {
    //     ...state,
    //     loading: false,
    //   };
    //   break;

    // case studentConstants.DELETE_STUDENT_FAILURE:
    //   state = { ...state, loading: false, error: action.payload.error };
    //   break;
  }
  return state;
};
