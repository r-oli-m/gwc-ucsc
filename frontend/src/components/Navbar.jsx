import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/GWC_Final-Logo_Teal.png'; // Adjust the path as needed
import mascot from '../assets/mascot.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Reset the menu based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsOpen(false); // Close the mobile menu if screen becomes larger
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="left-side">
        <Link to="/">
          <img src={logo} alt="logo_pic" className="logo" />
        </Link>
        <img src={mascot} alt="mascot" className='mascot-img' />
      </div>

      <div className={`links ${isOpen && isMobile ? 'open' : ''}`}>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink>
        <NavLink to="/people" className={({ isActive }) => isActive ? 'active' : ''}>People</NavLink>
        <NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>Resources</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;
