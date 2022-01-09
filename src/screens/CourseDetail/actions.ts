import axios from "axios";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { GET_COURSE_DETAIL_SUCCESS } from "redux/action";

export const getCourseDetail = (id: string | undefined) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const result = await axios
      .get(`/courses/v1/courses/${id}`);
    console.log(result);
    dispatch({
      type: GET_COURSE_DETAIL_SUCCESS,
      payload: result.data
    })
  }
}