import { combineReducers } from "redux";
import teacherReducer from "./teacher";
import userRoleCheckReducer from "./userRole";
import studentReducer from "./student";
import studentListReducer from "./studentsList";
import adminListReducer from "./adminsList";
import hodListReducer from "./hodList";
import principalListReducer from "./principalList";
import teacherListReducer from "./teacherList";
import hodReducer from "./hod";
import adminReducer from "./admin";
import principalReducer from "./principal";
import resourcesListReducer from "./viewResources";

const reducer = combineReducers({
  teacher: teacherReducer,
  role: userRoleCheckReducer,
  student: studentReducer,
  studentList: studentListReducer,
  hod: hodReducer,
  admin: adminReducer,
  principal: principalReducer,
  adminList: adminListReducer,
  hodList: hodListReducer,
  principalList: principalListReducer,
  teacherList: teacherListReducer,
  resourceList: resourcesListReducer,

});

export default reducer;
