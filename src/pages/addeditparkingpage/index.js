import React from 'react'

import AddEditParkingContainer from '../../containers/addeditparkingcontainer'
import NavigationBar from '../../components/navigationbar/'
const AddEdditParkingPage = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      <AddEditParkingContainer parkingId={props.match.params.id ? props.match.params.id : ''} />
    </React.Fragment>
  )
}

export default AddEdditParkingPage
