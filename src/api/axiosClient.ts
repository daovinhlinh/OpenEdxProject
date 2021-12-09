import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_ENDPOINT } from "global/config";

const axiosClient = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-CSRFToken': 'mytG3KjQ4NL4p7Eai76QqBlZb0rljPTE445xBAWqvTuccPDrnxeuZOWNNrccXIXi'
    // 'Access-Control-Allow-Origin': '*'
  },

});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosClient