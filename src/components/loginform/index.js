import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import './loginform.scss'

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit } = props;

  return (
    <form onSubmit={handleSubmit(mySubmit)} className='login-form align-self-center'>
      <div className="form-group">
        <label>Email</label>
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

      <div  className="form-group">
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            className="form-control"
          />
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>
          Log in
        </button>
        <Link to='/signup'>
          <button className="btn">Sign Up</button> 
        </Link>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'Login' // a unique identifier for this form
})(LoginForm)