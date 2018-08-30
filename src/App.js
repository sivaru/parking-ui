import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import polyfill from "babel-polyfill";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserMinus, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

library.add(faUserMinus, faUserEdit);



import store from './redux/store'
import './assets/scss/main.scss'

import LoginPage from './pages/loginpage/'
import SignUpPage from './pages/signuppage'
import ParkingPage from './pages/parkingpage';
import UsersPage from './pages/userspage'
import UserEditPage from './pages/usereditpage'

import NavigationBar from './components/navigationbar/'
import authenticationWrapper from './components/authenticationWrapper'



class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <React.Fragment>
            <NavigationBar />
            <Switch>
              <Route exact path='/' component={LoginPage} />
              <Route path='/parking' component={ParkingPage} />
              <Route exact path='/users' component={UsersPage} />
              <Route path='/users/:id' component={UserEditPage}/>
              <Route path='/signup' component={SignUpPage} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}



export default App;