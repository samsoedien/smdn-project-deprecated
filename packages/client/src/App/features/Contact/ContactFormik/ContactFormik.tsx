import React from 'react'
// import PropTypes from 'prop-types'
import { Formik } from 'formik'

import Input from './Input'
import { ContactSchema } from './contactFormValidation'

export interface IContactFormik {}

const ContactFormik: React.FC<IContactFormik> = () => {
  return (
    <Formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 3000)
      }}
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={ContactSchema}
    >
      {({ handleSubmit, handleChange, isSubmitting, values, dirty, touched, errors }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={values.name} onChange={handleChange} className="form-control" />
          <span className="form-text text-muted">{touched && errors.name}</span>

          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" value={values.email} onChange={handleChange} className="form-control" />
          <span className="form-text text-muted">{touched && errors.email}</span>

          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" value={values.subject} onChange={handleChange} className="form-control" />
          <span className="form-text text-muted">{touched && errors.subject}</span>

          <label htmlFor="message">Message</label>
          <textarea
            rows={8}
            name="message"
            value={values.message}
            onChange={handleChange}
            className="form-control"
          ></textarea>
          <span className="form-text text-muted">{touched && errors.message}</span>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting || !dirty}>
            {isSubmitting ? 'Loading...' : 'Submit'}
          </button>
        </form>
      )}
    </Formik>
  )
}

ContactFormik.propTypes = {}

export default ContactFormik
