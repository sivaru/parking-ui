import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { RenderField, required } from '../renderfield'
import './signupform.scss'

const SignUpForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit } = props;

  return (
    <form onSubmit={handleSubmit(mySubmit)} className='margin-t-b border shadow bg-white sign-up-form'>
    <h3>Sign up now!</h3>
      <div className='form-group'>
        <label>Email.</label>
        <div>
          <Field
            name="email"
            component={RenderField}  validate={[required]}
            type="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
      </div>
      <div className='form-group'>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component={RenderField}  validate={[required]}
            type="text"
            placeholder="First name."
            className="form-control"
          />
        </div>
      </div>
      <div className='form-group'>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component={RenderField}  validate={[required]}
            type="text"
            placeholder="Last name."
            className="form-control"
          />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name="password"
            component={RenderField}  validate={[required]}
            type="password"
            placeholder="**********"
            className="form-control"
          />
        </div>
      </div>

      <div className='d-flex justify-content-between'>
        <button type="submit" className='btn btn-primary' disabled={pristine || submitting}>
          Sign up
        </button>

        <Link to='/login'>
        <button type="submit" className='btn btn-secondary' >
          Go to login
        </button>
        </Link>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SignUp' // a unique identifier for this form
})(SignUpForm)