import { useState, useEffect, useRef } from 'react';
import './Contact.css'
import ThemeProvider from '../../features/ThemeProvider';
import ButtonGeneral from '../../components/ButtonGeneral/ButtonGeneral';

//Saves the input data from the form.
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    
      <h2>Wellcome to contact me</h2>
      <h3> Send me your name and write some lines.</h3>

      <form className='contact__form' onSubmit={handleSubmit}>
        <div className='contact__form-inp'>
          <div className='contact__form-name'>
            <label>Name:
              </label>
            <input
              type="text"
              name="name"
              className='contact__form-input'
                value={formData.name}
              onChange={handleChange}
            />
            <label>Email:
            </label>
            <input
              type="email"
              name="email"
              className='contact__form-input'
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email:
            </label>
            <input
              type="phone"
              name="phone"
              className='contact__form-input'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className='contact__form-message-container'>
            <div className='contact__form-mess'>
              <label>Message:
              </label>
              <textarea
                name="message"
                className='contact__form-message'
                value={formData.message}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='contact__submit-container'>
            
              <ButtonGeneral className='contact__submit-btn' type="submit" title='send'></ButtonGeneral>
            
           
        </div>
          
        
      </form>

  
    {showModal && (
      <div className='modal-wrapper'>
      <div className="modal"  ref={modalRef}>
        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(false)}></span>
          <h3>Thank you {formData.name}!</h3>
          <p>I will get back to you!</p>
        </div>
      </div>
      <div class="backdrop"></div>
      </div>
    )}
  </section>
  )
}

export default Contact
