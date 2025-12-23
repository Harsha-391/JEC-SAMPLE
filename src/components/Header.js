import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Header() {
    return (
        <div className="jec-top-bar">
            <div className="jec-top-container">

                {/* LEFT SIDE: 2-Line Contact Info */}
                <div className="jec-top-left">
                    <div className="jec-contact-column">
                        <a href="tel:+918875071333">
                            <i className="fas fa-phone-alt"></i> +91-88750 71333 (30 lines)
                        </a>
                        <a href="mailto:admission@jeckukas.org.in">
                            <i className="fas fa-envelope"></i> admission@jeckukas.org.in
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE: Action Links */}
                <div className="jec-top-right">
                    <Link to="/admission-enquiry">
                        <i className="fas fa-edit"></i> Admission Enquiry Open 2025
                    </Link>
                    <Link to="/admissions">
                        <i className="fas fa-user-graduate"></i> Apply for Admission
                    </Link>
                    <a href="#!">
                        <i className="fas fa-map-marked-alt"></i> JEC 360 Virtual Tour
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Header;