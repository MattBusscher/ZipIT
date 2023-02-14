import emailjs from 'emailjs/browser';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        }
      );

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='message'>Message:</label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button type='submit'>Send</button>
    </form>
  );
};

export default ContactForm;
