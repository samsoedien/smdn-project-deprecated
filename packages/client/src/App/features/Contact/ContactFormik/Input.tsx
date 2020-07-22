import React from 'react'
// import PropTypes from 'prop-types'
import { useField } from 'formik'

interface IInputProps {}

const Input: React.FC<IInputProps | any> = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input type="text" {...field} {...props} className="form-control" />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </>
  )
}

Input.propTypes = {}

export default Input
