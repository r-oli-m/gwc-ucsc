import React from 'react'
import '../styles/Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/GWC_Final-Logo_Teal.png'; // Adjust the path as needed

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <Link to="/" className="logo">
        <img src={logo} alt="logo_pic" />
      </Link>
      <div className='links'>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink>
        <NavLink to="/people" className={({ isActive }) => isActive ? 'active' : ''}>People</NavLink>
        <NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>Resources</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
