// src/components/Highlights.js
import React from 'react';
import '../styles/Highlights.css';

function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-content">
        <div className="highlight-cards">
          <div className="highlight-card">
            <div className="card-graphic-top-blue"></div>
            <h3>360° Flexible Learning</h3>
            <p>Explore multiple disciplines with our flexible learning framework, allowing you to focus on your
              chosen branch of engineering.</p>
            <a href="#" className="card-arrow">→</a>
          </div>
          <div className="highlight-card">
            <div className="card-graphic-top-yellow"></div>
            <h3>Proactive Placement Cell</h3>
            <p>Benefit from our proactive placement cell, which ensures holistic student development and career
              success.</p>
            <a href="#" className="card-arrow">→</a>
          </div>
          <div className="highlight-card">
            <div className="card-graphic-top-pink"></div>
            <h3>360° Virtual Campus Tour</h3>
            <p>Experience our vibrant campus life from anywhere with the JEC 360° Virtual Campus Tour.</p>
            <a href="#" className="card-arrow">→</a>
          </div>
        </div>
        <div className="carousel-nav">
          <span className="nav-dot active"></span>
          <span className="nav-dot"></span>
        </div>
      </div>
    </section>
  );
}

export default Highlights;