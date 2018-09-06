import React from 'react'
import './renderfield.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const required = value => value ? undefined : 'This field is required'
export const maxLength = max => value =>
  value && value.length > max ? max === 1 ? 'Must be 1 character length' : `Must be ${max} characters or less` : undefined
export const minLength = min => value =>
  value && value.length <= min ? min === 1 ? 'Must be 1 character length' : `Must be ${min} characters or less` : undefined

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+$/i.test(value) ?
    'Invalid email address' : undefined
export const maxLength1 = maxLength(1)
export const minLength1 = minLength(1)
export const minValue1 = minValue(1)
export const RenderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
  <div>

    <input className={className} {...input} placeholder={label} type={type} />
    {touched && ((error && <div className='error'>
      <span>
        <FontAwesomeIcon icon='exclamation-circle' />  {error}</span>
    </div>) ||
      (warning && <div className='error'>
        <span>{warning}</span>
      </div>))}

  </div>
)

