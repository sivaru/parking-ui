import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'

import { RenderField, email, required} from '../renderfield'

import './usereditform.scss'

const UserEditForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit, admin, initialValues } = props;
  return (
    <form onSubmit={handleSubmit(mySubmit)} className='user-edit-form border shadow mt-4'>
      <div className="d-flex justify-content-center user-edit-form__heading margin-t-b black-bottom-border">
        <h2 className='mb-2 mt-2'>{`${initialValues.firstName} ${initialValues.lastName}`}</h2>
      </div>
      <div className="form-group">
        <label>Email.</label>
        <div>
          <Field
            name="email"
            component={RenderField}
            type="email"
            placeholder="Email"
            className="form-control"
            validate={[ required, email ]}
          />
        </div>
      </div>
      <div className="form-group">
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={RenderField}
            type="text"
            placeholder="First name."
            className="form-control"
            validate={[required]}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={RenderField}
            type="text"
            className="form-control"
            placeholder="Last name."
            validate={[required]}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name='password'
            component={RenderField}
            type='password'
            min='3'
            className='form-control'
            validate={[required]}
          />
        </div>

      </div>

      {admin ? <div className="form-group">
        <label htmlFor="admin">User type:</label>
        <Field
          name="admin"
          component="select"
          className='form-control'
        >
          <option value="true">Administrator</option>
          <option value="false">Regular user</option>
        </Field>
      </div>
        : ''}

      <div className='d-flex justify-content-between'>
        <Button type="submit" color='warning' disabled={pristine || submitting}>
          Edit
        </Button>
        <Link to='/users'>
          <Button color='primary'>
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