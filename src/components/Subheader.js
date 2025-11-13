// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom';

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader-content">
        
        <Link to="/" className="subheader-logo">
          <img src="/images/logo.png" alt="Company Logo" />
          <span>Jaipur Engineering College</span>
        </Link>

        <div className="subheader-nav">
          <a href="/#academics">Academics</a> 
          <Link to="/admissions">Admissions</Link>
          <a href="/#outcomes">Student Outcomes</a>
          
          {/* CHANGE THIS LINE: */}
          <Link to="/placements">Placements</Link>

          <a href="/#campus">Campus Life</a>
          <a href="/#research">Research</a>
        </div>

      </div>
    </div>
  );
}

export default Subheader;