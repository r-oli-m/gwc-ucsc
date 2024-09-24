import React, { useEffect, useState } from 'react';
import '../styles/PeopleList.css';
import { FaLinkedin } from "react-icons/fa";

// Import images dynamically
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
};
const images = importAll(require.context('../assets/people', false, /\.(jpeg|jpg|png)$/));

const PeopleList = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await fetch('https://ucsc-gwc-backend-8b359a2211ea.herokuapp.com/people', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
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
    <div className='gradient-background'>
      <h1 className='ot-title'>Our Team</h1>
      <div className="people-list">
        {people.map((person, index) => {
          // Access the fields with bracket notation
          const firstName = person['First Name'];
          const middleName = person['Middle Name (leave blank if none)'] || ''; // Fallback for empty middle name
          const lastName = person['Last Name'];
          const role = person['Role (Member or specify Officer role)'];
          const linkedin = person['LinkedIn URL'];

          const fullName = `${firstName} ${middleName} ${lastName}`.trim(); // Construct full name
          const imageFileNameJpeg = `${firstName}_${lastName}.jpeg`;
          const imageFileNameJpg = `${firstName}_${lastName}.jpg`;

          // Check for .jpeg or .jpg version of the image
          const imageUrl = images[imageFileNameJpeg] || images[imageFileNameJpg] || 'https://www.colorado.edu/cmci/sites/default/files/styles/small/public/people/blank_pfp_2.png?itok=cfCZ2wEU'; // Use default image if not found

          return (
            <div key={index} className="person-card">
              <img src={imageUrl} alt={fullName} onError={(e) => { e.target.src = 'https://www.colorado.edu/cmci/sites/default/files/styles/small/public/people/blank_pfp_2.png?itok=cfCZ2wEU'; }} // Fallback to blank image on error
              />
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
