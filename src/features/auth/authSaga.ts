import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";
import cityApi from '../../api/cityApi'
import { City } from "models";

function* handlelogin(payload: LoginPayload) {
  //call api

  yield put(authActions.loginSuccess({
    id: '1',
    name: 'a'
  }))
}

function* handleLogout() {
  localStorage.removeItem('access_token');
  console.log('Handle logout');
  //redirect to login
}

function* watchLoginFlow() {
  while (1) {
    const isLoggedIn = localStorage.getItem('access_token');
    if (!isLoggedIn) {
      //Đợi có dispatch login từ user
      const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
      yield fork(handlelogin, action.payload);
    }

    yield take(authActions.logOut.type);
    yield call(handleLogout); //Dùng call để đợi handleLogout chạy xong mới chạy tiếp vì fork là non-blocking
  }
}


export function* authSaga() {
  //Khởi tạo sẽ lắng nghe watchLoginFlow
  yield fork(watchLoginFlow);
}
