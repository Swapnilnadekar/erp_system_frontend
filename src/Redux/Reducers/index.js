import { combineReducers } from "redux";
import teacherReducer from "./teacher";
import userRoleCheckReducer from "./userRole";
import studentReducer from "./student";

const reducer = combineReducers({
  teacher: teacherReducer,
  role: userRoleCheckReducer,
  student: studentReducer,
});

export default reducer;
