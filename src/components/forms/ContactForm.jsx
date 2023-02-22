import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0b17gj5',
        'template_dsetu7s',
        form.current,
        '887_CxnUe9-rOrIE1'
      )
      .then(
        (result) => {
          // eslint-disable-next-line no-console
          console.log(result.text);
          form.current.reset();
          alert('Message sent');
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        }
      );
  };

  return (
    <div className='container w-64'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' className='input w-full max-w-xs' />
        <label>Phone</label>
        <input
          type='text'
          name='phone_number'
          className='input w-full max-w-xs'
        />
        <label>Email</label>
        <input
          type='email'
          name='user_email'
          className='input w-full max-w-xs'
        />
        <label>Message</label>
        <textarea name='message' className='input w-full max-w-xs' />
        <input type='submit' value='Send' className='btn' />
      </form>
    </div>
  );
};
