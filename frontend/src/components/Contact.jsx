import React from 'react';
import '../styles/Contact.css';
import InstagramEmbed from './InstagramProfile';

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Component</h1>
      <InstagramEmbed url="https://www.instagram.com/p/C6FRqBCPv2J/" /> {/* pass the insta post url u wanna see*/}

    </div>
  );
};

export default Contact;
