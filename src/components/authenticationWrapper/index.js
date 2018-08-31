import React, { Component } from 'react'

import {connect} from 'react-redux'

import { Redirect } from 'react-router-dom'

import { checkLoggedIn } from '../../redux/actionCreators/login'
/* check behavior */
function authenticationWrapper(BaseComponent) {
  class Authenticate extends Component {
    render() {
      return (
        this.props.isAuthenticated ?
          <BaseComponent {...this.props} /> :
          <Redirect to="/" />
      )
    }

    componentWillMount(){
       this.props.checkLoggedIn();
    }
  }



  const mapStateToProps = (state) => ({
    isAuthenticated: state.login.isLoggedIn
  })
  
  const mapDispatchToProps = {
    checkLoggedIn
  }
  

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate)
}

export default authenticationWrapper;
