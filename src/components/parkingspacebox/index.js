import React from 'react'
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button, CardFooter } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

import ModalConfirmation from '../modalconfirmation'
import './parkingspacebox.scss'

const ParkingSpaceBox = ({ parkingSpace, handleAssign, handleDelete, admin, user }) => {

  const assignParkingToCurrentUser = () => { handleAssign({ isAssigned: true, assignedUser: JSON.parse(localStorage.getItem('user')).cleanUser.id }, parkingSpace._id); }
  const unassignParkingToCurrentUser = () => { handleAssign({ isAssigned: false }, parkingSpace._id); }
  const deleteThisParkingSpace = () => { handleDelete(parkingSpace._id) }
  const assignedToCurrentUser = () => parkingSpace.assignedUser._id === user.id

  return (
    <Col md='3' >

      <Card className='parking-space-box shadow'>
        <CardHeader className={parkingSpace.isAssigned ? parkingSpace.freePeriod ? 'bg-primary' : 'bg-secondary' : 'bg-success'}>
          <div className="d-flex justify-content-center">
            <CardTitle>{parkingSpace.section} {parkingSpace.number}</CardTitle>

          </div>
        </CardHeader>
        <CardBody className='d-flex justify-content-center'>
          <div>
            {parkingSpace.isAssigned ?
              <React.Fragment>
                <CardText>
                  Assigned to: {assignedToCurrentUser() ? 'me' : `${parkingSpace.assignedUser.firstName} ${parkingSpace.assignedUser.lastName}`}
                </CardText>
                {parkingSpace.freePeriod ? <CardText>{'Free to use until: ' + parkingSpace.freePeriodEnd.split('T')[0]}</CardText> : ''}
              </React.Fragment>
              :
              <div className="d-flex justify-content-center">
                <Button color="primary" className='align-self-center' onClick={assignParkingToCurrentUser}>Request</Button>
              </div>

            }

            {parkingSpace.isAssigned && assignedToCurrentUser() ?
              <div className='d-flex justify-content-center'>
                <Button color="danger" onClick={unassignParkingToCurrentUser}>Release Parking</Button> </div> : ''}
          </div>

        </CardBody >
        {admin || parkingSpace.isAssigned && assignedToCurrentUser() && !admin ?
          <CardFooter>
            {admin ?
              <div className='d-flex justify-content-around '>
                <Link to={`parking/${parkingSpace._id}`}>
                  <Button color="warning" ><FontAwesomeIcon icon="pen-square" /></Button>
                </Link>
                <ModalConfirmation
                  buttonLabel='minus-square'
                  title="Parking Space Delete"
                  bodyText={`Are you sure you want to delete the ${parkingSpace.section} ${parkingSpace.number} parking?`}
                  confirmationText="Delete"
                  confirmationColor="danger"
                  buttonColor="danger"
                  action={deleteThisParkingSpace} />
              </div> : ''}
            {
              parkingSpace.isAssigned && assignedToCurrentUser() && !admin ?
                <div className="d-flex justify-content-end">
                  <Link to={`parking/${parkingSpace._id}`}>
                    <Button color="warning" ><FontAwesomeIcon icon="pen-square" /></Button>
                  </Link>
                </div> : ''
            }
          </CardFooter> : ''}
      </Card>

    </Col>
  )
}

export default ParkingSpaceBox
