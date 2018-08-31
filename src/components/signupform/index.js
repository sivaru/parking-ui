import React from 'react'
import { Field, reduxForm } from 'redux-form'

import './signupform.scss'

const SignUpForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit } = props;

  return (
    <form onSubmit={handleSubmit(mySubmit)} className='align-self-center sign-up-form'>
    <h3>Sign up now!</h3>
      <div className='form-group'>
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
      <div className='form-group'>
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
      <div className='form-group'>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
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
            component="input"
            type="password"
            placeholder="**********"
            className="form-control"
          />
        </div>
      </div>

      <div>
        <button type="submit" className='btn btn-primary' disabled={pristine || submitting}>
          Sign up
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SignUp' // a unique identifier for this form
})(SignUpForm)