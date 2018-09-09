import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import ParkingContainer from '../../containers/parkingcontainer'
import NewsContainer from '../../containers/newscontainer';
import NavigationBar from '../../components/navigationbar/'
const ParkingPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Container>
        <Row>
          <NewsContainer />
        </Row>
        <Row>
          <ParkingContainer />
        </Row>

      </Container>
    </React.Fragment>
  )
};

export default ParkingPage;