import React from 'react';
import '../styles/Resources.css';
import { IoIosArrowDropright } from "react-icons/io";


const Resources = () => {
  return (
    <div className='resources'>

      <div className='boxes-container'>
        <div className='box'>
          <h1>Workshop Slides 🛝</h1>
          <IoIosArrowDropright
            className="custom-icon"
            onClick={() => window.open('https://docs.google.com/document/d/1_JZu6IJSLd2XifPcJMYK23Vwui62l6qAb1fTcHTrQqg/edit?usp=sharing', '_blank')}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className='box'>
          <h1>Technical Skills 🤓</h1>
          <IoIosArrowDropright
            className="custom-icon"
            onClick={() => window.open('https://docs.google.com/document/d/1MNSm-BhU9gx-JnKA9x09I2Q3h553TY9X2TKiYzndqy0/edit?usp=sharing', '_blank')}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className='box'>
          <h1>Career Development 🤵‍♀️</h1>
          <IoIosArrowDropright
            className="custom-icon"
            onClick={() => window.open('https://docs.google.com/document/d/1PX6is5_PDzYnrxZq6SlshGtZcaxWaws8AHnPZLPecG4/edit?usp=sharing', '_blank')}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className='box'>
          <h1>Motivation 💚</h1>
          <IoIosArrowDropright
            className="custom-icon"
            onClick={() => window.open('https://docs.google.com/document/d/1gv1F1z6pzNsK2yuNPgArhe-4KS0QUY-7ImWkfA1jkS0/edit?usp=sharing', '_blank')}
            role="button"
            tabIndex="0"
          />
        </div>
        <div className='box'>
          <h1>Photo Album 📷</h1>
          <IoIosArrowDropright className="custom-icon"
            onClick={() => window.open('https://docs.google.com/document/d/10oZFLwLWEWvWQgp17MGjWj824MeL6hwEN-KmSRrXJ7k/edit?usp=sharing', '_blank')}
            role="button"
            tabIndex="0"
          />
        </div>
      </div>

    </div>
  );
};

export default Resources;
