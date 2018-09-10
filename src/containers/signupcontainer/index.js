import React, { Component } from 'react'
import { connect } from "react-redux";
import Loading from '../../components/loading'
import { ToastContainer, toast } from 'react-toastify';

import signup from "../../redux/actionCreators/signup";
import SignUpForm from '../../components/signupform';

class SignUpContainer extends Component {
  notify = (success) => toast(
    success ?
      `Your user was succesfully created`
      : this.props.errorMessage, { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR });
 
  render() {
    if (!this.props.isLoading) {
      this.props.success ? this.notify(true) : '';
      this.props.error ? this.notify(false) :  '';
    }
    return ( this.props.isLoading ? <Loading /> :
      <div className='d-flex justify-content-center'>
        <SignUpForm mySubmit={this.props.signup} />
        <ToastContainer />

      </div>
    )
  }
};

const mapStateToProps = state => ({
  isLoading: state.signup.isLoading,
  error: state.signup.error,
  success: state.signup.success,
  errorMessage: state.signup.errorMessage
})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
