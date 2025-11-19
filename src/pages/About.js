// src/pages/About.js
import React from 'react';

function About() {
  return (
    // This new wrapper class will scope all the new styles
    <div className="about-page-new">

      <section className="hero">
        <div className="hero-content">
          <h1>About JEC: Engineering Excellence</h1>
          <p>Committed to creating the next generation of technologically superior and ethically strong professionals.</p>
          <div className="hero-underline"></div>
        </div>
      </section>

      <section className="milestones">
        <div className="max-width-container milestone-grid">
          <div className="milestone-item">
            <h3>2000</h3>
            <p>ESTABLISHED YEAR</p>
          </div>
          <div className="milestone-item">
            <h3>94%+</h3>
            <p>PLACEMENT RATE</p>
          </div>
          <div className="milestone-item">
            <h3>₹69 Lakh</h3>
            <p>HIGHEST PACKAGE</p>
          </div>
          <div className="milestone-item">
            <h3>10,000+</h3>
            <p>GLOBAL ALUMNI</p>
          </div>
        </div>
      </section>

      <section className="mission-banner">
        <div className="max-width-container">
          <h2>Vision: To make students technologically superior & ethically strong.</h2>
          <p>We are a forward-looking, diverse community devoted to excellence, bonding with values, and a commitment to respect each person's individual needs and talents.</p>
        </div>
      </section>

      <section className="introduction" id="who-we-are">
        <div className="max-width-container">
          <h2>The JEC Experience: Mind, Heart, and Innovation</h2>
          <div className="intro-content-wrapper">
            <p>Intellectual rigor, social upliftment, and self-reflection are knitted together in every facet of the JEC Experience. JEC is a leading engineering and technology institute where people and ideas come together in new ways, igniting sparks that fuel new ventures and foster intellectual breakthroughs.</p>
            <p>Since its inception in 2000, Jaipur Engineering College (JEC) has consistently enabled students to carve a niche for themselves and develop a strong personality. The Institute is committed to advancing knowledge and educating students in various branches of engineering that will best serve the nation and the world in the 21st century.</p>
            <p>Our community is driven by a shared purpose: to make a better world through education, research, and innovation. Our holistic approach, combined with state-of-the-art infrastructure on the serene outskirts of Jaipur, defines JEC as a unique force for positive transformation.</p>
            
            {/* This image MUST exist at public/images/campus-intro.jpg */}
            <img src="../images/campus-intro.jpeg" alt="JEC Campus Overview" className="intro-image" />
          </div>
        </div>
      </section>

      <section className="card-section alt-background" id="vmc">
        <div className="max-width-container">
          <h2>Core Values: Our Driving Principles</h2>
          <div className="card-grid">
            <div className="core-card">
              <i className="fas fa-crosshairs"></i>
              <h3>Our Mission</h3>
              <ul>
                <li>To provide market-driven knowledge of Core Engineering and Emerging Areas.</li>
                <li>To extend the academic and social environment for achieving excellence in innovation.</li>
                <li>To present a platform for Industry Institute Interaction (IIC) for entrepreneurship.</li>
                <li>To provide an eco-system for high-quality research, patent, and publication.</li>
                <li>To integrate the teaching-learning process with human values and professional ethics.</li>
              </ul>
            </div>
            <div className="core-card" style={{ borderTopColor: 'var(--logo-red)' }}>
              <i className="fas fa-handshake"></i>
              <h3>Our Commitments</h3>
              <ul>
                <li>Academic integrity and strict accountability.</li>
                <li>Respect and tolerance for the views of every individual.</li>
                <li>Attention to issues of national relevance and global concern.</li>
                <li>Appreciation of intellectual excellence and creativity.</li>
                <li>Creation of State-of-the-art infrastructure, facilities, and services.</li>
                <li>Quality placements and finest interaction with industry and alumni.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="card-section" id="credibility">
        <div className="max-width-container">
          <h2>Academic Accreditation & Partnerships</h2>
          <div className="card-grid">
            <div className="core-card">
              <i className="fas fa-stamp"></i>
              <h3>AICTE Approved</h3>
              <p>The institute is officially approved by the All India Council for Technical Education (AICTE), New Delhi, ensuring compliance with apex body standards and norms.</p>
            </div>
            <div className="core-card" style={{ borderTopColor: 'var(--logo-blue)' }}>
              <i className="fas fa-university"></i>
              <h3>Affiliated to RTU</h3>
              <p>Affiliated with the Rajasthan Technical University (RTU), Kota, and actively associated with quality improvement initiatives under the TEQIP III program.</p>
            </div>
            <div className="core-card" style={{ borderTopColor: 'var(--logo-red)' }}>
              <i className="fas fa-code"></i>
              <h3>IIT Remote Center</h3>
              <p>JEC is Rajasthan’s <strong>first remote center of IIT, Bombay & IIT, Kharagpur</strong>, and hosts a recognized NPTEL Local Chapter for advanced learning and certifications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features card-section alt-background" id="features">
        <div className="max-width-container">
          <h2>Salient Features: The JEC Advantage</h2>
          <div className="features-list">
            <div className="feature-item"><p>Well qualified and experienced faculty members.</p></div>
            <div className="feature-item"><p>High-speed Wi-Fi enabled campus with <strong>110 mbps leased line</strong>.</p></div>
            <div className="feature-item"><p>Library with <strong>60,000+ books</strong> and access to online journals (IEEE, ASME, J-Gate).</p></div>
            <div className="feature-item"><p>Separate air-cooled hostels for boys & girls, with attached bathroom.</p></div>
            <div className="feature-item"><p>Excellent placements, including the <strong>highest package in Rajasthan of Rs. 69 Lakh</strong>.</p></div>
            <div className="feature-item"><p>Rajasthan’s <strong>first nodal centre of NITTTR, Chandigarh</strong>.</p></div>
            <div className="feature-item"><p>Campus Connect Programmes with MNCs like <strong>Infosys, CAD Desk & Oracle</strong>.</p></div>
            <div className="feature-item"><p>Strong global alumni network exceeding <strong>10,000+ members</strong>.</p></div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;