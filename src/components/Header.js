// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header-content max-width-container">
        {/* Contact Info on the Left */}
        <div className="header-contact">
          <a href="tel:+918875071333">
            <i className="fas fa-phone"></i> +91-8875071333 (30 lines)
          </a>
          <a href="mailto:admission@jeckukas.org.in">
            <i className="fas fa-envelope"></i> admission@jeckukas.org.in
          </a>
        </div>
        
        {/* Links on the Right */}
        <nav className="header-nav">
          <a href="#!">
            <i className="fas fa-edit"></i> Admission Enquiry Open 2025
          </a>
          <Link to="/admissions">
            <i className="fas fa-user-graduate"></i> Apply for Admission
          </Link>
          <a href="#!">
            <i className="fas fa-map-marked-alt"></i> JEC 360 Virtual Campus Tour
          </a>
          <a href="#!">
            <i className="fas fa-bullhorn"></i> Grievance Redressal Form
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;