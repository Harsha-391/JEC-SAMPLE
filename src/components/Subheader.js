import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navigation.css';

function Subheader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const toggleDropdown = (e, menuName) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === menuName ? null : menuName);
        }
    };

    return (
        <header className="jec-header">
            <div className="jec-container">

                <Link to="/" className="jec-logo-link">
                    <img src="https://jec-sample.vercel.app/images/logo.png" alt="JEC Logo" className="jec-logo-img" />
                </Link>

                <div className="jec-hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>

                <ul className={`jec-menu-list ${isMobileMenuOpen ? 'jec-active' : ''}`}>
                    <li className="jec-menu-item"><Link to="/" className="jec-nav-link">Home</Link></li>

                    {/* JEC DROPDOWN */}
                    <li className={`jec-menu-item ${activeDropdown === 'jec' ? 'jec-open' : ''}`}>
                        <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'jec')}>
                            JEC <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'jec' ? 'jec-show' : ''}`}>
                            <li><Link to="/jec/About-JEC" className="jec-dropdown-link">About JEC</Link></li>
                            <li><Link to="/jec/Employment-JEC" className="jec-dropdown-link">Employment @JEC</Link></li>
                            <li><Link to="/jec/Management" className="jec-dropdown-link">Management</Link></li>
                            <li><Link to="/jec/Institution-Innovation-Council-JEC" className="jec-dropdown-link">Institution Innovation Council</Link></li>
                            <li><Link to="/jec/Anti-Ragging-Committee" className="jec-dropdown-link">Anti-Ragging Committee</Link></li>
                            <li><Link to="/jec/network" className="jec-dropdown-link">Human Network</Link></li>
                            <li><Link to="/jec/Alumni" className="jec-dropdown-link">Alumni</Link></li>
                            <li><Link to="/jec/Students-Testimonials" className="jec-dropdown-link">Students Testimonials</Link></li>
                            <li><Link to="/jec/JEC-FAQ" className="jec-dropdown-link">JEC FAQ</Link></li>
                        </ul>
                    </li>

                    {/* ADMISSION DROPDOWN */}
                    <li className={`jec-menu-item ${activeDropdown === 'admission' ? 'jec-open' : ''}`}>
                        <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'admission')}>
                            Admission <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'admission' ? 'jec-show' : ''}`}>
                            <li><Link to="/admission/btech-admissions" className="jec-dropdown-link jec-highlight">Admission Open 2025</Link></li>
                            <li><Link to="/admission/Admission-Procedure" className="jec-dropdown-link">Admission Procedure</Link></li>
                            <li><Link to="/admission/Courses-Offered" className="jec-dropdown-link">Courses Offered</Link></li>
                            <li><Link to="/admission/Fee-Structure" className="jec-dropdown-link">Fee Structure</Link></li>
                            <li><Link to="/admission/Documents-Required" className="jec-dropdown-link">Documents Required</Link></li>
                            <li><Link to="/admission/REAP-2025" className="jec-dropdown-link">REAP-2025</Link></li>
                            <li><Link to="/admission/Financial-Aids-Bank-Loans" className="jec-dropdown-link">Financial Aids & Loans</Link></li>
                            <li><Link to="/admission/Mandatory-Disclosure" className="jec-dropdown-link">Mandatory Disclosure</Link></li>
                            <li><Link to="/admission/Karma-Courses-JEC" className="jec-dropdown-link">Karma Courses @JEC</Link></li>
                        </ul>
                    </li>

                    {/* DEPARTMENTS DROPDOWN */}
                    <li className={`jec-menu-item ${activeDropdown === 'dept' ? 'jec-open' : ''}`}>
                        <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'dept')}>
                            Departments <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'dept' ? 'jec-show' : ''}`}>
                            <li><Link to="/JEC-engineering/Computer-Science-Engineering-AI" className="jec-dropdown-link">Computer Science & Eng. (AI)</Link></li>
                            <li><Link to="/JEC-engineering/Computer-Science-Engineering" className="jec-dropdown-link">Computer Science Engineering</Link></li>
                            <li><Link to="/JEC-engineering/Information-Technology" className="jec-dropdown-link">Information Technology</Link></li>
                            <li><Link to="/JEC-engineering/Electronics-Communication-Engineering" className="jec-dropdown-link">Electronics & Communication</Link></li>
                            <li><Link to="/JEC-engineering/Civil-Engineering" className="jec-dropdown-link">Civil Engineering</Link></li>
                            <li><Link to="/JEC-engineering/Mechanical-Engineering" className="jec-dropdown-link">Mechanical Engineering</Link></li>
                            <li><Link to="/JEC-engineering/Electrical-Engineering" className="jec-dropdown-link">Electrical Engineering</Link></li>
                            <li><Link to="/JEC-engineering/Applied-Sciences-Humanities" className="jec-dropdown-link">Applied Sciences & Humanities</Link></li>
                            <li><Link to="/JEC-engineering/Centre-Of-Excellence-COE" className="jec-dropdown-link">Centre Of Excellence (COE)</Link></li>
                            <li><Link to="/JEC-engineering/JEC-Research-Cell" className="jec-dropdown-link">JEC Research Cell</Link></li>
                            <li><Link to="/JEC-engineering/Engineering-JEC" className="jec-dropdown-link">Engineering @ JEC</Link></li>
                            <li><Link to="/JEC-engineering/MOOCS-NPTEL-SWAYAM" className="jec-dropdown-link">MOOCS: NPTEL SWAYAM</Link></li>
                        </ul>
                    </li>

                    <li className="jec-menu-item"><Link to="/placement" className="jec-nav-link">Placement</Link></li>

                    {/* INFRASTRUCTURE DROPDOWN */}
                    <li className={`jec-menu-item ${activeDropdown === 'infra' ? 'jec-open' : ''}`}>
                        <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'infra')}>
                            Infrastructure <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className={`jec-dropdown jec-mega jec-cols-2 ${activeDropdown === 'infra' ? 'jec-show' : ''}`}>
                            <li><Link to="/Infrastructure/Learning-By-Doing" className="jec-dropdown-link">Learning By Doing</Link></li>
                            <li><Link to="/Infrastructure/Prepare-and-Present" className="jec-dropdown-link">Prepare and Present</Link></li>
                            <li><Link to="/Infrastructure/Refuel-and-Relax" className="jec-dropdown-link">Refuel and Relax</Link></li>
                            <li><Link to="/Infrastructure/Convenience-and-Safety" className="jec-dropdown-link">Convenience and Safety</Link></li>
                        </ul>
                    </li>

                    {/* CAMPUS LIFE DROPDOWN */}
                    <li className={`jec-menu-item ${activeDropdown === 'campus' ? 'jec-open' : ''}`}>
                        <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'campus')}>
                            Campus Life <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'campus' ? 'jec-show' : ''}`}>
                            <li><Link to="/campus-life/jec-vibrant-india" className="jec-dropdown-link">JEC: Vibrant India</Link></li>
                            <li><Link to="/campus-life/academic-achievers" className="jec-dropdown-link">Academic Achievers</Link></li>
                            <li><Link to="/campus-life/engineering-projects" className="jec-dropdown-link">Engineering Projects</Link></li>
                            <li><Link to="/campus-life/games-and-sports" className="jec-dropdown-link">Games and Sports</Link></li>
                            <li><Link to="/campus-life/guts-n-glory" className="jec-dropdown-link">Guts n Glory</Link></li>
                            <li><Link to="/campus-life/committees-zone" className="jec-dropdown-link">Committees Zone</Link></li>
                            <li><Link to="/campus-life/mental-health" className="jec-dropdown-link">Student Mental Health</Link></li>
                            <li><Link to="/campus-life/students-corner" className="jec-dropdown-link">JEC Students Corner</Link></li>
                            <li><Link to="/Gallery" className="jec-dropdown-link">Image Gallery</Link></li>
                            <li><Link to="/campus-life/video-gallery" className="jec-dropdown-link">Video Gallery</Link></li>
                        </ul>
                    </li>

                    <li className="jec-menu-item"><Link to="/blog" className="jec-nav-link">Blog</Link></li>

                    {/* SOCIETY DROPDOWN */}
                    <li className={`jec-menu-item ${activeDropdown === 'society' ? 'jec-open' : ''}`}>
                        <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'society')}>
                            Society <i className="fas fa-chevron-down"></i>
                        </a>
                        <ul className={`jec-dropdown jec-mega jec-cols-2 ${activeDropdown === 'society' ? 'jec-show' : ''}`}>
                            <li><Link to="/Our-Society/Foundation-for-Better-Tomorrow" className="jec-dropdown-link">Foundation for Better Tomorrow</Link></li>
                            <li><Link to="/Our-Society/Key-Teams-Functions" className="jec-dropdown-link">Key Teams & Functions</Link></li>
                            <li><Link to="/Our-Society/Other-Institutes-Agrasen-College" className="jec-dropdown-link">Agrasen College</Link></li>
                            <li><Link to="/Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science" className="jec-dropdown-link">Jaipur College of Ed & Sci</Link></li>
                        </ul>
                    </li>

                    <li className="jec-menu-item">
                        <Link to="/contact-us" className="jec-nav-link jec-btn-cta">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Subheader;