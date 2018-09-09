import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'
import { RenderField,  required } from '../renderfield'


const AddEditNewForm = (props) => {
  const { handleSubmit, pristine, submitting, mySubmit, isEdit, admin, user, newId } = props;
  const updateSubmit = (values) => {
    values.author = user.id;
    if(isEdit)
    mySubmit(values, newId)
    else 
    mySubmit(values);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(updateSubmit)} className='parking-add-edit-form align-self-center border shadow mt-4'>
        <div className="d-flex justify-content-center margin-t-b black-bottom-border">
          <h2>{isEdit ? ` New: ` : 'Create a new'}</h2>
        </div>
        <div className="form-group">
          <label>Title:</label>
          <div>
            <Field
              name="title"
              component={RenderField}
              type="text"
              placeholder="Title"
              className="form-control"
              disabled={!admin}
              validate={[required]}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Content:</label>
          <div>
            <Field
              name="text"
              component={RenderField}
              type="textarea"
              placeholder="Title"
              className="form-control"
              validate={[required]}
            />
          </div>
        </div>






        <div className='d-flex justify-content-between'>
          <Button type="submit" color='warning' disabled={pristine || submitting}>
            {isEdit ? 'Edit' : 'Create'}
          </Button>
          <Link to='/news'>
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
})(AddEditNewForm)



form = connect(
  state => {
    return ({
      initialValues: state.news.new
    })
  }
)(form)

export default form;