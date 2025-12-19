// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <div className="college-side-bar">
      {/* Added specific classes: helpline, brochure, admissions, events, whatsapp */}
      <a href="#" className="helpline">
        <i className="fas fa-phone"></i><span>Helpline</span>
      </a>
      <a href="#" className="brochure">
        <i className="fas fa-book-open"></i><span>Brochure</span>
      </a>
      <a href="#" className="admissions">
        <i className="fas fa-user-graduate"></i><span>Admissions</span>
      </a>
      <a href="#" className="events">
        <i className="fas fa-calendar-alt"></i><span>Events</span>
      </a>
      <a href="#" className="whatsapp">
        <i className="fab fa-whatsapp"></i><span>WhatsApp</span>
      </a>
    </div>
  );
}

export default Sidebar;