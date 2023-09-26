import React, { useState } from 'react';
import "./contactUs.css"

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
    <div className="contact-left">
      <img src="./src/assets/צילום מסך 2023-09-18 160818.png" alt="" />
    </div>
    <div className="contact-right">
      <h2 className='contact-header'>Contact Us</h2>
      <div className='contact-us-form'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="input-field"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input className="input-field"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea className="input-field"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='submit-button'
        >Submit</button>
      </form>
    </div>
   
 

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  </div>
 
  </div>);
}

export default ContactUs;
