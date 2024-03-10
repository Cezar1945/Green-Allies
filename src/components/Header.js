import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-logo clearfix">
      <span className="header-icon"><i className="fas fa-hiking"></i></span>
      <img className="image-size"  src="/images/lupo.jpg" alt="logo" /> 
        <span className="text-align">   ECOINNOVATION </span>
      <nav className="header-nav">

        <Link className="header-nav-link" to="/">
          Earth Allies
        </Link>
        <Link className="header-nav-link" to="http://192.168.1.204">
          Monitoring
        </Link>
        <Link className="header-nav-link" to="http://192.168.207.111:5000">
          Chat Bot
        </Link>

        <Link className="header-nav-link" to="/competition">
          Competition
        </Link>
        <Link className="header-nav-link" to="/learnabout">
          Learn about GreenTech
        </Link>
        <Link className="header-nav-link" to="/contactform">
          Contact Form
        </Link>
      </nav>
    </div>
  );
}

export default Header;
