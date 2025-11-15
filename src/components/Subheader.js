// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown'; // 1. Import the new component

// 2. Define the menu data
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
  { title: 'REAP-2025', path: '/admissions/reap' },
  { title: 'Admission Open 2025', path: '/admissions/open' },
  { title: 'Karma Courses @JEC', path: '/admissions/karma' },
  { title: 'Admission Procedure', path: '/admissions/procedure' },
];

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

        {/* 3. Update the Navigation */}
        <nav className="subheader-nav">
          <Link to="/" className="nav-link">Home</Link>
          
          {/* JEC Dropdown */}
          <NavDropdown title="JEC" items={jecMenuItems} baseLink="/#!" />
          
          {/* Admission Dropdown */}
          <NavDropdown title="Admission" items={admissionMenuItems} baseLink="/admissions" />

          {/* Other Links */}
          <Link to="/placements" className="nav-link">Placement</Link>
          <a href="#!" className="nav-link">Departments</a>
          <a href="#!" className="nav-link">Infrastructure</a>
          <a href="#!" className="nav-link">Campus Life</a>
          <a href="#!" className="nav-link">Our Society</a>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          {/* "About Us" is now inside the JEC dropdown */}
        </nav>

      </div>
    </div>
  );
}

export default Subheader;