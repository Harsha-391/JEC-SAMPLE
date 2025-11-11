// src/components/CampusLife.js
import React from 'react';

function CampusLife() {
  return (
    <section className="campus-life">
      <div className="campus-life-content">
        <h2 className="campus-life-title">Campus Life at JEC</h2>
        <p className="campus-life-desc">JEC offers a vibrant campus experience with cultural events, sports activities,
          technical fests, and entrepreneurship initiatives.</p>
        <div className="campus-gallery">
          <div className="gallery-item large">
            {/* Corrected image paths */}
            <img src="/images/garv-chaplot-iELNkSM5kT8-unsplash.jpg" alt="Life at JEC" />
            <div className="gallery-overlay">
              <h3>LIFE AT JEC</h3>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/images/muhammad-rifki-adam-ReCR14VSZ5M-unsplash.jpg" alt="Library" />
          </div>
          <div className="gallery-item">
            <img src="/images/tobias-mgfSW2F7nPM-unsplash.jpg" alt="Students studying" />
          </div>
          <div className="gallery-item">
            <img src="/images/img.avif" alt="Group of students" />
          </div>
          <div className="gallery-item">
            <img src="/images/logo.png" alt="Girl walking on campus" />
            <div className="play-button">▶</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CampusLife;