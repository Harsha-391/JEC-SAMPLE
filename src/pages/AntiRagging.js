import React from 'react';

function AntiRagging() {
  return (
    // This wrapper class will scope all the new CSS
    <div className="anti-ragging-page">

      <section className="anti-ragging-hero">
        <div className="max-width-container">
          <h1>Anti-Ragging Committee</h1>
          <p>JEC is a "Ragging Free Zone." We are committed to creating a safe, respectful, and supportive environment for all students.</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="max-width-container">
          <h2 className="section-title">What is Ragging?</h2>
          <div className="text-block">
            <p>Ragging is any disorderly conduct, whether by words spoken or written, or by an act which has the effect of teasing, treating, or handling with rudeness any other student. Indulging in rowdy or undisciplined activities which cause or are likely to cause annoyance, hardship, or psychological harm or to raise fear or apprehension thereof in a fresher or a junior student. It also includes asking the students to do any act or perform something which such student will not do in the ordinary course and which has the effect of causing or generating a sense of shame or embarrassment so as to adversely affect the physique or psyche of a fresher or a junior student.</p>
            <p><strong>RAGGING IS A PUNISHABLE OFFENCE.</strong> Any student found indulging in such activities will be immediately rusticated from the institute.</p>
          </div>
        </div>
      </section>

      <section className="action-bar">
        <div className="max-width-container action-grid">
          <div className="action-item">
            <i className="fas fa-gavel"></i>
            <h4>Report an Incident</h4>
            <p>Your identity will be kept confidential.</p>
            <a href="mailto:directorjecjiet@gmail.com" className="action-btn">Report Now</a>
          </div>
          <div className="action-item">
            <i className="fas fa-balance-scale"></i>
            <h4>UGC Regulations</h4>
            <p>Read the official UGC regulations on ragging.</p>
            <a href="#!" className="action-btn">Read Regulations</a>
          </div>
          <div className="action-item">
            <i className="fas fa-file-signature"></i>
            <h4>Submit Affidavit</h4>
            <p>All students must submit an anti-ragging affidavit.</p>
            <a href="#!" className="action-btn">Download Form</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="max-width-container">
          <h2 className="section-title">In Case of Emergency</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <i className="fas fa-phone-alt"></i>
              <h4>National Helpline</h4>
              <p>Call the National Anti-Ragging Helpline</p>
              <a href="tel:1800-180-5522">1800-180-5522</a>
            </div>
            <div className="contact-card">
              <i className="fas fa-envelope"></i>
              <h4>Email Helpline</h4>
              <p>Email the National Helpline</p>
              <a href="mailto:helpline@antiragging.in">helpline@antiragging.in</a>
            </div>
            <div className="contact-card">
              <i className="fas fa-user-shield"></i>
              <h4>College Nodal Officer</h4>
              <p>Prof. (Dr.) Bharat Bhushan Jain</p>
              <a href="tel:+918875084181">+91-8875084181</a>
            </div>
          </div>
        </div>
      </section>

      <section className="committee-section">
        <div className="max-width-container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>Committee Members</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Committee</th>
                  <th>Date of Constitution</th>
                  <th>Name of Member</th>
                  <th>Designation</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Prof. (Dr.) Bharat Bhushan Jain</strong></td>
                  <td>Principal</td>
                  <td>8875084181</td>
                </tr>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Prof. (Dr.) Sunita Goyal Rawat</strong></td>
                  <td>Director</td>
                  <td>9828543666</td>
                </tr>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Prof. (Dr.) D. G. Mahto</strong></td>
                  <td>Director (R&D)</td>
                  <td>8058799011</td>
                </tr>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Mr. Gori Shankar Sharma</strong></td>
                  <td>Assistant Professor</td>
                  <td>8875084185</td>
                </tr>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Ms. Sonia Sharma</strong></td>
                  <td>Technical Assistant</td>
                  <td>8619038682</td>
                </tr>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Mr. Darshan Singh</strong></td>
                  <td>Security Officer</td>
                  <td>8058799028</td>
                </tr>
                <tr>
                  <td>Anti-ragging Committee</td>
                  <td>01/08/2024</td>
                  <td><strong>Mr. Vijendra Singh Jaduan</strong></td>
                  <td>Supervisor</td>
                  <td>8058799016</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AntiRagging;