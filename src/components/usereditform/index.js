import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'

import './usereditform.scss'

const UserEditForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit } = props;
  return (
    <form onSubmit={handleSubmit(mySubmit)} className='user-edit-form align-self-center'>
      <div className="form-group">
        <label>Email.</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First name."
            className="form-control"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            className="form-control"
            placeholder="Last name."
          />
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="admin">User type:</label>
        <Field
          name="admin"
          component="select"
          className='form-control'>
          <option value="true">Administrator</option>
          <option value="false">Regular user</option>
        </Field>
      </div>

      <div className='d-flex justify-content-between'>
        <Button outline type="submit" color='warning' disabled={pristine || submitting}>
          Edit
        </Button>
        <Link to='/users'>
          <Button outline color='secondary'>
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  )
}

let form = reduxForm({
  form: 'UserEdit', // a unique identifier for this form
})(UserEditForm)

form = connect(
  state => ({
    initialValues: state.users.user
  })           // bind account loading action creator
)(form)

export default form;