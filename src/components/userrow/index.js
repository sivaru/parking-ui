import React from 'react'
import { Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const UserRow = ({ user, deleteUser }) => {
  const deleteMe = () => deleteUser(user._id);
  return (
    <Row>
      <Col md='3'>{user._id}</Col>
      <Col md='3'>{user.firstName} {user.lastName}</Col>
      <Col md='3'>{user.admin ? 'Administrator' : 'Regular User'}</Col>
      <Col md='3'>
        <FontAwesomeIcon icon="user-minus" onClick={deleteMe} />
        <Link to={`/users/${user._id}`}>Edit <FontAwesomeIcon icon="user-edit" /></Link>
      </Col>
    </Row>
  )
};

export default UserRow;
