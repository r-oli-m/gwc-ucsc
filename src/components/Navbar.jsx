import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <div className='navbar'>
      <Link to="/" className="logo">
        <img src="GWC_Final-Logo_Teal.png" alt="logo" />
      </Link>
      <div className='links'>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </div>
  )
}

export default Navbar
