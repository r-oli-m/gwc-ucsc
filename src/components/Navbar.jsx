import React from 'react'
import '../styles/Navbar.css'
const Navbar = () => {
  
  return (
    <div className='navbar'>
      <img className="logo" src="GWC_Final-Logo_Teal.png" alt="logo" />
      <div className='links'>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/getinvolved">Get Involved</a>
        <a href="/resources">Resources</a>
      </div>
    </div>
  )
}

export default Navbar
