import React from 'react'
import { Row, Col, Button, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import ModalConfirmation from '../modalconfirmation'
import './userrow.scss'

const UserRow = ({ user, deleteUser }) => {
  const deleteMe = () => deleteUser(user._id);
  return (
    <Container fluid className='user-row'>
      <div className='d-flex justify-content-around'>
        <h3>{user.firstName} {user.lastName}</h3>
        <h4>{user.admin ? 'Administrator' : 'Regular User'}</h4>
      </div>
      <div className='d-flex justify-content-around'>
        <h6>{user._id}</h6>
        <div className='d-flex justify-content-around user-row__button-container'>
          <Link to={`/users/${user._id}`}><Button   color='success'> <FontAwesomeIcon icon="user-edit" /></Button></Link>
          <ModalConfirmation
            bodyText={`Are you sure you want to delete ${user.firstName}'s user?`}
            action={deleteMe} confirmationColor="danger"
            confirmationText="Delete" title="User delete"
            buttonLabel="user-minus"
          />
        </div>
      </div>
    </Container>
  )
};

export default UserRow;
