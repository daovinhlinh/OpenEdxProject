import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN_SUCCESS } from "redux/action";

const initState = {
  isLoading: null,
  loginData: null,
  loggedIn: false,
};


const reducer = (state = initState, action: PayloadAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true };

    default:
      return state;
  }
};

export default reducer;
