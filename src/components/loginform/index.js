import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
  const { handleSubmit, pristine, submitting,mySubmit } = props;

  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <div>
        <label>Email</label>
        <div>
          <Field 
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Log in
        </button>

      </div>
    </form>
  )
}

export default reduxForm({
  form: 'Login' // a unique identifier for this form
})(LoginForm)