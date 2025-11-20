import React, { useState } from 'react';
import './App.css'; // Ensure this points to your CSS file

const Header = () => {
  // This line creates the "switch" for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the menu on/off
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header-section">
      <div className="main-header-container">
        
        {/* 1. LOGO ON THE LEFT */}
        <a href="/" className="brand-logo-link">
          {/* Replace with your actual Image tag if you have one */}
          <img src="/images/logo.png" alt="JEC Logo" /> 
          <div className="brand-text">
            <span>JAIPUR</span>
            <span>ENGINEERING COLLEGE</span>
          </div>
        </a>

        {/* 2. MOBILE TRIPLE DOT BUTTON */}
        <button className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMobileMenuOpen ? '✕' : '☰'} {/* Changes X to 3-bars */}
        </button>

        {/* 3. NAVIGATION MENU (Logic adds 'active' class) */}
        <nav className={`main-nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          
          <div className="menu-item">
            <a href="/" className="menu-link">Home</a>
          </div>
          
          <div className="menu-item">
            <a href="/about" className="menu-link">About Us</a>
          </div>

          <div className="menu-item">
            <a href="/courses" className="menu-link">Courses</a>
          </div>

          <div className="menu-item">
            <a href="/admissions" className="menu-link">Admissions</a>
          </div>
          
          {/* Contact Us is now safe from wrapping! */}
          <div className="menu-item">
            <a href="/contact" className="menu-link">Contact Us</a>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Header;