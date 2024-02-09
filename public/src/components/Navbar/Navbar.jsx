import React, { useContext } from 'react';
import "./Navbar.css";
import Logout from '../Logout';
import Logo from "../../assets/logo.svg";
import { logtoggle } from '../../contexts/logtoggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {loggedIn} = useContext(logtoggle);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">SB </div>
        <img className='navbar-logo' src={Logo} alt="logo" />
        <ul className="nav-links">
          <div className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project">How to use</Link></li>
            {!loggedIn && <li><Link to="/login">Login/Register</Link></li>}
            {loggedIn && <Logout />}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
