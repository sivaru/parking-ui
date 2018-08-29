import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/parkingSpaces'

export function getParkingSpaces() {
  return async dispatch => {
    dispatch({ type: a.PARKING_SPACES_GET_ALL_REQUEST });
    try {
      const response = await fetch(API_URL);
      const result = await response.json();
      dispatch({
        type: a.PARKING_SPACES_GET_ALL_SUCCESS,
        payload: result.parkingSpaces
      })
    } catch (error) {
      dispatch({
        type: a.PARKING_SPACES_GET_ALL_FAILURE,
        error: error
      })
    }
  }
}

export function assignParkingSpace(parkingId, user) {
  return async dispatch => {
    dispatch({ type: a.PARKING_SPACES_ASSIGN_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${parkingId}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isAssigned: true, assignedUser: user })
      });
      const result = await response.json();
      if (response.status === 200)
        dispatch({
          type: a.PARKING_SPACES_ASSIGN_SUCCESS,
          payload: result
        });
    } catch (error) {
      dispatch({ type: a.PARKING_SPACES_ASSIGN_FAILURE });
    }
  }
}