import React, { FormEvent } from 'react'
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik'
import { IContactForm, ContactValidationSchema } from '@smdn-project/common'

export interface IContactFormProps {
  // onSubmitCallback: (e: FormEvent<HTMLFormElement>, values: any) => void
  onSubmitCallback: (formData: any) => void
}

const initialValues: IContactForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const ContactForm: React.FC<IContactFormProps> = ({ onSubmitCallback }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactValidationSchema}
      onSubmit={(values, actions) => {
        onSubmitCallback(values)
        actions.resetForm()
        actions.setSubmitting(false)
      }}
    >
      {({ isSubmitting, dirty, touched, errors }) => (
        <Form>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Field type="name" name="name" placeholder="Name*" className="form-control mb-2" />
                <span className="text-danger">{touched.name && errors.name}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Field type="email" name="email" placeholder="Email*" className="form-control mb-2" />
                <span className="text-danger">{touched.email && errors.email}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Field type="text" name="subject" placeholder="Subject" className="form-control mb-2" />
                <span className="text-danger">{touched.subject && errors.subject}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Field type="text" name="message" placeholder="Message*" className="form-control mb-2" />
                <span className="text-danger">{touched.message && errors.message}</span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary float-right">
              {isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm
