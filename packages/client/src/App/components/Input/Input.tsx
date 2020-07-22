import React, { ChangeEvent } from 'react'
import PropTypes from 'prop-types'

export interface IInputProps {
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IInputProps | any> = (props) => {
  return <input type="text" className="form-control" {...props} />
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Input
