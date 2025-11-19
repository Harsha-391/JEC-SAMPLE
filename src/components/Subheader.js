// src/components/Subheader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

// ... Keep your menu arrays (jecMenuItems, etc.) exactly as they are ...
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
            <span>JEC</span>
            <span>KUKAS</span>
          </div>
        </Link>

        {/* 2. Menu Toggle Button on the RIGHT */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          {/* Using ellipsis-v for triple dot, or bars for hamburger */}
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-ellipsis-v"}></i>
        </button>

        {/* 3. Navigation Menu (Hidden by default on mobile, shown when active) */}
        <nav className={`main-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="menu-link" onClick={closeMenu}>Home</Link>
          
          <NavDropdown title="JEC" items={jecMenuItems} baseLink="/#!" />
          
          <NavDropdown title="Admission" items={admissionMenuItems} baseLink="/admissions" />

          <Link to="/placements" className="menu-link" onClick={closeMenu}>Placement</Link>
          <a href="#!" className="menu-link" onClick={closeMenu}>Departments</a>

          <NavDropdown 
            title="Infrastructure" 
            items={infraMenuItems} 
            baseLink="/infrastructure" 
            align="center" 
          />

          <a href="#!" className="menu-link" onClick={closeMenu}>Campus Life</a>

          <NavDropdown 
            title="Our Society" 
            items={societyMenuItems} 
            baseLink="/society"
            align="right" 
          />

          <Link to="/contact" className="menu-link" onClick={closeMenu}>Contact Us</Link>
        </nav>

      </div>
    </div>
  );
}

export default Subheader;