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

  return (
    <div className="background">
      <h1 className='title'>Our Team</h1>
      <div className="people-list">
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.imagePath} alt={person.name} />
            <div className='person-info'>
              <a href={person.linkedin} target="_blank">
                <FaLinkedin className='linkedin-icon' />
              </a>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
