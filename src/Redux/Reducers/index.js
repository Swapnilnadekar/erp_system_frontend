import { combineReducers } from "redux";
import teacherReducer from "./teacher";
import userRoleCheckReducer from "./userRole";

const reducer = combineReducers({
  teacher: teacherReducer,
  role: userRoleCheckReducer,
});

export default reducer;
