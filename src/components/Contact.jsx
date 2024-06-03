import React from 'react';
import '../styles/Contact.css';
import InstagramEmbed from './InstagramProfile';
import { FaLinkedin } from "react-icons/fa";

import Members from './Members'

const partialList = (array, size) => {
  const oneRow = [];
  for (let i = 0; i < array.length; i += size) {
    oneRow.push(array.slice(i, i + size));
  }
  return oneRow;
};

const Contact = () => {
  const membersList = partialList(Members, 4);

  return (
    <div className='contact'>
      <h1 className="heading" >Our Team</h1>
      {/* <InstagramEmbed url="https://www.instagram.com/p/C6FRqBCPv2J/" /> */}

      <div>
        {membersList.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((Member, itemIndex) => (
              <div className="item" key={itemIndex}>
                <div className = "memberPicture"><img src={Member.picture} /></div>
                <div className = "memberLinkedin"><a href={Member.linkedin} target="_blank" >
                    <FaLinkedin size={30} />
                </a></div>
                <div className = "memberName">{Member.name}</div>
                <div className = "memberPosition">{Member.position}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Contact;
