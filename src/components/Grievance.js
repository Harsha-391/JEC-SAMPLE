// src/components/Grievance.js
import React from 'react';

function Grievance() {
  return (
    <section className="campus-buzz">
      <div className="campus-buzz-content">
        <h2 className="campus-buzz-title">Grievance Redressal</h2>
        <p className="campus-buzz-subtitle">We are committed to addressing your concerns promptly and fairly. Access our resources to voice your grievances and connect with our support team.</p>
        <div className="buzz-items">
          <div className="buzz-item" data-buzz="form">
            <img src="https://picsum.photos/100/100?random=1" alt="Grievance Form Icon" className="buzz-icon" />
            <h3>Grievance Form</h3>
            <p>Submit your concerns through our online grievance redressal form.</p>
            <a href="#" className="buzz-link" aria-label="Access Grievance Redressal Form">→</a>
          </div>
          <div className="buzz-item" data-buzz="committee">
            <img src="https://picsum.photos/100/100?random=2" alt="Grievance Committee Icon" className="buzz-icon" />
            <h3>Grievance Committee</h3>
            <p>Meet our dedicated team handling student and staff grievances.</p>
            <a href="#" className="buzz-link" aria-label="Learn about Grievance Committee">→</a>
          </div>
          <div className="buzz-item" data-buzz="support">
            <img src="https://picsum.photos/100/100?random=3" alt="Support Services Icon" className="buzz-icon" />
            <h3>Support Services</h3>
            <p>Contact our support team for guidance and resolution.</p>
            <a href="#" className="buzz-link" aria-label="Contact Support Services">→</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grievance;