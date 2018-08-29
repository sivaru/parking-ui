import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/users';


export default function login(values) {
  return async dispatch => {
    dispatch({ type: a.SIGNUP_REQUEST });
    try {
      const response = await fetch(API_URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const result = response.json();

      if (response.status === 201)
        dispatch({ type: a.SIGNUP_SUCCESS })
        else throw new Error();
    } catch (error) {
      dispatch({type: a.SIGNUP_FAILURE})
    }
  }
}