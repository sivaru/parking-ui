import React from 'react'

import ParkingContainer from '../../containers/parkingcontainer'
import NavigationBar from '../../components/navigationbar/'
const ParkingPage = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <ParkingContainer />
    </React.Fragment>
  )
};

export default ParkingPage;