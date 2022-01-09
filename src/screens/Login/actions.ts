import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { LOGIN_SUCCESS } from "redux/action";

export const login = (email: string, password: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
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