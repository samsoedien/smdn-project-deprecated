import React, { useState, FormEvent, ChangeEvent } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { IContactForm } from '@smdn-project/common'
// import SubmitContactFormThunkActionCreator from '../../../store/formsSlice'
import ContactForm from './ContactForm'

export interface IContactProps {}

const Contact: React.FC<IContactProps> = () => {
  const dispatch = useDispatch()
  // const [formData, setFormData] = useState<IContactForm>({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // })

  const onSubmitCallback = (formData: IContactForm): void => {
    console.log('formData', formData)
    // dispatch(SubmitContactFormThunkActionCreator(formData))
  }

  return <ContactForm onSubmitCallback={onSubmitCallback} />
}

Contact.propTypes = {}

export default Contact
