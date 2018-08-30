
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import loginReducer from './login';
import signUpReducer from './signup';
import parkingSpacesReducer from './parkingspaces'
import usersReducer from './users'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  login: loginReducer,
  signup: signUpReducer,
  parkingSpaces: parkingSpacesReducer,
  users: usersReducer
})