import React from 'react'
import "./Navbar.css"
import Logout from '../Logout'
import Logo from "../../assets/logo.svg";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">

        <div className="logo">SB </div>
        <img className='navbar-logo' src={Logo} alt="logo" />
        <ul className="nav-links">


         
          <div className="menu">

            <li><a href="/">Home</a></li>
            <li><a href="/project">How to use</a></li>
            <li><a href="/login">Login/Register</a></li>
            <Logout />

          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
