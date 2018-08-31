import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import ModalConfirmation from '../modalconfirmation'
import './userrow.scss'

const UserRow = ({ user, deleteUser }) => {
  const deleteMe = () => deleteUser(user._id);
  return (
    <Row className='user-row'>
      <Col xs='12' md='3'>{user._id}</Col>
      <Col xs='4' md='3'>{user.firstName} {user.lastName}</Col>
      <Col xs='4' md='3'>{user.admin ? 'Administrator' : 'Regular User'}</Col>
      <Col xs='4' md='3'>
        <Link to={`/users/${user._id}`}><Button outline className="user-row__button" color='success'> <FontAwesomeIcon icon="user-edit" /></Button></Link>
        <ModalConfirmation
          bodyText={`Are you sure you want to delete ${user.firstName}'s user?`}
          action={deleteMe} confirmationColor="danger"
          confirmationText="Delete" title="User delete"
          buttonLabel="user-minus" 
          buttonClassName="user-row__button"
          />
      </Col>
    </Row>
  )
};

export default UserRow;
