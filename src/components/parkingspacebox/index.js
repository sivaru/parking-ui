import React from 'react'
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap'

import './parkingspacebox.scss'

const ParkingSpaceBox = ({parkingSpace, handleAssign}) => {

  const assignParkingToCurrentUser = () => { handleAssign(parkingSpace._id, JSON.parse(localStorage.getItem('user')).cleanUser.id);}
  
  return (
    <Col md='2' >

      <Card>
        <CardHeader className={parkingSpace.isAssigned ? 'bg-danger' : 'bg-success'}>
          <CardTitle> {parkingSpace.section} {parkingSpace.number}</CardTitle>
        </CardHeader>
        <CardBody>
          {parkingSpace.isAssigned ?
            <CardText>
              Assigned to: {parkingSpace.assignedUser.firstName} {parkingSpace.assignedUser.lastName}
            </CardText> : 
            
            <Button color="secondary" onClick={assignParkingToCurrentUser}>Reclaim</Button>
          }

        </CardBody>

      </Card>

    </Col>
  )
}

export default ParkingSpaceBox
