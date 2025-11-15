// src/components/NavDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({ title, items, baseLink = "#!" }) {
  // Helper to stop click if the link is dead
  const handleClick = (e) => {
    if (baseLink === "#!") {
      e.preventDefault();
    }
  };

  return (
    <div className="nav-item has-dropdown">
      {/* Main Link with click handler */}
      <Link to={baseLink} className="nav-link" onClick={handleClick}>
        {title}
        <i className="fas fa-chevron-down dropdown-arrow"></i>
      </Link>
      
      {/* Dropdown Menu */}
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