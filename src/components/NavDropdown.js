// src/components/NavDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({ title, items, baseLink = "#!" }) {
  return (
    <div className="nav-item has-dropdown">
      {/* This is the main link (e.g., "Admission") */}
      <Link to={baseLink} className="nav-link">
        {title}
        <i className="fas fa-chevron-down dropdown-arrow"></i>
      </Link>
      
      {/* This is the hidden 3x3 grid */}
      <div className="dropdown-menu">
        <div className="dropdown-grid">
          {items.map((item, index) => (
            <Link key={index} to={item.path} className="dropdown-item">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;