
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row } from 'reactstrap'

import ParkingSpaceBox from '../../components/parkingspacebox'
import { getParkingSpaces, assignParkingSpace } from '../../redux/actionCreators/parkingspaces'


export class ParkingContainer extends Component {
  render() {
    return (

      <Container>
        <Row>
          {this.props.parkingSpaces.map(this.generateParkingSpaceBox)}
        </Row>
      </Container>
    )
  }

  componentDidMount() {
    this.props.getParkingSpaces();
  }
 
  generateParkingSpaceBox = (e) => <ParkingSpaceBox key={e._id} parkingSpace={e} handleAssign={this.props.assignParkingSpace}/>


}

const mapStateToProps = (state) => ({
  parkingSpaces: state.parkingSpaces.elements,
  isLoading: state.parkingSpaces.isLoading
})

const mapDispatchToProps = {
  getParkingSpaces,
  assignParkingSpace
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingContainer)
