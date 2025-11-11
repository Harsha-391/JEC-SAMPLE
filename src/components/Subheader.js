// src/components/Subheader.js
import React from 'react';

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader-content">
        
        {/* 1. Add your logo here on the left */}
        <div className="subheader-logo">
          <img src="/images/logo.png" alt="Company Logo" />
          <span>Jaipur Engineering College</span>
        </div>

        {/* 2. Wrap your links in a nav container on the right */}
        <div className="subheader-nav">
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#outcomes">Student Outcomes</a>
          <a href="#placements">Placements</a>
          <a href="#campus">Campus Life</a>
          <a href="#research">Research</a>
        </div>

      </div>
    </div>
  );
}

export default Subheader;