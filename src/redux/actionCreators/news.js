import * as a from '../actions/types'
const API_URL = 'http://localhost:3000/news'
const token = JSON.parse(localStorage.getItem('user')).token;


export function resetNotifications() {
  return dispatch => {
    dispatch({
      type: a.NEWS_RESET_NOTIFICATIONS
    })
  }
}

export function getNews() {
  return async dispatch => {
    dispatch({
      type: a.NEWS_GET_ALL_REQUEST
    });
    try {
      const response = await fetch(API_URL, {
        headers: new Headers({
          'Authorization': 'Bearer ' + token,
        })
      });
      const result = await response.json();

      if (response.status === 200)
        dispatch({
          type: a.NEWS_GET_ALL_SUCCESS,
          payload: result.news
        })
      else throw new Error();
    } catch (error) {
      dispatch({ type: a.NEWS_GET_ALL_FAILURE })
    }
  }
}

export function createNew(values) {
  return async dispatch => {
    dispatch({ type: a.NEWS_CREATE_REQUEST });
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
          type: a.NEWS_CREATE_SUCCESS,
          payload: result._new
        })
      else throw new Error(result.message);
    } catch (error) {
      dispatch({
        type: a.NEWS_CREATE_FAILURE,
        payload: error.message
      })
    }
  }
}
export function deleteNew(id) {
  return async dispatch => {
    dispatch({
      type: a.NEWS_DELETE_ONE_REQUEST
    });
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'delete',
      });

      if (response.status === 204)
        dispatch({
          type: a.NEWS_DELETE_ONE_SUCCESS,
          payload: id
        })
      else throw new Error();
    } catch (error) {
      dispatch({ type: a.NEWS_DELETE_ONE_FAILURE })
    }
  }
}

export function getNewById(id) {
  return async dispatch => {
    dispatch({ type: a.NEWS_GET_ONE_REQUEST });
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const result = await response.json();
      dispatch({
        type: a.NEWS_GET_ONE_SUCCESS,
        payload: result._new
      })
    } catch (error) {

      dispatch({
        type: a.NEWS_GET_ONE_FAILURE,
        error: error
      })
    }
  }
}

export function resetNew() {
  return dispatch => {
    dispatch({
      type: a.NEWS_RESET_NEW
    })
  }
}


export function updateNew(values, parkingId) {
  return async dispatch => {
    dispatch({ type: a.NEWS_UPDATE_REQUEST });
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
          type: a.NEWS_UPDATE_SUCCESS,
          payload: result
        });
      } else throw new Error(result.message);
    } catch (error) {
      dispatch({
        type: a.NEWS_UPDATE_FAILURE,
        payload: error.message
      });
    }
  }
}