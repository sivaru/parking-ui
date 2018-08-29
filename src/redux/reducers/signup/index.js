import * as a from '../../actions/types'

const INITIAL_STATE = {
  isLoading: false,
  error: false
}

function signupReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case a.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error:false
      }

    case a.SIGNUP_FAILURE:
      return {
        ...state,
        error: true
      }

    default:
      return state
  }
}

export default signupReducer