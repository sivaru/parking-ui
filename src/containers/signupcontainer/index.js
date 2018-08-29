import React, { Component } from 'react'
import { connect } from "react-redux";

import signup from "../../redux/actionCreators/signup";
import SignUpForm from '../../components/signupform';

class SignUpContainer extends Component {
  render() {
    return (
      <div>
        <SignUpForm mySubmit={this.props.signup} />
      </div>
    )
  }
};

const mapStateToProps = state => ({
  isLoading: state.signup.isLoading,
  error: state.signup.error
})

const mapDispatchToProps = {
  signup
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
