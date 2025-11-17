import React from 'react';

function Testimonials() {
  return (
    // This wrapper class will scope all the new CSS
    <div className="testimonials-page">

      <section className="testimonial-hero">
        <div className="max-width-container">
          <h1>Student Testimonials</h1>
          <p>Hear from our students and alumni about their journey at JEC.</p>
        </div>
      </section>

      <section className="testimonial-grid-section">
        <div className="max-width-container">
          <div className="t-grid">

            {/* Testimonial Card 1 */}
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"JEC provided me with the best opportunities. The placement cell was incredibly supportive, and I am grateful for the 360-degree support that helped me land my dream job."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Aarav Sharma</h4>
                  <p className="course">B.Tech, CSE (2018-22)</p>
                  <div className="placement-badge">Placed @ Wipro</div>
                  <span className="salary-badge">CTC: 8 LPA</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"The faculty at JEC is top-notch. Their mentorship and the advanced curriculum were key to my success. The 'Karma Courses' provided real-world skills that were invaluable."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Priya Singh</h4>
                  <p className="course">B.Tech, ECE (2017-21)</p>
                  <div className="placement-badge">Placed @ Infosys</div>
                  <span className="salary-badge">CTC: 7.5 LPA</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"Being part of the 'Institution Innovation Council' was a turning point for me. It gave me the platform to build my startup idea from scratch, with full support from the college."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Rohan Gupta</h4>
                  <p className="course">B.Tech, IT (2019-23)</p>
                  <div className="placement-badge">Founder, TechSprint Solutions</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 4 */}
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"The 'Human Network' at JEC is its greatest asset. The faculty are more than just teachers; they are mentors. I felt prepared for the industry long before I graduated."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Ananya Joshi</h4>
                  <p className="course">B.Tech, EE (2018-22)</p>
                  <div className="placement-badge">Placed @ Tata Power</div>
                  <span className="salary-badge">CTC: 6.5 LPA</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 5 */}
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"As an entrepreneur, JEC gave me the roots and the wings. The mentorship from the faculty and the practical exposure in labs was instrumental. Proud to be a JEC alumnus."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Gaurav Kumar Sinha</h4>
                  <p className="course">B.Tech, ME (2012-16)</p>
                  <div className="placement-badge">Director, Bhumi & Sidhi Innovators</div>
                </div>
              </div>
            </div>

            {/* Testimonial Card 6 */}
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"JEC has always believed in helping and guiding its students and it was no different during the placement season. Regular classes held at our college to help us with our aptitude and employability skills were of great help."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Utkarsh Bharadwaj</h4>
                  <p className="course">B.Tech, EE (2015-19)</p>
                  <div className="placement-badge">Academia Guru</div>
                  <span className="salary-badge">CTC: 3 Lakhs</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;