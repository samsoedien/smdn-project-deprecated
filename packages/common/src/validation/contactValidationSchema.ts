import * as Yup from 'yup'

export const ContactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Must be at least 3 characters')
    .max(15, 'Must be less than 15 characters')
    .required('Please enter your name'),
  email: Yup.string().email('Invalid email').required('Please enter your email'),
  subject: Yup.string().required('Please enter a subject'),
  message: Yup.string()
    .min(24, "It's a bit short, at least try the form a sentence")
    .max(6000, "C'mon are you writing an essay here?")
    .required('Please enter your message'),
})

export default ContactValidationSchema
