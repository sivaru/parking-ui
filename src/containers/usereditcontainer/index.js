import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';


import EditUserForm from '../../components/usereditform'
import Loading from '../../components/loading'

import { getUserByID, updateUser } from '../../redux/actionCreators/users'

export class UserEditContainer extends Component {
  notify = (success) => toast(
    success ?
      `The user info was succesfully updated`
      : this.props.errorMessage != '' ? this.props.errorMessage : 'There was an error', { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR }
  );


  render() {
    if (!this.props.isLoading) {
      this.props.successNotification ? this.notify(true) : '';
      this.props.errorNotification ? this.notify(false) : '';
    }
    return (
      this.props.isLoading ?
        <Loading /> :
        <div className='d-flex justify-content-center'>
          <EditUserForm mySubmit={this.editAction} admin={this.props.user.admin} />
          <ToastContainer />

        </div>
    )
  }
  componentDidMount() {
    this.props.getUserByID(this.props.userId);
  }

  editAction = (values) => {
    this.props.updateUser(this.props.userId, values);
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.users.isLoading,
  user: state.login.user,
  errorNotification: state.users.errorNotification,
  successNotification: state.users.successNotification,
  errorMessage: state.users.errorMessage
})

const mapDispatchToProps = {
  getUserByID,
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditContainer)
