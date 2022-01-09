import { combineReducers } from "redux";
import app from "../reducers/appReducer";
import course from "../reducers/courseReducer";

const rootReducers = combineReducers({
  course, app
});

export default rootReducers;
