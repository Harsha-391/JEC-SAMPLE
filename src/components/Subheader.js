// src/components/Subheader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const jecMenuItems = [
  { title: 'JEC FAQ', path: '/jec/JEC-FAQ' },
  { title: 'Employment @JEC', path: '/jec/Employment-JEC' },
  { title: 'About JEC', path: '/About-JEC' },
  { title: 'Students Testimonials', path: '/jec/Students-Testimonials' },
  { title: 'Alumni', path: '/jec/Alumni' },
  { title: 'Human Network', path: '/jec/network' },
  { title: 'Anti-Ragging Committee', path: '/jec/Anti-Ragging-Committee' },
  { title: 'Institution Innovation Council', path: '/jec/Institution-Innovation-Council-JEC' },
  { title: 'Management', path: '/jec/Management' },
];

const admissionMenuItems = [
  { title: 'Documents Required', path: '/admission/Documents-Required' },
  { title: 'Courses Offered', path: '/admission/Courses-Offered' },
  { title: 'Fee Structure', path: '/admission/Fee-Structure' },
  { title: 'Mandatory Disclosure', path: '/admission/Mandatory-Disclosure' },
  { title: 'Financial Aids & Bank Loans', path: '/admission/Financial-Aids-Bank-Loans' },
  { title: 'REAP-2025', path: '/admission/REAP-2025' }, 
  { title: 'Admission Open 2025', path: '/admission/btech-admissions' },
  { title: 'Karma Courses @JEC', path: '/admission/Karma-Courses-JEC' },
  { title: 'Admission Procedure', path: '/admission/Admission-Procedure' },
];

// --- NEW: Departments Menu Data (Matches the image uploaded) ---
const departmentMenuItems = [
  { title: 'Computer Science & Engineering (AI)', path: '/JEC-engineering/Computer-Science-Engineering-AI' },
  { title: 'Civil Engineering', path: '/JEC-engineering/Civil-Engineering' },
  { title: 'Information Technology', path: '/JEC-engineering/Information-Technology' },
  { title: 'Applied Sciences & Humanities', path: '/JEC-engineering/Applied-Sciences-Humanities' },
  { title: 'MOOCS: NPTEL SWAYAM', path: '/JEC-engineering/MOOCS-NPTEL-SWAYAM' },
  { title: 'Computer Science Engineering', path: '/JEC-engineering/Computer-Science-Engineering' },
  { title: 'Electronics & Communication', path: '/JEC-engineering/Electronics-Communication-Engineering' },
  { title: 'Mechanical Engineering', path: '/JEC-engineering/Mechanical-Engineering' },
  { title: 'Centre Of Excellence (COE)', path: '/JEC-engineering/Centre-Of-Excellence-COE' },
  { title: 'JEC Research Cell', path: '/JEC-engineering/JEC-Research-Cell' },
  { title: 'Engineering @ JEC', path: '/JEC-engineering/Engineering-JEC' },
  { title: 'Electrical Engineering', path: '/JEC-engineering/Electrical-Engineering' },
];

const societyMenuItems = [
  { title: 'Foundation for Better Tomorrow', path: '/Our-Society/Foundation-for-Better-Tomorrow' },
  { title: 'Agrasen College', path: '/Our-Society/Other-Institutes-Agrasen-College' },
  { title: 'Jaipur College of Education & Science', path: '/Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science' },
  { title: 'Key Teams & Functions', path: '/Our-Society/Key-Teams-Functions' },
];

const infraMenuItems = [
  { title: 'Convenience and Safety', path: '/Infrastructure/Convenience-and-Safety' },
  { title: 'Learning By Doing', path: '/Infrastructure/Learning-By-Doing' },
  { title: 'Prepare and Present', path: '/Infrastructure/Prepare-and-Present' },
  { title: 'Refuel and Relax', path: '/Infrastructure/Refuel-and-Relax' },
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