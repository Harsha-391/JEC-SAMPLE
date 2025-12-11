// src/components/Subheader.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

// ... (Keep your existing menu items arrays: jecMenuItems, admissionMenuItems, etc. unchanged) ...
const jecMenuItems = [
  { title: 'JEC FAQ', path: '/jec/JEC-FAQ' },
  { title: 'Employment @JEC', path: '/jec/Employment-JEC' },
  { title: 'About JEC', path: '/jec/About-JEC' },
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

const campusLifeItems = [
  { title: 'Image Gallery', path: '/Gallery' },
  { title: 'JEC: Vibrant India', path: '/campus-life/jec-vibrant-india' },
  { title: 'Committees Zone', path: '/campus-life/committees-zone' },
  { title: 'Video Gallery', path: '/campus-life/video-gallery' },
  { title: 'Engineering Projects', path: '/campus-life/engineering-projects' },
  { title: 'Academic Achievers', path: '/campus-life/academic-achievers' },
  { title: 'Student Mental Health & Wellbeing', path: '/campus-life/mental-health' },
  { title: 'JEC Students Corner', path: '/campus-life/students-corner' },
  { title: 'Games and Sports', path: '/campus-life/games-and-sports' },
  { title: 'Guts n Glory', path: '/campus-life/guts-n-glory' },
];

function Subheader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track strictly ONE open menu

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close all dropdowns when toggling main menu
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (title) => {
    // If clicking the one already open -> Close it (set to null)
    // If clicking a new one -> Open it (set to title)
    setActiveDropdown(prev => prev === title ? null : title);
  };

  return (
    <div className="main-header-section">
      <div className="main-header-container max-width-container">
        
        <Link to="/" className="brand-logo-link" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Jaipur Engineering College Logo" />
        </Link>

        {/* 3-Dots Mobile Button */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-ellipsis-v"}></i>
        </button>

        <nav className={`main-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="menu-link" onClick={closeMenu}>Home</Link>
          
          <NavDropdown 
            title="JEC" 
            items={jecMenuItems} 
            baseLink="/#!" 
            isOpen={activeDropdown === 'JEC'}
            onToggle={() => handleDropdownToggle('JEC')}
            closeMenu={closeMenu} 
          />
          
          <NavDropdown 
            title="Admission" 
            items={admissionMenuItems} 
            baseLink="/#!" 
            isOpen={activeDropdown === 'Admission'}
            onToggle={() => handleDropdownToggle('Admission')}
            closeMenu={closeMenu} 
          />

          <Link to="/placement" className="menu-link" onClick={closeMenu}>Placement</Link>
          
          <NavDropdown 
            title="Departments" 
            items={departmentMenuItems} 
            baseLink="/#!"
            align="center"
            isOpen={activeDropdown === 'Departments'}
            onToggle={() => handleDropdownToggle('Departments')}
            closeMenu={closeMenu}
          />

          <NavDropdown 
            title="Infrastructure" 
            items={infraMenuItems} 
            baseLink="/#!" 
            align="center"
            isOpen={activeDropdown === 'Infrastructure'}
            onToggle={() => handleDropdownToggle('Infrastructure')}
            closeMenu={closeMenu} 
          />

          <NavDropdown 
            title="Campus Life" 
            items={campusLifeItems} 
            baseLink="/#!" 
            align="center"
            isOpen={activeDropdown === 'Campus Life'}
            onToggle={() => handleDropdownToggle('Campus Life')}
            closeMenu={closeMenu} 
          />

          <Link to="/blog" className="menu-link" onClick={closeMenu}>Blog</Link>

          <NavDropdown 
            title="Our Society" 
            items={societyMenuItems} 
            baseLink="/#!"
            align="right"
            isOpen={activeDropdown === 'Our Society'}
            onToggle={() => handleDropdownToggle('Our Society')}
            closeMenu={closeMenu}
          />

          <Link to="/contact-us" className="menu-link" onClick={closeMenu}>Contact Us</Link>
        </nav>

      </div>
    </div>
  );
}

export default Subheader;