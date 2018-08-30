import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/users';


export function getAllUsers() {
  return async dispatch => {
    dispatch({ type: a.USERS_GET_ALL_REQUEST });
    try {
      const response = await fetch(API_URL);
      const result = await response.json();

      if (response.status === 200)
        dispatch({
          type: a.USERS_GET_ALL_SUCCESS,
          payload: result.users
        })
      else throw new Error();
    } catch (error) {
      dispatch({ type: a.USERS_GET_ALL_FAILURE })
    }
  }
}

export function getUserByID(userID) {
  return async dispatch => {
    dispatch({ type: a.USERS_GET_ONE_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${userID}`);
      const result = await response.json();

      if (response.status === 200)
        dispatch({
          type: a.USERS_GET_ONE_SUCCESS,
          payload: result.user
        })
      else throw new Error();
    } catch (error) {
      dispatch({ type: a.USERS_GET_ONE_FAILURE })
    }
  }

}

export function updateUser(userId, values) {
  return async dispatch => {
    dispatch({ type: a.USERS_UPDATE_ONE_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${userId}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      console.log('status'+response.status)
      const result = await response.json();
      console.log(result)
      if (response.status === 200)
        dispatch({
          type: a.USERS_UPDATE_ONE_SUCCESS,
          payload: result.user
        });

      throw new Error();
    } catch (error) {
      dispatch({ type: a.USERS_UPDATE_ONE_FAILURE });
    }
  }
}

export function deleteUser(userID) {
  return async dispatch => {
    dispatch({ type: a.USERS_DELETE_ONE_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${userID}`, {
        method: 'delete',
      });

      if (response.status === 204)
        dispatch({
          type: a.USERS_DELETE_ONE_SUCCESS,
          payload: userID
        })
      else throw new Error();
    } catch (error) {
      dispatch({ type: a.USERS_DELETE_ONE_FAILURE })
    }
  }
}