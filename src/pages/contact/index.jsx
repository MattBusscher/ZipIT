// import ContactForm from '../../components/forms/ContactForm.jsx';
export default function ContactPage() {
  return (
    <>
      <h1 className='text-center'>Contact</h1>
      {/* <ContactForm /> */}
      <div className='px-5'>
        <iframe
          className='container object-center'
          src='https://docs.google.com/forms/d/e/1FAIpQLScVIh6X3-sEITtIDX5mTNqQQrTI715JtR9PY5JABe4I6ojT_Q/viewform?embedded=true'
          width='760'
          height='3444'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
