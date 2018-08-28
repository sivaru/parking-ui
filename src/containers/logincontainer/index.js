import React, { Component } from 'react'
import { connect } from 'react-redux'

import login from "../../redux/actionCreators/login";
import LoginForm from '../../components/loginform'

class LoginContainer extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <LoginForm mySubmit={this.loginAction} className='align-self-center'/>
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