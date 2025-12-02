// src/components/Subheader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const jecMenuItems = [
  { title: 'JEC FAQ', path: '/jec/faq' },
  { title: 'Employment @JEC', path: '/jec/career' },
  { title: 'About JEC', path: '/about-us' },
  { title: 'Students Testimonials', path: '/jec/testimonials' },
  { title: 'Alumni', path: '/jec/alumni-association' },
  { title: 'Human Network', path: '/jec/human-network' },
  { title: 'Anti-Ragging Committee', path: '/jec/anti-ragging' },
  { title: 'Institution Innovation Council', path: '/jec/innovation-council' },
  { title: 'Management', path: '/jec/management-team' },
];

const admissionMenuItems = [
  { title: 'Documents Required', path: '/admission/documents-required' },
  { title: 'Courses Offered', path: '/admission/courses-offered' },
  { title: 'Fee Structure', path: '/admission/fee-structure' },
  { title: 'Mandatory Disclosure', path: '/admission/mandatory-disclosure' },
  { title: 'Financial Aids & Bank Loans', path: '/admission/financial-aid' },
  { title: 'REAP-2025', path: '/admission/reap' }, 
  { title: 'Admission Open 2025', path: '/admission/open-2025' },
  { title: 'Karma Courses @JEC', path: '/admission/karma-scheme' },
  { title: 'Admission Procedure', path: '/admission/procedure' },
];

// --- NEW: Departments Menu Data (Matches the image uploaded) ---
const departmentMenuItems = [
  { title: 'Computer Science & Engineering (AI)', path: '/department/cse-ai' },
  { title: 'Civil Engineering', path: '/department/civil' },
  { title: 'Information Technology', path: '/department/it' },
  { title: 'Applied Sciences & Humanities', path: '/department/applied-science' },
  { title: 'MOOCS: NPTEL SWAYAM', path: '/department/moocs' },
  { title: 'Computer Science Engineering', path: '/department/cse' },
  { title: 'Electronics & Communication', path: '/department/ece' },
  { title: 'Mechanical Engineering', path: '/department/mechanical' },
  { title: 'Centre Of Excellence (COE)', path: '/department/coe' },
  { title: 'JEC Research Cell', path: '/department/research' },
  { title: 'Engineering @ JEC', path: '/department/engineering' },
  { title: 'Electrical Engineering', path: '/department/electrical' },
];

const societyMenuItems = [
  { title: 'Foundation for Better Tomorrow', path: '/society/foundation' },
  { title: 'Agrasen College', path: '/society/agrasen-college' },
  { title: 'Jaipur College of Education & Science', path: '/society/jces' },
  { title: 'Key Teams & Functions', path: '/society/teams' },
];

const infraMenuItems = [
  { title: 'Convenience and Safety', path: '/infrastructure/convenience-safety' },
  { title: 'Learning By Doing', path: '/infrastructure/learning-by-doing' },
  { title: 'Prepare and Present', path: '/infrastructure/prepare-present' },
  { title: 'Refuel and Relax', path: '/infrastructure/refuel-relax' },
];

function Subheader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="main-header-section">
      <div className="main-header-container max-width-container">
        
        {/* 1. Logo on the LEFT */}
        <Link to="/" className="brand-logo-link" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Jaipur Engineering College Logo" />
          <div className="brand-text">
           
          </div>
        </Link>

        {/* 2. Menu Toggle Button on the RIGHT */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-ellipsis-v"}></i>
        </button>

        {/* 3. Navigation Menu */}
        <nav className={`main-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="menu-link" onClick={closeMenu}>Home</Link>
          
          <NavDropdown title="JEC" items={jecMenuItems} baseLink="/#!" />
          
          <NavDropdown title="Admission" items={admissionMenuItems} baseLink="/admission" />

          <Link to="/placement" className="menu-link" onClick={closeMenu}>Placement</Link>
          
          {/* --- UPDATED: Departments Dropdown --- */}
          <NavDropdown 
            title="Departments" 
            items={departmentMenuItems} 
            baseLink="/department"
            align="center" 
          />

          <NavDropdown 
            title="Infrastructure" 
            items={infraMenuItems} 
            baseLink="/infrastructure" 
            align="center" 
          />

          {/* Campus Life now links to Gallery */}
          <Link to="/gallery" className="menu-link" onClick={closeMenu}>Campus Life</Link>

          <NavDropdown 
            title="Our Society" 
            items={societyMenuItems} 
            baseLink="/society"
            align="right" 
          />

          <Link to="/contact-us" className="menu-link" onClick={closeMenu}>Contact Us</Link>
        </nav>

      </div>
    </div>
  );
}

export default Subheader;