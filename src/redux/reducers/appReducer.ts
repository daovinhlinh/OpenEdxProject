import { PayloadAction } from "@reduxjs/toolkit";
import { LOGIN_SUCCESS } from "redux/action";

const initState = {
  isLoading: null,
  loginData: null,
  loggedIn: null,
};


const reducer = (state = initState, action: PayloadAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log('LOGIN SUCCESS')
      return state;
    default:
      return state;
  }
};

export default reducer;
