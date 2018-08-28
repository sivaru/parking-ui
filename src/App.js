import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import polyfill from "babel-polyfill";
import store from './redux/store'
import LoginPage from './pages/loginpage/'

import './assets/scss/main.scss'



class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;