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
          At UCSC Girls Who Code, we create a supportive space for individuals from underrepresented backgrounds to build confidence and discover joy in coding. 
          Through workshops, socials, guest speakers, and collaborative projects, we provide hands-on experience and resources to help our members thrive in tech.
          Our informal, inclusive environment moves beyond traditional educational settings, prioritizing deeper connections with the community. Join us as we inspire 
          one another and celebrate our coding journey!
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
