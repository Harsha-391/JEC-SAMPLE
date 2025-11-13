// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader-content">
        
        {/* This logo should link to the homepage */}
        <Link to="/" className="subheader-logo"> {/* 2. Use <Link to="/"> */}
          <img src="/images/logo.png" alt="Company Logo" />
          <span>Jaipur Engineering College</span>
        </Link>

        <div className="subheader-nav">
          {/* These links are for sections on the Home page, so they can stay as <a> */}
          <a href="/#academics">Academics</a> 
          
          {/* This is our NEW page link */}
          <Link to="/admissions">Admissions</Link> {/* 3. Use <Link to="/admissions"> */}

          <a href="/#outcomes">Student Outcomes</a>
          <a href="/#placements">Placements</a>
          <a href="/#campus">Campus Life</a>
          <a href="/#research">Research</a>
        </div>

      </div>
    </div>
  );
}

export default Subheader;