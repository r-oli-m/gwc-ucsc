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

  const convertGoogleDriveLink = (driveLink) => {
    const fileId = driveLink.split('id=')[1];
    console.log(`https://drive.google.com/uc?id=${fileId}`);
    return `https://drive.google.com/uc?id=${fileId}`;
  };
  

  return (
    <div className="background">
      <h1 className='ot-title'>Our Team</h1>
      <div className="people-list">
        {people.map((person, index) => {
          const { firstName, middleName, lastName, profilePic, role, linkedin } = person; // Destructure the properties
          const fullName = `${firstName} ${middleName} ${lastName}`.trim(); // Construct full name
          const imageUrl = convertGoogleDriveLink(profilePic);
          return (
            <div key={index} className="person-card">
              <img src="https://drive.google.com/uc?id=1oImVx4kGOdKEnEi_cKk4Gxr5Sm-6aqs1"alt={fullName} /> {/* Use the profilePic field directly */}
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
