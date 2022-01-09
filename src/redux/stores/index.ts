import { ThunkAction } from "@reduxjs/toolkit";
import { Action, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducer";

const store = createStore(rootReducers, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
