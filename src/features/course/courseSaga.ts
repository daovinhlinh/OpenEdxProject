import { call, fork, put, take, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import courseApi from "api/courseApi";
import { Course, ListResponse } from "models";
import { courseAction } from "./courseSlice";

function* fetchCourseList() {
  const courses: ListResponse<Course> = yield courseApi.getAll();
  yield put(courseAction.setCourse(courses.results));
  yield put(courseAction.getCourseSuccess);
}


function* fetchCourseDetail(action: { payload: { id: string } }) {
  const detail: Course = yield courseApi.getDetail(action.payload.id);
  yield put(courseAction.setCourseDetail(detail));
  yield put(courseAction.getCourseSuccess);
}


// export function* watchCourseSaga() {
//   //Đợi user dispatch getData action
//   // yield take(courseAction.getCourse);
//   yield fork(fetchCourseList);
// }

// export function* watchCourseDetailSaga() {
//   yield fork(fetchCourseDetail);
// }


export function* courseSaga() {
  yield takeLatest(courseAction.getCourse, fetchCourseList);
}

export function* courseDetailSaga() {
  yield takeLatest(courseAction.getCourseDetail, fetchCourseDetail)
}

