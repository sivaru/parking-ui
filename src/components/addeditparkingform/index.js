import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'

import './addeditparkingform.scss'

const UserEditForm = (props) => {
  const { handleSubmit, pristine, submitting, mySubmit, users, isAssignedValue, freePeriodValue } = props;
  const generateUserOptions = (user) => <option value={user._id} key={user._id} >{user.firstName} {user.lastName}</option>;

  return (<form onSubmit={handleSubmit(mySubmit)} className='user-edit-form align-self-center'>
    <div className="form-group">
      <label>Section:</label>
      <div>
        <Field
          name="section"
          component="input"
          maxLength="1"
          type="type"
          placeholder="A"
          className="form-control"
        />
      </div>
    </div>
    <div className="form-group">
      <label>Parking number:</label>
      <div>
        <Field
          name="number"
          component="input"
          type="number"
          placeholder="1"
          className="form-control"
        />
      </div>
    </div>

    <div>
      <div className="form-check pl-0">
        <label className="mr-2" htmlFor="isAssigned">Is this parking assigned?</label>
        <Field
          name="isAssigned"
          component="input"
          type="checkbox"
          className="form-check-label"
          placeholder="Last name."
        />
      </div>
    </div>

    {isAssignedValue && <div className="form-group">
      <label htmlFor="assignedUser">Assigned user:</label>
      <div>
        <Field
          name="assignedUser"
          component="select"
          className="form-control"
        >
          <option value=''></option>
          {users.map(generateUserOptions)}
        </Field>
      </div>
    </div>}

    <div>
      <div className="form-check pl-0">
        <label className="mr-2" htmlFor="freePeriod">Is this parking going to be free for some days?</label>
        <Field
          name="freePeriod"
          component="input"
          type="checkbox"
          className="form-check-label"
          placeholder="Last name."
        />
      </div>
    </div>

    {freePeriodValue && <div><div className="form-group">
      <label>Free to use since :</label>
      <div>
        <Field
          name="freePeriodStart"
          component="input"
          type="date"
          placeholder="001"
          className="form-control"
        />
      </div>
    </div>

      <div className="form-group">
        <label>Free to use until :</label>
        <div>
          <Field
            name="freePeriodEnd"
            component="input"
            type="date"
            placeholder="001"
            className="form-control"
          />
        </div>
      </div>
    </div>}

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
  form: 'AddEditParking',
})(UserEditForm)

const selector = formValueSelector('AddEditParking');

form = connect(
  state => {
    const isAssignedValue = selector(state, 'isAssigned')
    const freePeriodValue = selector(state, 'freePeriod')
    return ({
      initialValues: state.parkingSpaces.parking,
      isAssignedValue,
      freePeriodValue
    })
  }
)(form)

export default form;