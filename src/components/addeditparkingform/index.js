import React from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'
import { RenderField, maxLength1, required, minLength1, minValue1 } from '../renderfield'

import './addeditparkingform.scss'

const UserEditForm = (props) => {
  const { handleSubmit, pristine, submitting, mySubmit, users, isAssignedValue, initialValues, freePeriodValue, isEdit, parkingId, admin } = props;
  const generateUserOptions = (user) => <option value={user._id} key={user._id} >{user.firstName} {user.lastName}</option>;
  const updateSubmit = (values) => mySubmit(values, parkingId)
  return (
    <div>
      <form onSubmit={handleSubmit(updateSubmit)} className='parking-add-edit-form align-self-center border shadow mt-4'>
        <div className="d-flex justify-content-center margin-t-b black-bottom-border">
          <h2>{isEdit ? ` Parking: ${initialValues.section} ${initialValues.number}` : 'New parking space'}</h2>
        </div>
        <div className="form-group">
          <label>Section:</label>
          <div>
            <Field
              name="section"
              component={RenderField}
              maxLength="1"
              type="text"
              placeholder="A"
              className="form-control"
              disabled={!admin}
              validate={[required, maxLength1]}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Parking number:</label>
          <div>
            <Field
              name="number"
              component={RenderField}
              type="number"
              placeholder="1"
              className="form-control"
              disabled={!admin}
              validate={[required,minValue1]}              
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
              disabled={!admin}
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
              disabled={!admin}
              placeholder='Assigned User'

            >
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
              min={Date.now()}
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
                className="form-control"
              />
            </div>
          </div>
        </div>}

        <div className='d-flex justify-content-between'>
          <Button type="submit" color='warning' disabled={pristine || submitting}>
            {isEdit ? 'Edit' : 'Create'}
          </Button>
          <Link to='/parking'>
            <Button color='primary'>
              Return
          </Button>
          </Link>
        </div>
      </form>
    </div>
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