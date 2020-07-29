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
  onChangeCallback: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
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
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <input
              type="name"
              name="firstName"
              value={firstName}
              placeholder="Voornaam*"
              onChange={(e) => onChangeCallback(e)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <input
              type="name"
              name="lastName"
              value={lastName}
              placeholder="Achternaam*"
              onChange={(e) => onChangeCallback(e)}
              className="form-control"
            />
          </div>
          <div className="row">
            <div className="col-md-7">
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Adres + Huisnumer"
                onChange={(e) => onChangeCallback(e)}
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <input
                type="text"
                name="postalCode"
                value={postalCode}
                placeholder="Postcode"
                onChange={(e) => onChangeCallback(e)}
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                name="city"
                value={city}
                placeholder="Woonplaats"
                onChange={(e) => onChangeCallback(e)}
                className="form-control"
              />
            </div>
          </div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="E-mailadress*"
            onChange={(e) => onChangeCallback(e)}
            className="form-control"
          />
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Telefoonnummer*"
            onChange={(e) => onChangeCallback(e)}
            className="form-control"
          />
          <input
            type="text"
            name="subject"
            value={subject}
            placeholder="Onderwerp*"
            onChange={(e) => onChangeCallback(e)}
            className="form-control"
          />
          <textarea
            name="message"
            value={message}
            placeholder="Uw bericht*"
            rows={7}
            onChange={(e) => onChangeCallback(e)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
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
