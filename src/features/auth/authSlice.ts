import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

export interface LoginPayload {
  username: string,
  password: string,
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, payload) {
      state.logging = true
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.logging = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
    },
    logOut(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
  }
})

//actions
export const authActions = authSlice.actions;

//selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.isLogging;

//reducers
const authReducer = authSlice.reducer;
export default authReducer;

