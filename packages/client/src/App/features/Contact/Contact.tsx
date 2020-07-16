import React, { useState, FormEvent, ChangeEvent } from 'react'
import PropTypes from 'prop-types'

import ContactForm from './ContactForm'

interface IContactForm {
  firstName: string
  lastName: string
  address?: string
  postalCode?: string
  city?: string
  email: string
  phone: string
  subject: string
  message: string
  date: Date
  offerte: boolean
}

export interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  const [formData, setFormData] = useState<IContactForm>({
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
    city: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    date: new Date(),
    offerte: false,
  })

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmitCallback = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    console.log(formData)
    // dispatch contact form
  }

  return (
    <ContactForm
      firstName={formData.firstName}
      lastName={formData.lastName}
      address={formData.address}
      postalCode={formData.postalCode}
      city={formData.city}
      email={formData.email}
      phone={formData.phone}
      subject={formData.subject}
      message={formData.message}
      onChangeCallback={onChangeCallback}
      onSubmitCallback={onSubmitCallback}
    />
  )
}

Contact.propTypes = {}

export default Contact
