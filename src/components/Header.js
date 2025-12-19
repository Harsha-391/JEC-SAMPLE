// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Header() {
  return (
    <header className="top-bar-section">
      <div className="top-bar-container">
        
        {/* LEFT SIDE: Contact Info */}
        <div className="top-bar-left">
          <a href="tel:+918875071333">
            <i className="fas fa-phone-alt"></i> +91-8875071333 (30 lines)
          </a>
          <a href="mailto:admission@jeckukas.org.in">
            <i className="fas fa-envelope"></i> admission@jeckukas.org.in
          </a>
        </div>
        
        {/* RIGHT SIDE: Action Links */}
        <nav className="top-bar-right">
          <Link to="/admission-enquiry">
            <i className="fas fa-edit"></i> Admission Enquiry Open 2025
          </Link>
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