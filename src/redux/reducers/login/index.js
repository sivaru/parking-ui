import * as a from '../../actions/types'

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoggingIn: false,
  error: false,
  user:{}
}

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.LOGIN_REQUEST:
    case a.LOGIN_CHECK_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
      }

    case a.LOGIN_SUCCESS:
    case a.LOGIN_CHECK_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn:true,
        user:action.payload,
        error:false
      }

    case a.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error:true
      }

      case a.LOGIN_FAILURE:
      case a.LOGIN_CHECK_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
        }
  

    case a.LOGOUT:
    return {
      ...state,
      isLoggedIn:false
    }

    default:
      return state
  }
}

export default loginReducer