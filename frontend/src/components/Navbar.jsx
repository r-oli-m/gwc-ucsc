import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/GWC_Final-Logo_Teal.png'; // Adjust the path as needed

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <Link to="/" className="logo">
        <img src={logo} alt="logo_pic" />
      </Link>
      <div className='links'>
        <Link to="/about">About Us</Link>
        <Link to="/events">Events</Link>
        <Link to="/people">People</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </div>
  )
}

export default Navbar
