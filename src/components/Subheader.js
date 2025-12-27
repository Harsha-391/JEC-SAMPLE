import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navigation.css';

// Full list of menu items for the search logic
const menuData = [
    { name: "Home", link: "/" },
    { name: "About JEC", link: "/jec/About-JEC" },
    { name: "Employment @ JEC", link: "/jec/Employment-JEC" },
    { name: "Management", link: "/jec/Management" },
    { name: "Institution Innovation Council", link: "/jec/Institution-Innovation-Council-JEC" },
    { name: "Anti-Ragging Committee", link: "/jec/Anti-Ragging-Committee" },
    { name: "Human Network", link: "/jec/network" },
    { name: "Alumni", link: "/jec/Alumni" },
    { name: "Students Testimonials", link: "/jec/Students-Testimonials" },
    { name: "JEC FAQ", link: "/jec/JEC-FAQ" },
    { name: "Admission Open 2025", link: "/admission/btech-admissions" },
    { name: "Admission Procedure", link: "/admission/Admission-Procedure" },
    { name: "Courses Offered", link: "/admission/Courses-Offered" },
    { name: "Fee Structure", link: "/admission/Fee-Structure" },
    { name: "Documents Required", link: "/admission/Documents-Required" },
    { name: "REAP-2025", link: "/admission/REAP-2025" },
    { name: "Financial Aids & Loans", link: "/admission/Financial-Aids-Bank-Loans" },
    { name: "Mandatory Disclosure", link: "/admission/Mandatory-Disclosure" },
    { name: "Karma Courses @ JEC", link: "/admission/Karma-Courses-JEC" },
    { name: "Computer Science & Eng. (AI)", link: "/JEC-engineering/Computer-Science-Engineering-AI" },
    { name: "Computer Science Engineering", link: "/JEC-engineering/Computer-Science-Engineering" },
    { name: "Information Technology", link: "/JEC-engineering/Information-Technology" },
    { name: "Electronics & Communication", link: "/JEC-engineering/Electronics-Communication-Engineering" },
    { name: "Civil Engineering", link: "/JEC-engineering/Civil-Engineering" },
    { name: "Mechanical Engineering", link: "/JEC-engineering/Mechanical-Engineering" },
    { name: "Electrical Engineering", link: "/JEC-engineering/Electrical-Engineering" },
    { name: "Applied Sciences & Humanities", link: "/JEC-engineering/Applied-Sciences-Humanities" },
    { name: "Centre Of Excellence (COE)", link: "/JEC-engineering/Centre-Of-Excellence-COE" },
    { name: "JEC Research Cell", link: "/JEC-engineering/JEC-Research-Cell" },
    { name: "Engineering @ JEC", link: "/JEC-engineering/Engineering-JEC" },
    { name: "MOOCS: NPTEL SWAYAM", link: "/JEC-engineering/MOOCS-NPTEL-SWAYAM" },
    { name: "Placement", link: "/placement" },
    { name: "Learning By Doing", link: "/Infrastructure/Learning-By-Doing" },
    { name: "Prepare and Present", link: "/Infrastructure/Prepare-and-Present" },
    { name: "Refuel and Relax", link: "/Infrastructure/Refuel-and-Relax" },
    { name: "Convenience and Safety", link: "/Infrastructure/Convenience-and-Safety" },
    { name: "JEC: Vibrant India", link: "/campus-life/jec-vibrant-india" },
    { name: "Academic Achievers", link: "/campus-life/academic-achievers" },
    { name: "Engineering Projects", link: "/campus-life/engineering-projects" },
    { name: "Games and Sports", link: "/campus-life/games-and-sports" },
    { name: "Guts n Glory", link: "/campus-life/guts-n-glory" },
    { name: "Committees Zone", link: "/campus-life/committees-zone" },
    { name: "Student Mental Health", link: "/campus-life/mental-health" },
    { name: "JEC Students Corner", link: "/campus-life/students-corner" },
    { name: "Image Gallery", link: "/Gallery" },
    { name: "Video Gallery", link: "/campus-life/video-gallery" },
    { name: "Blog", link: "/blog" },
    { name: "Foundation for Better Tomorrow", link: "/Our-Society/Foundation-for-Better-Tomorrow" },
    { name: "Key Teams & Functions", link: "/Our-Society/Key-Teams-Functions" },
    { name: "Agrasen College", link: "/Our-Society/Other-Institutes-Agrasen-College" },
    { name: "Jaipur College of Ed & Sci", link: "/Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science" },
    { name: "Contact Us", link: "/contact-us" }
];

function Subheader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle for desktop search
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef(null);

    // Filter logic
    useEffect(() => {
        if (searchQuery.length > 1) {
            const filtered = menuData.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filtered);
            setShowSuggestions(true);
        } else {
            setSearchResults([]);
            setShowSuggestions(false);
        }
    }, [searchQuery]);

    // Close on navigation
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setShowSuggestions(false);
        setIsSearchOpen(false);
    }, [location]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSuggestions(false);
                if (searchQuery === '') setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [searchQuery]);

    const toggleDropdown = (e, menuName) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === menuName ? null : menuName);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchResults.length > 0) {
            navigate(searchResults[0].link);
            setSearchQuery('');
            setIsSearchOpen(false);
        }
    };

    return (
        <div className="jec-nav-wrapper">
            <header className="jec-header">
                <div className="jec-container">

                    {/* LOGO */}
                    <Link to="/" className="jec-logo-link">
                        <img src="https://jec-sample.vercel.app/images/logo.png" alt="Logo" className="jec-logo-img" />
                    </Link>

                    {/* HAMBURGER */}
                    <div className="jec-hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>

                    {/* MENU LIST */}
                    <ul className={`jec-menu-list ${isMobileMenuOpen ? 'jec-active' : ''}`}>

                        {/* MOBILE SEARCH BAR */}
                      

                        <li className="jec-menu-item"><Link to="/" className="jec-nav-link">Home</Link></li>

                        {/* JEC DROPDOWN */}
                        <li className={`jec-menu-item ${activeDropdown === 'jec' ? 'jec-open' : ''}`}>
                            <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'jec')}>JEC <i className="fas fa-chevron-down"></i></a>
                            <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'jec' ? 'jec-show' : ''}`}>
                                <li><Link to="/jec/About-JEC" className="jec-dropdown-link">About JEC</Link></li>
                                <li><Link to="/jec/Management" className="jec-dropdown-link">Management</Link></li>
                                <li><Link to="/jec/network" className="jec-dropdown-link">Human Network</Link></li>
                               <li><Link to="/jec/Alumni" className="jec-dropdown-link">Alumni</Link></li>
                                <li><Link to="/jec/Students-Testimonials" className="jec-dropdown-link">Students Testimonials</Link></li>
                                 <li><Link to="/jec/Anti-Ragging-Committee" className="jec-dropdown-link">Anti-Ragging Committee</Link></li>
                                <li><Link to="/jec/Institution-Innovation-Council-JEC" className="jec-dropdown-link">Institution Innovation Council</Link></li>
                                 <li><Link to="/jec/JEC-FAQ" className="jec-dropdown-link">JEC FAQ</Link></li>
                                <li><Link to="/jec/Employment-JEC" className="jec-dropdown-link">Employment @JEC</Link></li>                      
                            </ul>
                        </li>

                        {/* ADMISSION DROPDOWN */}
                        <li className={`jec-menu-item ${activeDropdown === 'admission' ? 'jec-open' : ''}`}>
                            <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'admission')}>Admission <i className="fas fa-chevron-down"></i></a>
                            <ul className={`jec-dropdown jec-mega jec-cols-3 ${activeDropdown === 'admission' ? 'jec-show' : ''}`}>
                                <li><Link to="/admission/btech-admissions" className="jec-dropdown-link jec-highlight">Admission Open 2025</Link></li>
                                <li><Link to="/admission/Admission-Procedure" className="jec-dropdown-link">Admission Procedure</Link></li>
                                <li><Link to="/admission/Fee-Structure" className="jec-dropdown-link">Fee Structure</Link></li>
                                <li><Link to="/admission/Documents-Required" className="jec-dropdown-link">Documents Required</Link></li>
                                <li><Link to="/admission/Courses-Offered" className="jec-dropdown-link">Courses Offered</Link></li>
                                <li><Link to="/admission/REAP-2025" className="jec-dropdown-link">REAP-2025</Link></li>
                                <li><Link to="/admission/Financial-Aids-Bank-Loans" className="jec-dropdown-link">Financial Aids & Loans</Link></li>
                                <li><Link to="/admission/Mandatory-Disclosure" className="jec-dropdown-link">Mandatory Disclosure</Link></li>
                                <li><Link to="/admission/Karma-Courses-JEC" className="jec-dropdown-link">Karma Courses @JEC</Link></li>
                            </ul>
                        </li>

                        {/* DEPARTMENTS DROPDOWN */}
                        <li className={`jec-menu-item ${activeDropdown === 'dept' ? 'jec-open' : ''}`}>
                            <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'dept')}>Departments <i className="fas fa-chevron-down"></i></a>
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
                            <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'infra')}>Infrastructure <i className="fas fa-chevron-down"></i></a>
                            <ul className={`jec-dropdown jec-mega jec-cols-2 ${activeDropdown === 'infra' ? 'jec-show' : ''}`}>
                                <li><Link to="/Infrastructure/Learning-By-Doing" className="jec-dropdown-link">Learning By Doing</Link></li>
                                <li><Link to="/Infrastructure/Prepare-and-Present" className="jec-dropdown-link">Prepare and Present</Link></li>
                                <li><Link to="/Infrastructure/Refuel-and-Relax" className="jec-dropdown-link">Refuel and Relax</Link></li>
                                <li><Link to="/Infrastructure/Convenience-and-Safety" className="jec-dropdown-link">Convenience and Safety</Link></li>
                            </ul>
                        </li>

                        {/* CAMPUS LIFE DROPDOWN */}
                        <li className={`jec-menu-item ${activeDropdown === 'campus' ? 'jec-open' : ''}`}>
                            <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'campus')}>Campus Life <i className="fas fa-chevron-down"></i></a>
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

                       

                        {/* SOCIETY DROPDOWN */}
                        <li className={`jec-menu-item ${activeDropdown === 'society' ? 'jec-open' : ''}`}>
                            <a href="#!" className="jec-nav-link jec-toggle-btn" onClick={(e) => toggleDropdown(e, 'society')}>Society <i className="fas fa-chevron-down"></i></a>
                            <ul className={`jec-dropdown jec-mega jec-cols-2 ${activeDropdown === 'society' ? 'jec-show' : ''}`}>
                                <li><Link to="/Our-Society/Foundation-for-Better-Tomorrow" className="jec-dropdown-link">Foundation for Better Tomorrow</Link></li>
                                <li><Link to="/Our-Society/Key-Teams-Functions" className="jec-dropdown-link">Key Teams & Functions</Link></li>
                                <li><Link to="/Our-Society/Other-Institutes-Agrasen-College" className="jec-dropdown-link">Agrasen College</Link></li>
                                <li><Link to="/Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science" className="jec-dropdown-link">Jaipur College of Ed & Sci</Link></li>
                            </ul>
                        </li>

                        {/* NEW: DESKTOP SEARCH ICON (Placed after Society) */}
                        <li className="jec-menu-item jec-desktop-search" ref={searchRef}>
                            <div className={`jec-search-inline ${isSearchOpen ? 'active' : ''}`}>
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus={isSearchOpen}
                                />
                                <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                    <i className="fas fa-search"></i>
                                </button>
                                {showSuggestions && searchResults.length > 0 && isSearchOpen && (
                                    <ul className="jec-search-suggestions">
                                        {searchResults.map((res, i) => (
                                            <li key={i}><Link to={res.link} onClick={() => setSearchQuery('')}>{res.name}</Link></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </li>

                        {/* MOBILE CONTACT SECTION */}
                        <div className="jec-mobile-contact">
                            <h4>Get In Touch</h4>
                            <div className="jec-contact-row"><i className="fas fa-map-marker-alt"></i><span>SP-43, RIICO Ind. Area, Kukas,<br />Jaipur - 302028</span></div>
                            <div className="jec-contact-row"><i className="fas fa-phone-alt"></i><a href="tel:+918875071333">+91-88750 71333</a></div>
                            <div className="jec-contact-row"><i className="fas fa-envelope"></i><a href="mailto:admission@jeckukas.org.in">admission@jeckukas.org.in</a></div>
                        </div>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Subheader;