// src/components/VirtualTour.js
import React from 'react';
import '../styles/VirtualTour.css';

function VirtualTour() {
  return (
    <section className="take-a-tour">
      <div className="take-a-tour-content">
        <h2 className="take-a-tour-title">JEC 360° Virtual Campus Tour</h2>
        <p className="take-a-tour-subtitle">Experience our vibrant campus from anywhere in the world with our immersive virtual tour.</p>
        <a href="#tour-section" className="tour-btn">Start Virtual Tour</a>
      </div>
    </section>
  );
}

export default VirtualTour;