import React from 'react';
import '../styles/Resources.css';
import { IoIosArrowDropright } from "react-icons/io";


const Resources = () => {
  return (
    <div className='resources'>
      <h1></h1>

      <div className='boxes-container'>
        <div className='box'>
          <h1>Workshop Slides</h1>
          <IoIosArrowDropright className="custom-icon"/>
        </div>
        <div className='box'>
          <h1>Technical Skills </h1>
          <IoIosArrowDropright className="custom-icon"/>
        </div>
        <div className='box'>
          <h1>Career Development</h1>
          <IoIosArrowDropright className="custom-icon" />
        </div>

      </div>
      
    </div>
  );
};

export default Resources;
