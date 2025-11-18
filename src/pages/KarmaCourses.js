import React from 'react';

function KarmaCourses() {
  return (
    <div className="karma-page">
      
      {/* Hero Section */}
      <section className="karma-hero">
        <div className="max-width-container">
            <h1>Karma Courses @ JEC</h1>
            <p>Enabling Innovations. Impact Driven. Projects with Mind & Heart.</p>
        </div>
      </section>

      {/* Stats Container */}
      <div className="max-width-container">
        <div className="karma-stats-bar">
            <div className="karma-stat-item">
                <h3>24</h3>
                <p>Karma Courses Offered</p>
            </div>
            <div className="karma-stat-item">
                <h3>8</h3>
                <p>Participating Departments</p>
            </div>
            <div className="karma-stat-item">
                <h3>30</h3>
                <p>Intake Per Course</p>
            </div>
            <div className="karma-stat-item">
                <h3>AICTE</h3>
                <p>Approved Initiative</p>
            </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="karma-overview-section">
        <div className="max-width-container">
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 className="karma-section-title">What is KARMA?</h2>
            </div>
            
            <div className="karma-intro-grid">
                <div className="karma-intro-text">
                    <p><strong>Kaushal Augmentation and Restructuring Mission of AICTE (KARMA)</strong> is an initiative to overcome the dual challenge of scarcity of skilled manpower and low skill levels in the workforce. The scheme focuses on skills development-based higher education leading to a Bachelor of Vocation (B.Voc.) degree with multiple entry and exit points.</p>
                    <p style={{ marginTop: '15px' }}>JEC Professional Education offers lifelong learning opportunities for professionals through these skilling and re-skilling courses. Currently, there are <strong>24 courses on offer</strong> with an intake of 30 each, certified by related Sector Skill Councils.</p>
                </div>
                <div className="karma-intro-image-container">
                    <img src="/images/campus-intro.jpeg" alt="JEC Vocational Courses Roadmap - Diploma to B.Voc" className="karma-roadmap-img" />
                    <p className="karma-roadmap-caption">JEC offers modular programs from Diploma to B.Voc Degree.</p>
                </div>
            </div>

            <div className="karma-text-block" style={{ marginTop: '40px' }}>
                <h3 style={{ color: 'var(--karma-logo-blue)', marginBottom: '15px' }}>Objectives</h3>
                <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>Create a skilled and certified workforce to drive India towards becoming a global skills capital.</li>
                    <li style={{ marginBottom: '10px' }}>Utilize higher education infrastructure during off-hours for skill training.</li>
                    <li style={{ marginBottom: '10px' }}>Offer domain-specific, demand-led skill training in core engineering sectors leading to employment.</li>
                </ul>
            </div>
        </div>
    </section>

    {/* Guidelines Section */}
    <section className="karma-guidelines-section">
        <div className="max-width-container">
            <h2 className="karma-section-title" style={{ borderColor: 'var(--karma-logo-red)' }}>Operational Guidelines</h2>
            <div className="karma-guidelines-grid">
                
                <div className="karma-guide-card">
                    <h4><i className="fas fa-bullseye"></i> Target Beneficiaries</h4>
                    <ul>
                        <li>School dropouts after class 10th seeking higher order skills.</li>
                        <li>Candidates passed at least 10th standard / ITIs.</li>
                        <li>Fulfills job role criteria defined by NSQF.</li>
                        <li>Possesses an Aadhaar card.</li>
                    </ul>
                </div>

                <div className="karma-guide-card">
                    <h4><i className="fas fa-user-graduate"></i> Admission Process</h4>
                    <ul>
                        <li>Any 10th pass and above may join.</li>
                        <li>Preference to learners from the local community.</li>
                        <li>No age bar for admission.</li>
                        <li>Admissions open round the year depending on course duration.</li>
                    </ul>
                </div>

                <div className="karma-guide-card">
                    <h4><i className="fas fa-laptop-house"></i> Modes of Training</h4>
                    <ul>
                        <li><strong>100% Contact-based:</strong> Theory & Practical physically at the institute.</li>
                        <li><strong>Blended Approach:</strong> Theory via digital/online mode, Practical at the training center.</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>

    {/* Table Section */}
    <section className="karma-table-section">
        <div className="max-width-container">
            <h2 className="karma-section-title">Approved Certificate / Diploma / B.Voc Courses</h2>
            <p style={{ marginBottom: '30px', color: '#555' }}>Details of approved courses with eligibility and duration (Intake: 30 each).</p>
            
            <div className="karma-table-container">
                <table className="karma-course-table">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Level</th>
                            <th>Program</th>
                            <th>Specialization</th>
                            <th>Eligibility</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>B.VOC</td><td>Engg & Tech</td><td>Automotive Manufacturing Tech</td><td>10+2 (PCM)</td><td>3 Years</td></tr>
                        <tr><td>2</td><td>B.VOC</td><td>Engg & Tech</td><td>Production Technology</td><td>10+2 (PCM)</td><td>3 Years</td></tr>
                        <tr><td>3</td><td>B.VOC</td><td>IT / ITES</td><td>Software Development</td><td>10+2 (PCM)</td><td>3 Years</td></tr>
                        <tr><td>4</td><td>B.VOC</td><td>Engg & Tech</td><td>Electronic Manufacturing Services</td><td>10+2 (PCM)</td><td>3 Years</td></tr>
                        
                        <tr><td>5</td><td>KARMA 1</td><td>Automobile Engg</td><td>Maintenance Technician-Mech</td><td>ITI / Mech / Fitter</td><td>350 Hrs</td></tr>
                        <tr><td>6</td><td>KARMA 1</td><td>CSE</td><td>Web Designing & Multimedia</td><td>10th</td><td>288 Hrs</td></tr>
                        <tr><td>7</td><td>KARMA 1</td><td>CSE</td><td>CRM Domestic Voice</td><td>10th</td><td>518 Hrs</td></tr>
                        <tr><td>8</td><td>KARMA 1</td><td>CSE</td><td>IT Network Support</td><td>10+2</td><td>120 Hrs</td></tr>
                        <tr><td>9</td><td>KARMA 1</td><td>CSE</td><td>Certified Audio Visual Designer</td><td>10+2</td><td>80 Hrs</td></tr>
                        <tr><td>10</td><td>KARMA 1</td><td>CSE</td><td>3D Animation & Special Effects</td><td>10th</td><td>500 Hrs</td></tr>
                        <tr><td>11</td><td>KARMA 1</td><td>Mechanical</td><td>CNC Operator-Training</td><td>10th</td><td>300 Hrs</td></tr>
                        <tr><td>12</td><td>KARMA 1</td><td>Mechanical</td><td>Fitter-Mechanical Assembly</td><td>10th</td><td>400 Hrs</td></tr>
                        <tr><td>13</td><td>KARMA 1</td><td>Electronics</td><td>Installation Tech-Computing</td><td>10th</td><td>200 Hrs</td></tr>
                        
                        <tr><td>14</td><td>KARMA 2</td><td>CSE</td><td>Adv Diploma - PLC/SCADA/DCS</td><td>B.E./B.Tech/Dip</td><td>480 Hrs</td></tr>
                        <tr><td>15</td><td>KARMA 2</td><td>CSE</td><td>App Developer - Web & Mobile</td><td>Graduate</td><td>440 Hrs</td></tr>
                        <tr><td>16</td><td>KARMA 2</td><td>Mechanical</td><td>Adv Cert. Inspection & QC</td><td>10+2</td><td>780 Hrs</td></tr>
                        <tr><td>17</td><td>KARMA 2</td><td>Electrical</td><td>Elec Assembly Operator</td><td>10th + ITI</td><td>200 Hrs</td></tr>
                        <tr><td>18</td><td>KARMA 2</td><td>CSE</td><td>Associate - DTP</td><td>Graduate</td><td>400 Hrs</td></tr>
                        <tr><td>19</td><td>KARMA 2</td><td>Electronics</td><td>Cert. Course in VLSI Design</td><td>Pursuing Degree</td><td>80 Hrs</td></tr>
                        <tr><td>20</td><td>KARMA 2</td><td>Electrical</td><td>System Admin Using Linux</td><td>B.Sc/BCA/Dip</td><td>80 Hrs</td></tr>
                        <tr><td>21</td><td>KARMA 2</td><td>CSE</td><td>Auto CAD Designer</td><td>10+2</td><td>120 Hrs</td></tr>
                        <tr><td>22</td><td>KARMA 2</td><td>CSE</td><td>Web Developer</td><td>Grad / Diploma</td><td>400 Hrs</td></tr>
                        <tr><td>23</td><td>KARMA 2</td><td>Electrical</td><td>DSP Using MATLAB</td><td>Pursuing Degree</td><td>80 Hrs</td></tr>
                        <tr><td>24</td><td>KARMA 2</td><td>Electronics</td><td>CAD Using CREO</td><td>Pursuing Degree</td><td>100 Hrs</td></tr>
                        <tr><td>25</td><td>KARMA 2</td><td>CSE</td><td>iOS Programming</td><td>Engg/Sci Grad</td><td>320 Hrs</td></tr>
                        <tr><td>26</td><td>KARMA 2</td><td>CSE</td><td>Network Administration</td><td>Engg/Sci Grad</td><td>320 Hrs</td></tr>
                        <tr><td>27</td><td>KARMA 2</td><td>CSE</td><td>IoT Applications</td><td>B.E./B.Tech/Dip</td><td>360 Hrs</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section className="karma-overview-section" style={{ backgroundColor: 'var(--karma-color-background-medium)' }}>
        <div className="max-width-container">
            <h3 style={{ color: 'var(--karma-logo-blue)', marginBottom: '15px' }}>Credit Framework</h3>
            <p className="karma-text-block" style={{ marginBottom: '0' }}>Banking of credits for skill shall be permitted so as to enable mobility of learners as per progressive job roles in skill vertical and further towards higher studies by means of a bridge course to attain general education credits. The credit framework for these courses will be as notified by the <strong>National Higher Education Qualification Framework (NHEQF)</strong>.</p>
        </div>
    </section>

    <section className="karma-contact-bar">
        <div className="max-width-container">
            <h3>Start Your Skill Journey Today</h3>
            <p>Our admission counselors are here to help you choose the appropriate course and evaluate your suitability.</p>
            <div className="karma-contact-info">
                <a href="tel:8875071333"><i className="fas fa-phone-alt"></i> 8875071333 (30 Lines)</a>
                <a href="mailto:admissions.jec@gmail.com"><i className="fas fa-envelope"></i> admissions.jec@gmail.com</a>
            </div>
        </div>
    </section>

    </div>
  );
}

export default KarmaCourses;