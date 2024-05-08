import React from 'react';
import InstagramEmbed from './InstagramProfile';
import '../styles/Resources.css';

const Resources = () => {
  return (
    <div className='resources'>
      <h1>Resources</h1>
      <InstagramEmbed url="https://www.instagram.com/p/C6FRqBCPv2J/" /> {/* pass the insta post url u wanna see*/}
    </div>
  );
};

export default Resources;
