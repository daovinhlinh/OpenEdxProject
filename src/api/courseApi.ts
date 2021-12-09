import { Course, ListResponse } from "models";
import axiosClient from "./axiosClient"

const courseApi = {
  getAll(): Promise<ListResponse<Course>> {
    const params = {
      page: '1',
      page_size: '20',
    };
    const url = '/courses/v1/courses/';
    return axiosClient.get(url, { params: params });
  },
  getDetail(id: string): Promise<Course> {
    const url = `/courses/v1/courses/${id}`;
    return axiosClient.get(url);
  }

}

export default courseApi;