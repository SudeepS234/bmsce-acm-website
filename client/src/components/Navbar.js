import React from 'react';
import './Navbar.css'; // Create this file for additional styles
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ scrollToSection }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>
          <img src="./images/logo.png" alt="Brand Logo" className="brand-logo" />
          BMSCE ACM Student Chapter
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><button className="nav-link" onClick={() => scrollToSection('aboutACM')}>About Us</button></li>
            <li className="nav-item"><button className="nav-link" onClick={() => scrollToSection('events')}>Events</button></li>
            <li className="nav-item"><button className="nav-link" onClick={() => scrollToSection('news')}>News</button></li>
            <li className="nav-item"><button className="nav-link" onClick={() => scrollToSection('gallery')}>Gallery</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
