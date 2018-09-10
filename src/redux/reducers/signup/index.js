import * as a from '../../actions/types'

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  success: false,
  errorMessage: ''
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
        error:false,
        success:true
      }

    case a.SIGNUP_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage:action.payload,
        isLoading: false
      }

    default:
      return state
  }
}

export default signupReducer