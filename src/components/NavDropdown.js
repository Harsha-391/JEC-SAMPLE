// src/components/NavDropdown.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavDropdown({ title, items, baseLink = "#", align = "left", closeMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent bubbling issues
    setIsOpen(!isOpen);
  };

  // Close both this dropdown and the main menu
  const handleItemClick = () => {
    setIsOpen(false);
    if (closeMenu) closeMenu();
  };

  return (
    <div 
      className={`menu-item has-dropdown ${isOpen ? 'dropdown-active' : ''}`}
      // On desktop, we still want hover, but on mobile we rely on click.
      // We can keep onMouseEnter/Leave for desktop feel if needed, 
      // but usually CSS :hover handles desktop.
    >
      <Link 
        to={baseLink} 
        className="menu-link" 
        onClick={toggleDropdown}
      >
        {title}
        {/* Rotate icon based on state */}
        <i className={`fas fa-chevron-down menu-arrow-icon ${isOpen ? 'rotate' : ''}`}></i>
      </Link>
      
      {/* On Mobile: visible only if isOpen is true. 
         On Desktop: visible on hover (handled via CSS usually, but we can add a helper class).
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