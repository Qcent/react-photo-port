import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers';

function ContactForm({ category }) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    setErrorMessage('');
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      }
    }
    else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } else {
      console.log(errorMessage)
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);

    if (!errorMessage) {
      if (!name.length) {
        setErrorMessage(`Name is required.`);
        return;
      }
      if (!validateEmail(email)) {
        setErrorMessage(`Your email is invalid.`);
        return;
      }
      if (!message.length) {
        setErrorMessage(`Message is required.`);
        return;
      }
      //submit form
    }
  };

  return (
    <section>
      <h1 data-testid="contact-title">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="contact-button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;