import { authSaga } from "features/auth/authSaga";
import { courseDetailSaga, courseSaga } from "features/course/courseSaga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        authSaga(),
        courseSaga(),
        courseDetailSaga(),
    ])
}