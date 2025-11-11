// src/components/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="college-side-bar">
      <a href="#"><i className="fas fa-phone"></i><span>Helpline</span></a>
      <a href="#"><i className="fas fa-book-open"></i><span>Brochure</span></a>
      <a href="#"><i className="fas fa-user-graduate"></i><span>Admissions</span></a>
      <a href="#"><i className="fas fa-calendar-alt"></i><span>Events</span></a>
      <a href="#"><i className="fab fa-whatsapp"></i><span>WhatsApp</span></a>
    </div>
  );
}

export default Sidebar;