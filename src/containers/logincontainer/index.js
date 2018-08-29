import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import login from "../../redux/actionCreators/login";
import LoginForm from '../../components/loginform'

class LoginContainer extends Component {
  render() {
    return (
      this.props.isLoggedIn ? <Redirect to='/parking' /> :
        <div className='d-flex justify-content-center full-height'>
          <LoginForm mySubmit={this.loginAction} />
        </div>
    )
  }

  loginAction = (values) => {
    this.props.login(values.email, values.password);
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn,
  isLoggedIn: state.login.isLoggedIn
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);