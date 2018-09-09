import React from 'react'
import { Button, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import ModalConfirmation from '../modalconfirmation'
import './newsrow.scss'

const NewsRow = ({ _new, deleteNew }) => {
  const deleteAction = () => deleteNew(_new._id);
  return (
    <Container fluid className='news-row'>
      <div className='d-flex justify-content-around'>
        <h3>{_new.title}</h3>
        <h4>{_new.author.firstName} {_new.author.lastName}</h4>
      </div>
      <div className='d-flex justify-content-around'>
        <h6>Created at: {new Date(_new.created).toLocaleDateString()}</h6>
        <div className='d-flex justify-content-around news-row__button-container'>
          <Link to={`/news/${_new._id}`}><Button color='success'> <FontAwesomeIcon icon="pen-square" /></Button></Link>
          <ModalConfirmation
            bodyText={`Are you sure you want to delete '${_new.title}'?`}
            action={deleteAction} confirmationColor="danger"
            confirmationText="Delete" title="News delete"
            buttonLabel="minus-square"
          />
        </div>
      </div>
    </Container>
  )
};

export default NewsRow;
