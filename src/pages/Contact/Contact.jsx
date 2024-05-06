import { useState } from 'react';
import './Contact.css'

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions here, such as sending the data to a server
  };

  return (
    <section className='contact'>
     <main className='main-contact'>
      <h2>Wellcome to contact me</h2>
      <h3> Send me your name and write some lines.</h3>
     <form className='main-contact__form' onSubmit={handleSubmit}>
      <div className='main-contact__form-name'>
        
          <label>
            Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
         
     
      <label>
        Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      
      </div>
      <div className='main-contact__form-message-container'>
        <div className='main-contact__form-message'>
          <label>
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </div>
     
     
    </form>
    </main>
  </section>
  )
}

export default Contact
