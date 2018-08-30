import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/login';


export function login(email, password) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.LOGIN_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(result));
        dispatch({
          type: a.LOGIN_SUCCESS,
        })
      } else throw Error(response.error);
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.LOGIN_FAILURE,
        error: err
      })
    }
  }
}


export function checkLoggedIn() {
 return dispatch => {
  const token = localStorage.getItem('user');
  if(token){
    dispatch({type: a.LOGIN_SUCCESS});
  }
 }
}