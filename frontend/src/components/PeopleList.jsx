import React, { useEffect, useState } from 'react';
import '../styles/PeopleList.css';
import { FaLinkedin } from "react-icons/fa";


const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        // Use full URL to fetch data from the backend
        const response = await fetch('http://localhost:5001/people');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPeople(data);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    fetchPeople();
  }, []);

  const imageUrl = (firstName, middleName, lastName) => {
    const middlePart = middleName ? `${middleName}_` : '';
    return `${process.env.PUBLIC_URL}/people/${firstName}_${middlePart}${lastName}.jpeg`;
  };

  return (
    <div className="background">
      <h1 className='ot-title'>Our Team</h1>
      <div className="people-list">

        {people.map((person, index) => {
          const { firstName, middleName, lastName, role, linkedin } = person; // Destructure the properties
          const fullName = `${firstName} ${middleName} ${lastName}`.trim(); // Construct full name

          return (
            <div key={index} className="person-card">
              <img src={imageUrl(firstName, middleName, lastName)} alt={fullName} />
              <div className='person-info'>
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedin className='linkedin-icon' />
                </a>
                <h3>{fullName}</h3>
                <p>{role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleList;
