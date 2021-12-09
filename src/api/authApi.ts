import { LoginResponse } from "models";
import axiosClient from "./axiosClient"

const authApi = {
  login(email: string, password: string): Promise<LoginResponse> {
    const body = {
      email: email,
      password: password
    };
    const url = '/user/v1/account/login_session/';
    return axiosClient.post(url, body);
  },

}

export default authApi;