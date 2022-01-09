import axios from "axios";
import { ActionType } from "models";
import { Dispatch } from "react";
import { Action } from "redux";
import { LOGIN_SUCCESS } from "redux/action";

export const register = (email: string, password: string) => {
  return async (dispatch: Dispatch<ActionType>) => {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    await axios
      .get('/user/v1/account/login_session/', { withCredentials: true })

    const result =
      await axios.post('/user/v1/account/login_session/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': `; ${document.cookie}`
            .split(`; csrftoken=`)
            .pop()!
            .split(';')
            .shift() as any,
        },
      });

    if (result.data.success == true) {
      dispatch({
        type: LOGIN_SUCCESS,
      })
    }
  }
}