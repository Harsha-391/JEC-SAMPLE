// src/pages/Placements.js
import React from 'react';

function Placements() {
  return (
    <div className="placements-page">
      {/* 1. The Banner Image */}
      <img
        src="/images/placement-Glory.png"
        alt="JEC Placements Glory"
        className="placements-banner"
      />

      <div className="placements-content">
        <h2 className="placements-title">Our Placement Stars</h2>
        <p className="placements-subtitle">
          Hear from our students who have secured their future with top companies.
        </p>

        {/* 2. Testimonials Section */}
        <div className="testimonial-grid">
          
          {/* Card for Naman Singh */}
          <div className="testimonial-card">
            <img
              src="/images/naman singh.png"
              alt="Naman Singh, Placed Student"
              className="testimonial-image"
            />
            <div className="testimonial-text">
              <p className="testimonial-quote">
                "JEC provided me with the best opportunities. The placement cell was incredibly supportive and helped me land my dream job."
              </p>
              <h3 className="testimonial-name">Naman Singh</h3>
              <p className="testimonial-company">Placed at Wipro</p>
            </div>
          </div>

          {/* Card for Sundaran */}
          <div className="testimonial-card">
            <img
              src="/images/sundaran.png"
              alt="Sundaran, Placed Student"
              className="testimonial-image"
            />
            <div className="testimonial-text">
              <p className="testimonial-quote">
                "The faculty and curriculum at JEC are top-notch. I felt fully prepared for the industry, and I'm grateful for the placement support."
              </p>
              <h3 className="testimonial-name">Sundaran</h3>
              <p className="testimonial-company">Placed at Infosys</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Placements;