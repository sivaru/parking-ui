import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SignUpForm = props => {
  const { handleSubmit, pristine, submitting, mySubmit } = props;

  return (
    <form onSubmit={handleSubmit(mySubmit)}>
      <div>
        <label>Email.</label>
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
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First name."
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last name."
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
            placeholder="**********"
          />
        </div>
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          Sign up
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'SignUp' // a unique identifier for this form
})(SignUpForm)