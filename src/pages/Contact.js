// src/pages/Contact.js
import React from 'react';

function Contact() {
  return (
    // This wrapper scopes all the new CSS
    <div className="contact-page">
      
      {/* Hero / Banner Section */}
      <section className="hero">
        <h1 className="fade-in-up">Contact Us</h1>
        <p className="fade-in-up">Get in touch with us</p>
        <p className="fade-in-up">For enrollment queries, connect with us</p>
        <div className="quick-contact">
          <div className="fade-in-up">
            <h3>Toll Free</h3>
            <a href="tel:+918875071333">+91-8875071333 (30 lines)</a>
          </div>
          <div className="fade-in-up">
            <h3>Email</h3>
            <a href="mailto:admission@jeckukas.org.in">admission@jeckukas.org.in</a>
          </div>
        </div>
      </section>

      {/* Campus Sections */}
      <section className="campus-section" id="campus">
        <div className="campus-grid">
          <div className="campus-card fade-in-up">
            <h2>Jaipur Campus, Kukas</h2>
            <p className="address">SP - 43, RIICO Industrial Area, Delhi Road, Kukas, Jaipur - 302028, India</p>
            <p className="timings">Timings: 9:30 am to 5:30 pm</p>
            <h3>Schools / Departments:</h3>
            <ul>
              <li>Department of Computer Science & Engineering</li>
              <li>Department of Electronics & Communication Engineering</li>
              <li>Department of Mechanical Engineering</li>
              <li>Department of Civil Engineering</li>
              <li>Department of Electrical Engineering</li>
            </ul>
            <p className="contact">Contact: <a href="tel:+918875071333">+91-8875071333</a></p>
            <h3>Distances:</h3>
            <ul>
              <li>Jaipur International Airport: 25 km</li>
              <li>Jaipur Railway Station: 20 km</li>
              <li>Jaipur Bus Stand (Sindhi Camp): 18 km</li>
            </ul>
          </div>
          <div className="campus-card fade-in-up">
            <h2>Delhi Office</h2>
            <p className="address">401, Akashdeep, Barakhamba road, New Delhi</p>
            <p className="timings">Timings: 10:00 am to 7:00 pm</p>
            <h3>Departments:</h3>
            <ul>
              <li>Admissions & Outreach</li>
              <li>Corporate Relations</li>
            </ul>
            <p className="contact">Contact: <a href="tel:+918058799011">+91-8058799011</a></p>
            <h3>Distances:</h3>
            <ul>
              <li>Indira Gandhi International Airport: 15 km</li>
              <li>New Delhi Railway Station: 5 km</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Media Queries Section */}
      <section className="media-section fade-in-up">
        <h2>For Any Media Queries</h2>
        <p>Contact our Director of Communications for media-related inquiries, partnerships, or press releases.</p>
      </section>

      {/* Representatives Section */}
      <section className="reps-section" id="reps">
        <h2 className="fade-in-up">Speak to our Representatives</h2>
        <p className="fade-in-up">Connect with our admission counselors across regions.</p>
        <div className="reps-grid">
          <div className="reps-table fade-in-up">
            <table>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Counselor Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jaipur</td>
                  <td>Admission Coordinator</td>
                  <td><a href="mailto:admission@jeckukas.org.in">admission@jeckukas.org.in</a></td>
                  <td><a href="tel:+918875071333">+91-8875071333</a></td>
                  <td>SP-43, RIICO Industrial Area, Kukas</td>
                </tr>
                <tr>
                  <td>Delhi</td>
                  <td>Regional Director</td>
                  <td><a href="mailto:directorjecjiet@gmail.com">directorjecjiet@gmail.com</a></td>
                  <td><a href="tel:+918058799011">+91-8058799011</a></td>
                  <td>401, Akashdeep, Barakhamba Road</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="reps-table fade-in-up">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Region</th>
                  <th>Contact Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admission Team Lead</td>
                  <td>Rajasthan</td>
                  <td><a href="tel:+918875041333">+91-8875041333</a></td>
                </tr>
                <tr>
                  <td>Placement Coordinator</td>
                  <td>North India</td>
                  <td><a href="tel:+919694098821">+91-9694098821</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="form-section" id="form">
        <h2 className="fade-in-up">Enquiry Form</h2>
        <form action="#" method="post">
          <div className="form-group fade-in-up">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first_name" placeholder="Please enter first name" required />
          </div>
          <div className="form-group fade-in-up">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last_name" placeholder="Please enter last name" required />
          </div>
          <div className="form-group fade-in-up">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Please enter email address" required />
          </div>
          <div className="form-group fade-in-up">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" name="mobile" placeholder="+91 Please enter mobile number" required />
          </div>
          <div className="form-group fade-in-up">
            <label htmlFor="course-type">Course Type</label>
            <select id="course-type" name="course_type" required>
              <option value="">Please Select Course Type</option>
              <option>B.Tech</option>
              <option>M.Tech</option>
              <option>MBA</option>
              <option>Ph.D.</option>
            </select>
          </div>
          <div className="form-group fade-in-up">
            <label htmlFor="course">Course</label>
            <select id="course" name="course" required>
              <option value="">Please select Course</option>
              <option>Computer Science</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
            </select>
          </div>
          <div className="form-group full-width fade-in-up">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell us how we can help you..." rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn fade-in-up">SUBMIT ENQUIRY</button>
        </form>
      </section>

      {/* Map Section - Enhanced with Directions */}
      <section className="map-section" id="map">
        <h2 className="fade-in-up">Reach Us</h2>
        <p className="fade-in-up">Locate our Jaipur Campus and get directions from major cities.</p>
        <div className="map-container fade-in-up">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.080517921319!2d75.82035207507301!3d27.15392574880963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b223a541bbf%3A0x6a77b693532726f3!2sJaipur%20Engineering%20College%20(JEC)!5e0!3m2!1sen!2sin!4v1675861198751!5m2!1sen!2sin" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="directions">
          <div className="direction-card fade-in-up">
            <h3><i className="fas fa-car"></i> From Delhi</h3>
            <p>Via NH48 (Delhi-Jaipur Expressway)</p>
            <p><strong>Distance:</strong> Approximately 260 km</p>
            <p><strong>Travel Time:</strong> 4-5 hours by car</p>
          </div>
          <div className="direction-card fade-in-up">
            <h3><i className="fas fa-car"></i> From Jaipur</h3>
            <p>Via Amer Road / NH21</p>
            <p><strong>Distance:</strong> Approximately 20 km</p>
            <p><strong>Travel Time:</strong> 30-45 minutes by car</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Contact;