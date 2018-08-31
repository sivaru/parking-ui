import * as a from '../../actions/types';

const initialState = {
  isLoading: false,
  elements: [],
  user: {}
}

function usersReducer(state = initialState, action) {
  switch (action.type) {

    case a.USERS_GET_ALL_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.USERS_GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: action.payload
      }

    case a.USERS_GET_ALL_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.USERS_DELETE_ONE_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.USERS_DELETE_ONE_SUCCESS:
      return {
        ...state,
        elements: state.elements.filter(e => e._id !== action.payload),
        isLoading: false
      }

    case a.USERS_DELETE_ONE_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.USERS_GET_ONE_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.USERS_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }

    case a.USERS_GET_ONE_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.USERS_UPDATE_ONE_REQUEST:
      return {
        ...state,
        isLoading: false
      }

    case a.USERS_UPDATE_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        elements: state.elements.map(e => e._id === action.payload._id ? action.payload : e)
      }

    case a.USERS_UPDATE_ONE_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    default:
      return state
  }
}

export default usersReducer;