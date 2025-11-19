// src/components/NavDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({ title, items, baseLink = "#!", align = "left" }) {
  
  const handleClick = (e) => {
    if (baseLink === "#!") {
      e.preventDefault();
    }
  };

  return (
    <div className="menu-item has-dropdown">
      <Link to={baseLink} className="menu-link" onClick={handleClick}>
        {title}
        <i className="fas fa-chevron-down menu-arrow-icon"></i>
      </Link>
      
      <div className={`submenu-container ${align === 'right' ? 'align-right' : align === 'center' ? 'align-center' : ''}`}>
        <div className="submenu-grid">
          {items.map((item, index) => (
            <Link key={index} to={item.path} className="submenu-link">
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;