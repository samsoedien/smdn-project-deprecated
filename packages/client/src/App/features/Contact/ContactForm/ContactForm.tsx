import React, { FormEvent, ChangeEvent } from 'react'
import PropTypes from 'prop-types'

export interface IContactFormProps {
  firstName: string
  lastName: string
  address?: string
  postalCode?: string
  city?: string
  email: string
  phone: string
  subject: string
  message: string
  onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmitCallback: (e: FormEvent<HTMLFormElement>) => void
}

const ContactForm: React.FC<IContactFormProps> = ({
  firstName,
  lastName,
  address,
  postalCode,
  city,
  email,
  phone,
  subject,
  message,
  onChangeCallback,
  onSubmitCallback,
}) => {
  return (
    <form onSubmit={(e) => onSubmitCallback(e)}>
      <input
        type="name"
        name="firstName"
        value={firstName}
        onChange={(e) => onChangeCallback(e)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

ContactForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  address: PropTypes.string,
  postalCode: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  onSubmitCallback: PropTypes.func.isRequired,
}

export default ContactForm
