import { combineReducers } from "redux";
import teacherReducer from "./teacher";

const reducer = combineReducers({
  teacher: teacherReducer,
});

export default reducer;
