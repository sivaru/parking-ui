import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import { login } from "../../redux/actionCreators/login";
import LoginForm from '../../components/loginform'
import Loading from '../../components/loading'

class LoginContainer extends Component {
  notify = (success) => toast(
   'Invalid credentials', { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR });
  render() {
    if (!this.props.isLoggingIn) {
      this.props.error ? this.notify(false) : '';
    }

    return (
      this.props.isLoggedIn ? <Redirect to='/parking' /> :
        this.props.isLoggingIn ? <Loading /> :
          <div className='d-flex justify-content-center full-height'>
            <LoginForm mySubmit={this.loginAction} error={this.props.error} />
            <ToastContainer />
          </div>
    )
  }

  loginAction = (values) => {
    this.props.login(values.email, values.password);
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.login.isLoggingIn,
  isLoggedIn: state.login.isLoggedIn,
  error: state.login.error,
  errorNotification: state.login.error
})

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);