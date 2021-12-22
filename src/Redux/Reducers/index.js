import { combineReducers } from "redux";
import teacherReducer from "./teacher";
import userRoleCheckReducer from "./userRole";
import studentReducer from "./student";
import studentListReducer from "./studentsList";
import adminListReducer from "./adminsList";
import hodReducer from "./hod";
import adminReducer from "./admin";
import principalReducer from "./principal";

const reducer = combineReducers({
  teacher: teacherReducer,
  role: userRoleCheckReducer,
  student: studentReducer,
  studentList: studentListReducer,
  hod: hodReducer,
  admin: adminReducer,
  principal: principalReducer,
  adminList: adminListReducer,
});

export default reducer;
