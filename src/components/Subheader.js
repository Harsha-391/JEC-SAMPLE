// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom';

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader-content max-width-container">
        
        {/* Logo on the Left */}
        <Link to="/" className="subheader-logo">
          <img src="/images/logo.png" alt="Jaipur Engineering College Logo" />
          <div className="logo-text">
            <span>JAIPUR ENGINEERING</span>
            <span>COLLEGE</span>
          </div>
        </Link>

        {/* Main Navigation on the Right */}
        <nav className="subheader-nav">
          <Link to="/">Home</Link>
          <a href="#!">JEC</a>
          <Link to="/admissions">Admission</Link>
          <Link to="/placements">Placement</Link>
          <a href="#!">Departments</a>
          <a href="#!">Infrastructure</a>
          <a href="#!">Campus Life</a>
          <a href="#!">Our Society</a>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </nav>

      </div>
    </div>
  );
}

export default Subheader;