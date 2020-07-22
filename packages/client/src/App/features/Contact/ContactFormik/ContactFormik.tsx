import React from 'react'
// import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Input from './Input'

export interface IContactFormik {}

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Must be at least 3 characters').max(15, 'Must be less than 15 characters').required(),
})

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
      initialValues={{ name: '' }}
      validationSchema={ContactSchema}
    >
      {(props) => (
        <Form>
          <Input name="name" label="First name" />
          <button type="submit" className="btn btn-primary" disabled={props.isSubmitting || !props.dirty}>
            {props.isSubmitting ? 'Loading...' : 'Submit'}
          </button>
        </Form>
      )}
    </Formik>
  )
}

ContactFormik.propTypes = {}

export default ContactFormik
