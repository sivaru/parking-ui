import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import polyfill from "babel-polyfill";
import store from './redux/store'
import LoginPage from './pages/loginpage/'
import SignUpPage from './pages/signuppage'

import './assets/scss/main.scss'
import ParkingPage from './pages/parkingpage';
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
              <Route path='/signup' component={SignUpPage} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;