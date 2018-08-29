import * as a from '../actions/types'

export default function logout() {
  return async dispatch => {
    localStorage.removeItem('user');
    dispatch({ type: a.LOGOUT })
  }
}