import React from 'react';
import { Link } from 'react-router-dom';

// 1. Add 'align' to props (default is 'left')
function NavDropdown({ title, items, baseLink = "#!", align = "left" }) {
  
  const handleClick = (e) => {
    if (baseLink === "#!") {
      e.preventDefault();
    }
  };

  return (
    <div className="nav-item has-dropdown">
      <Link to={baseLink} className="nav-link" onClick={handleClick}>
        {title}
        <i className="fas fa-chevron-down dropdown-arrow"></i>
      </Link>
      
      {/* 2. Apply the alignment class dynamically */}
      <div className={`dropdown-menu ${align === 'right' ? 'align-right' : ''}`}>
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