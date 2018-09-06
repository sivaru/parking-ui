import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import polyfill from "babel-polyfill";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle, faUserMinus, faUserEdit, faPlus, faMinusSquare, faPenSquare } from '@fortawesome/free-solid-svg-icons'

library.add( faExclamationCircle, faUserMinus, faUserEdit, faPlus, faMinusSquare, faPenSquare);



import store from './redux/store'
import './assets/scss/main.scss'

import LoginPage from './pages/loginpage/'
import SignUpPage from './pages/signuppage'
import ParkingPage from './pages/parkingpage';
import UsersPage from './pages/userspage'
import UserEditPage from './pages/usereditpage'
import AddEditParkingPage from './pages/addeditparkingpage';

import authenticationWrapper from './components/authenticationWrapper'



class App extends Component {

  render() {

  
    return (
      <Provider store={store} >
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/parking' component={authenticationWrapper(ParkingPage)} />
              <Route exact path='/users' component={authenticationWrapper(UsersPage,true )} />
              <Route path='/users/:id' component={UserEditPage}/>
              <Route path='/signup' component={SignUpPage} />
              <Route path='/parking/:id' component={AddEditParkingPage}/>
              <Route path='/parking/create' component={AddEditParkingPage}/>
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}



export default App;