import React from 'react'
// import PropTypes from 'prop-types'
import styles from './ContactFormik.module.scss'
import { Formik } from 'formik'

import { ContactValidationSchema } from '@smdn-project/common'
import Input from '../../../components/Input'

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
      validationSchema={ContactValidationSchema}
    >
      {({ handleSubmit, handleChange, isSubmitting, values, dirty, touched, errors }) => (
        <form onSubmit={handleSubmit} className={styles['form']}>
          <label htmlFor="name">Name</label>
          <Input name="name" value={values.name} onChange={handleChange} />
          <span className="form-text text-muted">{touched.name && errors.name}</span>

          <label htmlFor="email">Email Address</label>
          <Input name="email" value={values.email} onChange={handleChange} />
          <span className="form-text text-muted">{touched.email && errors.email}</span>

          <label htmlFor="subject">Subject</label>
          <Input name="subject" value={values.subject} onChange={handleChange} />
          <span className="form-text text-muted">{touched.subject && errors.subject}</span>

          <label htmlFor="message">Message</label>
          <textarea
            rows={8}
            name="message"
            value={values.message}
            onChange={handleChange}
            className="form-control"
          ></textarea>
          <span className="form-text text-muted">{touched.message && errors.message}</span>

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
