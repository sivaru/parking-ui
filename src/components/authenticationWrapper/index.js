import React, { Component } from 'react'

import {connect} from 'react-redux'

import { Redirect } from 'react-router-dom'

function authenticationWrapper(BaseComponent) {
  class Authenticate extends Component {
    render() {
      return (
        this.props.isAuthenticated ?
          <BaseComponent {...this.props} /> :
          <Redirect to="/" />
      )
    }
  }



  const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isLoggedIn
  })

  return connect(mapStateToProps)(Authenticate)
}

export default authenticationWrapper;
