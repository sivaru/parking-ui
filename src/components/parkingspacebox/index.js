import React from 'react'
import { Col, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

import ModalConfirmation from '../modalconfirmation'
import './parkingspacebox.scss'

const ParkingSpaceBox = ({ parkingSpace, handleAssign, handleDelete }) => {

  const assignParkingToCurrentUser = () => { handleAssign(parkingSpace._id, JSON.parse(localStorage.getItem('user')).cleanUser.id); }
  const deleteThisParkingSpace = () => { handleDelete(parkingSpace._id) }
  return (
    <Col md='2' >

      <Card>
        <CardHeader className={parkingSpace.isAssigned ? 'bg-danger' : 'bg-success'}>
          <div className="d-flex justify-content-between">
            <CardTitle> {parkingSpace.section} {parkingSpace.number}</CardTitle>
            <div>
              <ModalConfirmation
                buttonLabel='minus-square'
                title="Parking Space Delete"
                bodyText={`Are you sure you want to delete the ${parkingSpace.section} ${parkingSpace.number} parking?`}
                confirmationText="Delete"
                confirmationColor="danger"
                buttonColor="light"
                action={deleteThisParkingSpace} />
              <Link to={`parking/${parkingSpace._id}`}>
                <Button outline color="warning" ><FontAwesomeIcon icon="pen-square" /></Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {parkingSpace.isAssigned ?
            <CardText>
              Assigned to: {parkingSpace.assignedUser.firstName} {parkingSpace.assignedUser.lastName}
            </CardText> :

            <Button outline color="secondary" onClick={assignParkingToCurrentUser}>Reclaim</Button>
          }

        </CardBody>

      </Card>

    </Col>
  )
}

export default ParkingSpaceBox
