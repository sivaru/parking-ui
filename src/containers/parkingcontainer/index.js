
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'

import ParkingSpaceBox from '../../components/parkingspacebox'
import AddParkingSpaceBox from '../../components/addparkingspacebox'
import Loading from '../../components/loading'
import { getParkingSpaces, assignParkingSpace, deleteParkingSpace } from '../../redux/actionCreators/parkingspaces'

import './parkingcontainer.scss'

export class ParkingContainer extends Component {
  render() {
    return (

      <Container className='parking-container'>
        <div className="d-flex justify-content-center">
          <h2>Konrad Group's parking spaces:</h2>
        </div>
        <Row>
          {
            this.props.isLoading ?
              <Loading /> :
              this.props.parkingSpaces.map(this.generateParkingSpaceBox)
          }
          <AddParkingSpaceBox/>
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    this.props.getParkingSpaces();
  }

  generateParkingSpaceBox = (e) => <ParkingSpaceBox key={e._id} parkingSpace={e} handleAssign={this.props.assignParkingSpace} handleDelete={this.props.deleteParkingSpace}/>



}

const mapStateToProps = (state) => ({
  parkingSpaces: state.parkingSpaces.elements,
  isLoading: state.parkingSpaces.isLoading
})

const mapDispatchToProps = {
  getParkingSpaces,
  assignParkingSpace,
  deleteParkingSpace
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingContainer)
