import * as a from '../../actions/types';

const initialState = {
  isLoading: false,
  elements: [],
  new: {},
  successNotification: false,
  errorNotification: false
}

function newsReducer(state = initialState, action) {
  switch (action.type) {

    case a.NEWS_GET_ALL_REQUEST:
    case a.NEWS_DELETE_ONE_REQUEST:
    case a.NEWS_GET_ONE_REQUEST:
    case a.NEWS_UPDATE_REQUEST:
    case a.NEWS_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        successNotification: false,
        errorNotification: false
      }

    case a.NEWS_GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: action.payload
      }

    case a.NEWS_DELETE_ONE_SUCCESS:
      return {
        ...state,
        elements: state.elements.filter(e => e._id !== action.payload),
        isLoading: false,
        successNotification: true

      }

    case a.NEWS_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        new: action.payload
      }

    case a.NEWS_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        new: action.payload._new,
        elements: state.elements.map(e => e._id === action.payload._id ? action.payload : e),
        successNotification: true
      }

    case a.NEWS_RESET_NOTIFICATIONS:
      return {
        ...state,
        errorNotification: false,
        successNotification: false
      }


    case a.NEWS_RESET_NEW: {
      return {
        ...state,
        new: {}
      }
    }
    case a.NEWS_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: [action.payload].concat(state.elements), 
        successNotification: true


      }

    case a.NEWS_GET_ALL_FAILURE:
    case a.NEWS_DELETE_ONE_FAILURE:
    case a.NEWS_GET_ONE_FAILURE:
    case a.NEWS_UPDATE_FAILURE:
    case a.NEWS_DELETE_ONE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorNotification: true
      }


    default:
      return state
  }
}

export default newsReducer;