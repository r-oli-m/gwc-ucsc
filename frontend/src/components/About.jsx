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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
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
