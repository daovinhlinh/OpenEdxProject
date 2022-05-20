import { PayloadAction } from "@reduxjs/toolkit";
import { GET_LIST_USER_SUCCESS, GET_USER_DETAIL_SUCCESS } from "redux/action";

const initState = {
  listUser: null,
  userDetail: null
};

const reducer = (state = initState, action: PayloadAction) => {
  switch (action.type) {
    case GET_LIST_USER_SUCCESS:
      return {
        ...state,
        listUser: action.payload
      };
    case GET_USER_DETAIL_SUCCESS:
      return {
        ...state,
        userDetail: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
