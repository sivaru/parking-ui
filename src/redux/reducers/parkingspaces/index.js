import * as a from '../../actions/types';

const initialState = {
  isLoading: false,
  elements: [],
  parking: {},
  successNotification: false,
  errorNotification: false,
  errorMessage: ''
}

function parkingSpacesReducer(state = initialState, action) {
  switch (action.type) {

    case a.PARKING_SPACES_RESET_PARKING:
      return {
        ...state,
        parking: {}
      }
    case a.PARKING_SPACES_GET_ALL_REQUEST:
    case a.PARKING_SPACES_ASSIGN_REQUEST:
    case a.PARKING_SPACES_CREATE_REQUEST:
    case a.PARKING_SPACES_DELETE_REQUEST:
    case a.PARKING_SPACES_GET_ONE_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorNotification: false,
        successNotification: false
      }

    case a.PARKING_SPACES_ASSIGN_FAILURE:
    case a.PARKING_SPACES_CREATE_FAILURE:
    case a.PARKING_SPACES_DELETE_FAILURE:
    case a.PARKING_SPACES_GET_ONE_FAILURE:
    case a.PARKING_SPACES_GET_ALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorNotification: true,
        errorMessage: action.payload
      }

    case a.PARKING_SPACES_GET_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: action.payload,
        successNotification: false
      }

    case a.PARKING_SPACES_ASSIGN_SUCCESS:

      return {
        ...state,
        isLoading: false,
        elements: state.elements.map((e) => e._id === action.payload.parkingSpace._id ? action.payload.parkingSpace : e),
        successNotification: true,
        parking: action.payload.parkingSpace
      }

    case a.PARKING_SPACES_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        successNotification: true,
        elements: state.elements.concat([action.payload])
      }

    case a.PARKING_SPACES_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        elements: state.elements.filter(p => p._id !== action.payload)
      }

    case a.PARKING_SPACES_GET_ONE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        parking: normalizeDate(action.payload),
        errorNotification: false,
        successNotification: false
      }

    case a.PARKING_SPACES_RESET_NOTIFICATIONS:
      return {
        ...state,
        errorNotification: false,
        successNotification: false
      }

    default:
      return state
  }
}


function normalizeDate(parking) {
  if (parking.freePeriod) {
    parking.freePeriodStart = parking.freePeriodStart.split('T')[0];
    parking.freePeriodEnd = parking.freePeriodEnd.split('T')[0];
  }
  return parking;
}
export default parkingSpacesReducer;