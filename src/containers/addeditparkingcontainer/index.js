import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllUsers } from '../../redux/actionCreators/users'
import { getParkingSpaceById } from '../../redux/actionCreators/parkingspaces'

import AddEditParkingForm from '../../components/addeditparkingform'
import Loading from '../../components/loading'


export class AddEditParkingContainer extends Component {
  render() {
    return (this.props.isLoading ?
      <Loading /> :
      <div className="d-flex justify-content-center">
      
        <AddEditParkingForm mySubmit={(values) => console.log(values)}  users={this.props.users} />
      </div>
    )
  }

  async componentDidMount() {
   await this.props.getParkingSpaceById(this.props.parkingId);
    if (this.props.users.length === 0)
      this.props.getAllUsers();
    
  }
}

const mapStateToProps = (state) => ({
  users: state.users.elements,
  isLoading: state.parkingSpaces.isLoading || state.users.isLoading
})

const mapDispatchToProps = {
  getParkingSpaceById,
  getAllUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEditParkingContainer)
