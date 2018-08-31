import * as a from '../../actions/types';

const initialState = {
  isLoading: false,
  elements: [],
  parking: {}
}

function parkingSpacesReducer(state = initialState, action) {
  switch (action.type) {

    case a.PARKING_SPACES_GET_ALL_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.PARKING_SPACES_GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: action.payload
      }

    case a.PARKING_SPACES_GET_ALL_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.PARKING_SPACES_ASSIGN_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.PARKING_SPACES_ASSIGN_SUCCESS:

      return {
        ...state,
        isLoading: false,
        elements: state.elements.map((e) => e._id === action.payload.parkingSpace._id ? action.payload.parkingSpace : e)
      }

    case a.PARKING_SPACES_ASSIGN_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.PARKING_SPACES_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.PARKING_SPACES_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: state.elements.concat([action.payload])
      }

    case a.PARKING_SPACES_CREATE_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.PARKING_SPACES_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.PARKING_SPACES_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: state.elements.filter(p => p._id !== action.payload)
      }

    case a.PARKING_SPACES_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case a.PARKING_SPACES_GET_ONE_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case a.PARKING_SPACES_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        parking: action.payload
      }

      case a.PARKING_SPACES_GET_ONE_FAILURE:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default parkingSpacesReducer;