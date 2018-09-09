import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { RenderField, email, required} from '../renderfield'


import './loginform.scss'

const LoginForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit } = props;

  return (
    <form onSubmit={handleSubmit(mySubmit)} className='login-form align-self-center border shadow'>
      <div className='black-bottom-border margin-t-b'>
        <h1>Konrad Parking System</h1>
      </div>
      <div className="form-group">
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={RenderField}
            type="email"
            placeholder="Email"
            className="form-control"
            validate={[required, email]}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name="password"
            component={RenderField}
            type="password"
            placeholder="Password"
            className="form-control"
            validate={[required]}
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