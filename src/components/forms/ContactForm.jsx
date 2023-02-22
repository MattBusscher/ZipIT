import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

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
    <div className='container w-64 outline'>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          Name <span className='italic text-slate-400'>(required)</span>
        </label>
        <input
          type='text'
          name='user_name'
          className='input w-full max-w-xs'
          required
        />

        <label>
          Email <span className='italic text-slate-400'>(required)</span>
        </label>
        <input
          type='email'
          name='user_email'
          className='input w-full max-w-xs'
          required
        />
        <label>
          Phone <span className='italic text-slate-400'>(optional)</span>
        </label>
        <input
          type='text'
          name='phone_number'
          className='input w-full max-w-xs'
        />
        <label>
          Message<span className='italic text-slate-400'>(optional)</span>
        </label>
        <textarea name='message' className='input w-full max-w-xs' />
        <input
          type='submit'
          value='Send'
          className='rounded-md bg-slate-800 p-2 text-slate-50'
        />
        <ReCAPTCHA
          sitekey='6Ld8K6UkAAAAACGb-Ns0T7mPLh0KXozxoOsJEEh7'
          onChange={sendEmail}
        />
      </form>
    </div>
  );
};
