import { PayloadAction } from "@reduxjs/toolkit";
import { GET_COURSE_DETAIL_SUCCESS, GET_COURSE_PROGRESS_SUCCESS, GET_COURSE_USERS_SUCCESS, GET_LIST_COURSE_SUCCESS, LOGIN_SUCCESS } from "redux/action";

const initState = {
  listCourse: null,
  courseDetail: null,
  courseUsers: null,
  courseProgress: null
};

const reducer = (state = initState, action: PayloadAction) => {
  switch (action.type) {
    case GET_LIST_COURSE_SUCCESS:
      return {
        ...state,
        listCourse: action.payload
      };
    case GET_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        courseDetail: action.payload
      }
    case GET_COURSE_PROGRESS_SUCCESS:
      return {
        ...state,
        courseProgress: action.payload
      }
    case GET_COURSE_USERS_SUCCESS:
      return {
        ...state,
        courseUsers: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
