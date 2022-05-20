import axios from "axios";
import { GET_LIST_USER_SUCCESS } from "redux/action";

export const getListUser = () => {
  return async (dispatch: any) => {
    // await axios
    //   .get('/user/v1/account/login_session/', { withCredentials: true }).then(() => {
    //     axios
    //       .get('/user/v1/accounts', {
    //         headers: {
    //           'X-CSRFToken': `; ${document.cookie}`
    //             .split(`; csrftoken=`)
    //             .pop()!
    //             .split(';')
    //             .shift() as any,
    //           // 'X-CSRFToken': 'lKciCM2XpXW03oRZc7WTuBU1QpROXFFSfw27aQ1na8zvXyzCjUIsbaeGqV8t6Z0W'
    //         }
    //       })
    //   }).then((result) => {
    //     dispatch({
    //       type: GET_LIST_USER_SUCCESS,
    //       payload: (result as any).data
    //     })
    //   }).catch((e) => {
    //     console.log(e)
    //   })

    const result = await axios
      .get(`/user/v1/accounts`, {
        headers: {
          'X-CSRFToken': 'b3f4hMjLCJYlL08VxMLt6RqxCgZHRJNKrLjkjLOwgWaIoD3boS2l9A6wokJjMjeK',
          'sessionid': '1|2796avqznb6ew4w7bzzw9enq4h1ukpgb|C03MAJScMyj3|Ijk1YWM0YTRlNjM3MmI5MWYzYWMwM2E2ZTBjNjBiM2I2MzJiZTFkZjAzNmZhMjA2YTU1YTJiYzExYzQ1YTE4Y2Mi:1nStKx:a1NMyRtw8u_RJrbtX6fz1kPBvxg'
        }
      });
    dispatch({
      type: GET_LIST_USER_SUCCESS,
      payload: (result as any).data
    })

  }
}