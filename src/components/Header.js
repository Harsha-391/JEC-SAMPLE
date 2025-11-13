// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK

function Header() {
  return (
    <header>
      <div className="header-content">
        <nav>
          <a href="#students">Students</a>
          <a href="#alumni">Alumni</a>
          <a href="#parents">Parents</a>
          <a href="#contact">Contact Us</a>

          {/* 2. CHANGE THIS LINE: */}
          <Link to="/about">About Us</Link>

          <button className="apply-btn">Apply Now</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;