import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_COURSE_DETAIL_SUCCESS, GET_COURSE_PROGRESS_SUCCESS, GET_COURSE_USERS_SUCCESS, GET_USER_DETAIL_SUCCESS } from "redux/action";

export const getCourseDetail = (id: string | undefined) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const result = await axios
      .get(`/courses/v1/courses/${id}`);

    dispatch({
      type: GET_COURSE_DETAIL_SUCCESS,
      payload: result.data
    })
  }
}

export const getCourseUser = (id: string | undefined) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const result = await axios
      .get(`/enrollment/v1/enrollments`, {
        params: {
          course_id: id
        }
      });
    dispatch({
      type: GET_COURSE_USERS_SUCCESS,
      payload: result.data.results
    })
  }
}

export const getCourseProgress = (id: string | undefined) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const result = await axios
      .get(`/grades/v1/courses/${id}/`
      );
    dispatch({
      type: GET_COURSE_PROGRESS_SUCCESS,
      payload: result.data.results
    })
  }
}

export const getUserDetail = (id: string) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const result = await axios
      .get(`/user/v1/accounts/${id}/`
      );


    dispatch({
      type: GET_USER_DETAIL_SUCCESS,
      payload: result.data
    })
  }
}
