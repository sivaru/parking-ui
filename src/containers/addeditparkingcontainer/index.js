import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';

import { getAllUsers } from '../../redux/actionCreators/users'
import { getParkingSpaceById, createParkingSpace, updateParkingSpace, resetNotifications, resetParking } from '../../redux/actionCreators/parkingspaces'

import AddEditParkingForm from '../../components/addeditparkingform'
import Loading from '../../components/loading'


export class AddEditParkingContainer extends Component {

  notify = (success) => toast(
    success ?
      `The parking space was succesfully ${this.props.parkingId !== 'create' ? 'updated' : 'created'}`
      : this.props.errorMessage != '' ? this.props.errorMessage : 'There was an error'  , { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR });

  render() {
    if (!this.props.isLoading) {
      this.props.succesNotification ? this.notify(true) : '';
      this.props.errorNotification ? this.notify(false) : '';
    }

    return (

      this.props.isLoading ?
        <Loading /> :
        <div className="d-flex justify-content-center">
          <AddEditParkingForm
            mySubmit={this.props.parkingId === 'create' ? this.props.createParkingSpace : this.props.updateParkingSpace}
            users={this.props.users}
            parkingId={this.props.parkingId}
            admin={this.props.admin}
            isEdit={this.props.parkingId !== 'create'} />
          <ToastContainer />
        </div>
    )
  }

  componentWillMount() {
    this.props.resetNotifications();
    if (this.props.parkingId != 'create')
      this.props.getParkingSpaceById(this.props.parkingId);
    else
      this.props.resetParking();
    if (this.props.users.length === 0)
      this.props.getAllUsers();

  }
}

const mapStateToProps = (state) => ({
  users: state.users.elements,
  isLoading: state.parkingSpaces.isLoading || state.users.isLoading,
  succesNotification: state.parkingSpaces.successNotification,
  errorNotification: state.parkingSpaces.errorNotification,
  errorMessage: state.parkingSpaces.errorMessage,
  admin: state.login.user.admin
})

const mapDispatchToProps = {
  getParkingSpaceById,
  getAllUsers,
  createParkingSpace,
  updateParkingSpace,
  resetNotifications,
  resetParking
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditParkingContainer)
