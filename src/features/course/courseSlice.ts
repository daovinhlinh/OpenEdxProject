import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Course } from 'models';

export interface CourseState {
  loading: boolean;
  courseList: Course[];
  courseDetail?: Course;
}

const initialState: CourseState = {
  loading: false,
  courseList: [],
  courseDetail: undefined
}


const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getCourse(state) {
      state.loading = true;
    },
    setCourse(state, action: PayloadAction<Course[]>) {
      state.courseList = action.payload;
    },
    getCourseSuccess(state) {
      state.loading = false;
    },
    getCourseFailed(state) {
      state.loading = false;
    },
    getCourseDetail(state, payload) {
      state.loading = false;
    },
    setCourseDetail(state, action: PayloadAction<Course>) {
      state.courseDetail = action.payload;
    }
    // setCourse(state, action: PayloadAction<Course[]>) {
    //   state.courseList = action.payload;
    // },
  }
});



//Actions
export const courseAction = courseSlice.actions;

//Selectors
export const selectCourseList = (state: RootState) => state.course.courseList;
export const selectCourseLoading = (state: RootState) => state.course.loading;
export const selectCourseDetail = (state: RootState) => state.course.courseDetail;

//Reducer
const courseReducer = courseSlice.reducer;
export default courseReducer;