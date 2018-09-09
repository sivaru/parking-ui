import * as a from '../actions/types'

const API_URL = 'http://localhost:3000/parkingSpaces'

export function resetNotifications() {
  return dispatch => {
    dispatch({
      type: a.PARKING_SPACES_RESET_NOTIFICATIONS
    })
  }
}


export function resetParking() {
  return dispatch => {
    dispatch({
      type: a.PARKING_SPACES_RESET_PARKING
    })
  }
}
export function createParkingSpace(values) {
  return async dispatch => {
    dispatch({ type: a.PARKING_SPACES_CREATE_REQUEST });
    try {
      const response = await fetch(API_URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const result = await response.json();

      if (response.status === 201)
        dispatch({
          type: a.PARKING_SPACES_CREATE_SUCCESS,
          payload: result.parkingSpace
        })
      else throw new Error(result.message);
    } catch (error) {
      dispatch({
        type: a.PARKING_SPACES_CREATE_FAILURE,
        payload: error.message
      })
    }
  }
}

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

export function getParkingSpaceById(id) {
  return async dispatch => {
    dispatch({ type: a.PARKING_SPACES_GET_ONE_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const result = await response.json();
      dispatch({
        type: a.PARKING_SPACES_GET_ONE_SUCCESS,
        payload: result.parkingSpace
      })
    } catch (error) {

      dispatch({
        type: a.PARKING_SPACES_GET_ONE_FAILURE,
        error: error
      })
    }
  }
}

export function deleteParkingSpace(parkingID) {
  return async dispatch => {
    dispatch({ type: a.PARKING_SPACES_DELETE_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${parkingID}`, {
        method: 'delete',
      });

      if (response.status === 204)
        dispatch({
          type: a.PARKING_SPACES_DELETE_SUCCESS,
          payload: parkingID
        })
      else throw new Error();
    } catch (error) {
      dispatch({ type: a.PARKING_SPACES_DELETE_FAILURE })
    }
  }
}

export function updateParkingSpace(values, parkingId) {
  return async dispatch => {
    dispatch({ type: a.PARKING_SPACES_ASSIGN_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${parkingId}`, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (response.status === 200) {
        dispatch({
          type: a.PARKING_SPACES_ASSIGN_SUCCESS,
          payload: result
        });
      } else throw new Error(result.message);
    } catch (error) {
      dispatch({
        type: a.PARKING_SPACES_ASSIGN_FAILURE,
        payload: error.message
      });
    }
  }
}