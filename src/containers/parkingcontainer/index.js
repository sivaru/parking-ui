
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'

import ParkingSpaceBox from '../../components/parkingspacebox'
import AddParkingSpaceBox from '../../components/addparkingspacebox'
import Loading from '../../components/loading'
import { ToastContainer, toast } from 'react-toastify';

import { getParkingSpaces, updateParkingSpace, deleteParkingSpace } from '../../redux/actionCreators/parkingspaces'

import './parkingcontainer.scss'

export class ParkingContainer extends Component {
  notify = (success) => toast(
    success ?
      `The parking space was succesfully ${this.props.parkingId !== 'create' ? 'updated' : 'created'}`
      : this.props.errorMessage, { type: success ? toast.TYPE.SUCCESS : toast.TYPE.ERROR });
  render() {
    if (!this.props.isLoading) {
      this.props.succesNotification ? this.notify(true) : '';
      this.props.errorNotification ? this.notify(false) : '';
    }

    return (

      <Container className='parking-container'>
        <div className="d-flex justify-content-center margin-t-b">
          <h2>Konrad Group's parking spaces:</h2>
        </div>
        <Row>
          {
            this.props.isLoading ?
              <Loading /> :
              this.props.parkingSpaces.map(this.generateParkingSpaceBox)
          }
         {this.props.user.admin ? <AddParkingSpaceBox/> : ''}
        </Row>
        <ToastContainer />

      </Container>
    )
  }

  componentDidMount() {
    this.props.getParkingSpaces();
  }

  generateParkingSpaceBox = (e) => <ParkingSpaceBox key={e._id} admin={this.props.user.admin} user={this.props.user} parkingSpace={e} handleAssign={this.props.updateParkingSpace} handleDelete={this.props.deleteParkingSpace}/>



}

const mapStateToProps = (state) => ({
  parkingSpaces: state.parkingSpaces.elements,
  isLoading: state.parkingSpaces.isLoading || state.login.isLoggingIn,
  succesNotification: state.parkingSpaces.successNotification,
  errorNotification: state.parkingSpaces.errorNotification,
  errorMessage: state.parkingSpaces.errorMessage,
  user: state.login.user
})

const mapDispatchToProps = {
  getParkingSpaces,
  updateParkingSpace,
  deleteParkingSpace
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingContainer)
