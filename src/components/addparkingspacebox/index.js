import React from 'react'

import { Button, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const AddParkingSpaceBox = () => {
  return (
    <Col md='2' >
      <Link to='/parking/create'>
        <Button color="primary" className='shadow border'style={{
          minHeight: 49 + 'vh',
          minWidth: 20 + 'vw',
          marginBottom: 16 + 'px',
          width: 100+'%'
        }}>
          <FontAwesomeIcon icon="plus" size='7x' />
        </Button>
      </Link>
    </Col >
  )
}

export default AddParkingSpaceBox
