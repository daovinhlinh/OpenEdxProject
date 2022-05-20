import { combineReducers } from "redux";
import app from "../reducers/appReducer";
import course from "../reducers/courseReducer";
import user from "../reducers/userReducer";

const rootReducers = combineReducers({
  course, app, user
});

export default rootReducers;
