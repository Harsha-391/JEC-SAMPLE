// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const jecMenuItems = [
  { title: 'JEC FAQ', path: '/jec/faq' },
  { title: 'Employment @JEC', path: '/jec/employment' },
  { title: 'About JEC', path: '/about' },
  { title: 'Students Testimonials', path: '/jec/testimonials' },
  { title: 'Alumni', path: '/jec/alumni' },
  { title: 'Human Network', path: '/jec/human-network' },
  { title: 'Anti-Ragging Committee', path: '/jec/anti-ragging' },
  { title: 'Institution Innovation Council @JEC', path: '/jec/iic' },
  { title: 'Management', path: '/jec/management' },
];

const admissionMenuItems = [
  { title: 'Documents Required', path: '/admissions/documents' },
  { title: 'Courses Offered', path: '/admissions/courses' },
  { title: 'Fee Structure', path: '/admissions/fees' },
  { title: 'Mandatory Disclosure', path: '/admissions/disclosure' },
  { title: 'Financial Aids & Bank Loans', path: '/admissions/financial-aid' },
  { title: 'REAP-2025', path: '/admissions/reap' }, // This path is now handled by the new component
  { title: 'Admission Open 2025', path: '/admissions/open' },
  { title: 'Karma Courses @JEC', path: '/admissions/karma' },
  { title: 'Admission Procedure', path: '/admissions/procedure' },
];

const societyMenuItems = [
  { title: 'Foundation for Better Tomorrow', path: '/society/foundation' },
  { title: 'Agrasen College', path: '/society/agrasen-college' },
  { title: 'Jaipur College of Education & Science', path: '/society/jces' },
  { title: 'Key Teams & Functions', path: '/society/teams' },
];

function Subheader() {
  return (
    <div className="subheader">
      <div className="subheader-content max-width-container">
        
        <Link to="/" className="subheader-logo">
          <img src="/images/logo.png" alt="Jaipur Engineering College Logo" />
          <div className="logo-text">
            <span>JEC</span>
            <span>KUKAS</span>
          </div>
        </Link>

        <nav className="subheader-nav">
          <Link to="/" className="nav-link">Home</Link>
          
          <NavDropdown title="JEC" items={jecMenuItems} baseLink="/#!" />
          
          <NavDropdown title="Admission" items={admissionMenuItems} baseLink="/admissions" />

          <Link to="/placements" className="nav-link">Placement</Link>
          <a href="#!" className="nav-link">Departments</a>
          <a href="#!" className="nav-link">Infrastructure</a>
          <a href="#!" className="nav-link">Campus Life</a>

          <NavDropdown 
            title="Our Society" 
            items={societyMenuItems} 
            baseLink="/society"
            align="right" 
          />

          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>

      </div>
    </div>
  );
}

export default Subheader;