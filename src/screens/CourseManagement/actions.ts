import axios from "axios";
import { GET_LIST_COURSE_SUCCESS } from "redux/action";

export const getListCourse = () => {
  return async (dispatch: any) => {
    const result = await axios
      .get('/courses/v1/courses/')
    dispatch({
      type: GET_LIST_COURSE_SUCCESS,
      payload: result.data.results
    })
  }
}