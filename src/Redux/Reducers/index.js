import { combineReducers } from "redux";
import teacherReducer from "./teacher";
import userRoleCheckReducer from "./userRole";
import studentReducer from "./student";
import studentListReducer from "./studentsList";

const reducer = combineReducers({
  teacher: teacherReducer,
  role: userRoleCheckReducer,
  student: studentReducer,
  studentList: studentListReducer,
});

export default reducer;
