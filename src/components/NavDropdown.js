// src/components/NavDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({ title, items, baseLink = "#", align = "left", closeMenu, isOpen, onToggle }) {
  
  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggle) onToggle();
  };

  const handleItemClick = () => {
    if (closeMenu) closeMenu();
  };

  return (
    <div className={`menu-item has-dropdown ${isOpen ? 'dropdown-active' : ''}`}>
      {/* Clicking this toggles the view via 'onToggle'.
         The parent determines if it's open or not.
      */}
      <Link 
        to={baseLink} 
        className="menu-link" 
        onClick={handleToggle}
      >
        {title}
        {/* Icon rotates based on isOpen prop */}
        <i className={`fas fa-chevron-down menu-arrow-icon ${isOpen ? 'rotate' : ''}`}></i>
      </Link>
      
      {/* The class 'show' is only added if isOpen is true.
         CSS then sets display: block !important for this class.
      */}
      <div className={`submenu-container ${align === 'right' ? 'align-right' : align === 'center' ? 'align-center' : ''} ${isOpen ? 'show' : ''}`}>
        <div className="submenu-grid">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="submenu-link"
              onClick={handleItemClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavDropdown;