import React from 'react'

import { Button, Card, CardHeader, Col, CardTitle} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddParkingSpaceBox = () => {
  return (
    <Col md='2' >

   
          <Button outline color="primary">
          <FontAwesomeIcon icon="plus" size='7x'/>
          </Button>

    </Col>
  )
}

export default AddParkingSpaceBox
