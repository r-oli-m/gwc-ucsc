import React from 'react';
import '../styles/About.css';
import { useNavigate } from 'react-router-dom';
import mascotStar from '../assets/mascot-star.png'; 

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Button clicked');
    navigate('/people');
  };

  return (
    <div className="about">
      <div className="about-container">
        <div className="left-container">
          <h1 className="wwa-title">Who We Are</h1>
          <h3 className="about-description">
          At UCSC Girls Who Code, we believe in the power of technology to transform lives and communities. 
          Our organization is committed to creating a supportive space for underrepresented backgrounds 
          to build confidence and enjoyment through coding. Through workshops, socials, guest speaker events, and collaborative projects, 
          we provide hands-on experience and valuable resources to help our members thrive in the tech industry.
          </h3>
          <button onClick={handleClick} className="button">
            Meet the people of Girls Who Code!
          </button>
        </div>
        <div className="right-image">
          <img src={mascotStar} alt="mascot_star" />
        </div>
      </div>
    </div>
  );
};

export default About;
