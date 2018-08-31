import React from 'react'

import AddEditParkingContainer from '../../containers/addeditparkingcontainer'

const AddEdditParkingPage = (props) => {
  return (
    <AddEditParkingContainer  parkingId={props.match.params.id ? props.match.params.id : ''} />
  )
}

export default AddEdditParkingPage
