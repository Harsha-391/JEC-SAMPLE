// src/components/Subheader.js
import React from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

// ... [Your existing array data: jecMenuItems, admissionMenuItems etc.] ...
// Note: Keeping the data arrays as they were in your original file

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

const societyMenuItems = [
  { title: 'Foundation for Better Tomorrow', path: '/society/foundation' },
  { title: 'Agrasen College', path: '/society/agrasen-college' },
  { title: 'Jaipur College of Education & Science', path: '/society/jces' },
  { title: 'Key Teams & Functions', path: '/society/teams' },
];

const infraMenuItems = [
  { title: 'Convenience and Safety', path: '/infrastructure/convenience' },
  { title: 'Learning By Doing', path: '/infrastructure/learning' },
  { title: 'Prepare and Present', path: '/infrastructure/prepare' },
  { title: 'Refuel and Relax', path: '/infrastructure/refuel' },
];

function Subheader() {
  return (
    <div className="main-header-section">
      <div className="main-header-container max-width-container">
        
        <Link to="/" className="brand-logo-link">
          <img src="/images/logo.png" alt="Jaipur Engineering College Logo" />
          <div className="brand-text">
            <span>JEC</span>
            <span>KUKAS</span>
          </div>
        </Link>

        <nav className="main-nav-menu">
          <Link to="/" className="menu-link">Home</Link>
          
          <NavDropdown title="JEC" items={jecMenuItems} baseLink="/#!" />
          
          <NavDropdown title="Admission" items={admissionMenuItems} baseLink="/admissions" />

          <Link to="/placements" className="menu-link">Placement</Link>
          <a href="#!" className="menu-link">Departments</a>

          <NavDropdown 
            title="Infrastructure" 
            items={infraMenuItems} 
            baseLink="/infrastructure" 
            align="center" 
          />

          <a href="#!" className="menu-link">Campus Life</a>

          <NavDropdown 
            title="Our Society" 
            items={societyMenuItems} 
            baseLink="/society"
            align="right" 
          />

          <Link to="/contact" className="menu-link">Contact Us</Link>
        </nav>

      </div>
    </div>
  );
}

export default Subheader;