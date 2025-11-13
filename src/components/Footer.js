// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-links-section">
          <div className="footer-column admissions-column">
            <h4>Admissions</h4>
            <div className="column-group">
              <ul>
                <li><a href="#">B.Tech.</a></li>
                <li><a href="#">B.Des.</a></li>
                <li><a href="#">LL.B.</a></li>
                <li><a href="#">B.Pharm.</a></li>
                <li><a href="#">BBA</a></li>
                <li><a href="#">BCA</a></li>
                <li><a href="#">B.Sc.</a></li>

                
                <li><a href="#">B.Com.</a></li>
                <li><a href="#">BA (Hons.)</a></li>
              </ul>
              <ul>
                <li><a href="#">MBA</a></li>
                <li><a href="#">M.Tech.</a></li>
                <li><a href="#">M.Des.</a></li>
                <li><a href="#">MA</a></li>
                <li><a href="#">M.Sc.</a></li>
                <li><a href="#">LL.M.</a></li>
                <li><a href="#">MCA</a></li>
                <li><a href="#">PhD</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-column aspiring-students-column">
            <h4>Aspiring Students</h4>
            <ul>
              <li><a href="#">Admission Alerts</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Fee Refund Portal</a></li>
              <li><a href="#">Global Pathways Program</a></li>
              <li><a href="#">International Admissions</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">JEC Online</a></li>
              <li><a href="#" className="important">Important Dates</a></li>
            </ul>
          </div>

          <div className="footer-column other-links-column">
            <h4>Other links</h4>
            <div className="column-group">
              <ul>
                <li><a href="#">Academic Calendar</a></li>
                <li><a href="#">NIRF Ranking Report</a></li>
                <li><a href="#">Scholarships</a></li>
                <li><a href="#">Mandatory Disclosures</a></li>
                <li><a href="#">NAAC</a></li>
                <li><a href="#">BEST Centre</a></li>
                <li><a href="#">Sustainable Development Goal</a></li>
              </ul>
              <ul>
                <li><a href="#">Campus</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Student Achievements</a></li>
                <li><a href="#">Student Corner</a></li>
                <li><a href="#">IQAC</a></li>
              </ul>
              <ul>
                <li><a href="#">Events</a></li>
                <li><a href="#">Faculty</a></li>
                <li><a href="#">HILL</a></li>
                <li><a href="#">Current Openings</a></li>
                <li><a href="#">Downloads</a></li>
                <li><a href="#">National Academic Depository</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-address-section">
          <div className="address-column">
            <h4>Kandoli Campus, Dehradun</h4>
            <p>P.O. Kandoli Via Premnagar,<br />Dehradun-248007</p>
          </div>
          <div className="address-column">
            <h4>Bidholi Campus, Dehradun</h4>
            <p>P.O. Bidholi Via Premnagar,<br />Dehradun-248007</p>
          </div>
          <div className="address-column">
            <h4>Corporate Office</h4>
            <p>216B 1, Second Floor,<br />Splendor Forum, Plot Bearing No. 3,<br />Jasola District Centre,
              Jasola,<br />New Delhi-110025</p>
          </div>
          <div className="address-column">
            <h4>Contact Us</h4>
            <p>Toll Free: 18001028737<br />Email: enrollments@JEC.ac.in<br />For International
              Queries:<br />international.admissions@JEC.ac.in</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="follow-us">
          <span>Follow Us:</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="legal-links">
          <span>Copyright © 2025 JEC. All Rights Reserved.</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;