import { PayloadAction } from "@reduxjs/toolkit";
import { GET_COURSE_DETAIL_SUCCESS, GET_LIST_COURSE_SUCCESS, LOGIN_SUCCESS } from "redux/action";

const initState = {
  listCourse: null,
  courseDetail: null,
};

const reducer = (state = initState, action: PayloadAction) => {
  switch (action.type) {
    case GET_LIST_COURSE_SUCCESS:
      console.log('GET_LIST_COURSE_SUCCESS')
      return {
        ...state,
        listCourse: action.payload
      };
    case GET_COURSE_DETAIL_SUCCESS:
      return {
        ...state,
        courseDetail: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
