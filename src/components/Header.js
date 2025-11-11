// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <nav>
          <a href="#students">Students</a>
          <a href="#alumni">Alumni</a>
          <a href="#parents">Parents</a>
          <a href="#contact">Contact Us</a>
          <a href="#about">About Us</a>
          <button className="apply-btn">Apply Now</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;