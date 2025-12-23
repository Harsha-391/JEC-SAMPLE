/* src/components/Footer.js */
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="brand-line"></div>

            <div className="association-bar">
                <div className="association-container">
                    <span className="association-label">JEC Activities Associated With</span>
                    <span className="assoc-badge">AICTE Approved</span>
                    <span className="assoc-badge">RTU Kota Affiliated</span>
                    <span className="assoc-badge">NBA Accredited</span>
                </div>
            </div>

            <div className="footer-container">
                {/* Brand and About Section */}
                <div>
                    <h2 className="brand-name">Jaipur Engineering College</h2>
                    <div className="about-text">
                        JEC is a place of fertile interactions, a best college where people and ideas come together in new ways.
                        Illuminating turnarounds, igniting sparks that fuel new ventures, and fostering intellectual breakthroughs.
                        We are committed to advance knowledge and educate students in engineering to serve the nation in the 21st century.
                    </div>
                    <div className="social-links">
                        <a href="https://facebook.com" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://linkedin.com" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://instagram.com" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://youtube.com" className="social-btn" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                {/* Academic & Org Links */}
                <div>
                    <h3 className="widget-title">Academic & Org</h3>
                    <ul className="footer-list">
                        <li><Link to="/admission/Courses-Offered">Courses Offered</Link></li>
                        <li><Link to="/jec/About-JEC">Our College</Link></li>
                        <li><Link to="/Our-Society/Key-Teams-Functions">Our Society</Link></li>
                        <li><Link to="/jec/Alumni">JEC: Proud Alumni</Link></li>
                        <li><Link to="/jec/Employment-JEC">Career at JEC</Link></li>
                        <li><Link to="/blog">Blog & News</Link></li>
                        <li><Link to="/campus-life/engineering-projects">Engineering Projects</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="widget-title">Quick Links</h3>
                    <ul className="footer-list">
                        <li><Link to="/admission/btech-admissions" style={{ color: 'var(--jec-gold)', fontWeight: '600' }}>Apply Now</Link></li>
                        <li><Link to="/Gallery">Campus Life</Link></li>
                        <li><Link to="/Infrastructure/Learning-By-Doing">Infrastructure</Link></li>
                        <li><Link to="/placement">Training & Placements</Link></li>
                        <li><Link to="/virtual-tour">JEC 360 Virtual Campus</Link></li>
                        <li><Link to="/grievance">Grievance Redressal</Link></li>
                        <li><Link to="/terms">Terms & Conditions</Link></li>
                    </ul>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="widget-title">Contact Us</h3>

                    <div className="contact-card">
                        <div className="contact-header">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Campus Address</span>
                        </div>
                        <div className="contact-row">
                            SP-43, RIICO Industrial Area, Delhi Road,<br />Kukas, Jaipur - 302028, India
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="dept-grid">
                            <div className="contact-row">
                                <span className="dept-title">Admission Cell</span>
                                <a href="tel:+918875071333" className="contact-link"><i className="fas fa-phone-alt"></i> +91-88750 71333</a>
                                <a href="mailto:admission@jeckukas.org.in" className="contact-link">admission@jeckukas.org.in</a>
                            </div>
                            <div className="contact-row">
                                <span className="dept-title">General Enquiry</span>
                                <a href="tel:+919694098821" className="contact-link"><i className="fas fa-phone-alt"></i> +91-96940 98821</a>
                                <a href="mailto:info@jeckukas.org.in" className="contact-link">info@jeckukas.org.in</a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="dept-grid">
                            <div className="contact-row">
                                <span className="dept-title">Training & Placement</span>
                                <a href="tel:+918058799027" className="contact-link">+91-80587 99027</a>
                                <a href="mailto:trainingandplacement@jeckukas.org.in" className="contact-link">Email T&P Cell</a>
                            </div>
                            <div className="contact-row">
                                <span className="dept-title">Exam & Verification</span>
                                <a href="tel:+918058799002" className="contact-link">+91-80587 99002</a>
                                <a href="mailto:examinations.jec@gmail.com" className="contact-link">Email Exam Cell</a>
                            </div>
                            <div className="contact-row" style={{ gridColumn: 'span 2', borderTop: '1px solid var(--footer-border)', paddingTop: '8px', marginTop: '5px' }}>
                                <span className="dept-title">Director's Office</span>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                    <a href="tel:+918058799013" className="contact-link">+91-80587 99013</a>
                                    <a href="mailto:principal@jeckukas.org.in" className="contact-link">principal@jeckukas.org.in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-content">
                    <div className="copyright">
                        &copy; 2025 Jaipur Engineering College. All Rights Reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/privacy-policy" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy Policy</Link>
                        <Link to="/disclaimer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.85rem' }}>Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;