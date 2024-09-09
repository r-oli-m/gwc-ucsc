import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  // State variables for name, email, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send form data to the backend
    fetch('http://localhost:5001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
          // Reset form fields
          setName('');
          setEmail('');
          setMessage('');
        } else {
          console.error('Error sending email');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };


  return (
    <div className='contact'>
      <div className="form-container">
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
