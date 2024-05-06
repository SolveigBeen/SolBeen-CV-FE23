import { useState, useEffect, useRef } from 'react';
import './Contact.css'
import ThemeProvider from '../../features/ThemeProvider';

//Saves the input data from the form.
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

   //Modal window to confirm Submitting form
   const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(true);
    
  
  };


  //useRef hook to create a reference to the modal element. 
  const modalRef = useRef(null);

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
      setFormData({  // Reset the form data to its initial empty values
        name: '',
        email: '',
        message: ''
      }); 
    }
  };

  //event listener to detect clicks outside of the modal. If a click occurs outside of the modal (i.e., not within the modal content), we close the modal by setting showModal state to false. The useEffect hook ensures that the event listener is added and removed appropriately when the component mounts and unmounts.
  useEffect(() => {
    document.addEventListener('mousedown', closeModal);
    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);


  return (
    <section className='contact'>
     <main className='main-contact'>
      <h2>Wellcome to contact me</h2>
      <h3> Send me your name and write some lines.</h3>

      <form className='main-contact__form' onSubmit={handleSubmit}>
        <div className='main-contact__form-name'>
          <label>Name:
            </label>
          <input
            type="text"
            name="name"
            className='main-contact__form-input'
              value={formData.name}
            onChange={handleChange}
          />
          <label>Email:
          </label>
          <input
            type="email"
            name="email"
            className='main-contact__form-input'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='main-contact__form-message-container'>
          <div className='main-contact__form-mess'>
            <label>Message:
            </label>
            <textarea
              name="message"
              className='main-contact__form-message'
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <ThemeProvider>
          <button className='main-contact__submit-btn' type="submit">Submit</button>
          </ThemeProvider>
        </div>
      </form>

    </main>
    {showModal && (
      <div className="modal"  ref={modalRef}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}></span>
          <p>Thankyou {formData.name}!Your form has been submitted successfully!</p>
        </div>
      </div>
    )}
  </section>
  )
}

export default Contact
