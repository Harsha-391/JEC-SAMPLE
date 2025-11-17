import React, { useState } from 'react';

// This component assumes the CSS from Step 2 is added to your main App.css
// which is imported in App.js

function Placements() {
  // This state will track which tab is active. 'y24-25' is the default.
  const [activeTab, setActiveTab] = useState('y24-25');

  // This function will be called by the tab buttons
  const openYear = (yearName) => {
    setActiveTab(yearName);
  };

  return (
    // We start from the <header> tag, since your Layout.js
    // already provides the main navigation and footer.
    <>
      <header className="hero">
        <h1>Placement Glory</h1>
        <p>Catapulting Careers • Life After JEC</p>
      </header>

      <div className="stats-container">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">94%+</div>
            <div className="stat-label">Placement Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1.56 Cr</div>
            <div className="stat-label">Highest Package</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">4300+</div>
            <div className="stat-label">Total Placements</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">550+</div>
            <div className="stat-label">Active Recruiters</div>
          </div>
        </div>
      </div>

      <div className="container">

        <div className="content-grid">
          <div className="narrative-text">
            <h2>Catapulting Careers</h2>
            <p>As hard as it might be to imagine sometimes, there is life after JEC, as shown by the <strong>~10,000+ JEC alumni</strong> living around the world. Jaipur Engineering College (JEC) is making new strides in placements of its students in top notch brands every year.</p>
            <p>For the last three years, JEC has set the highest placement record, and the academic year 2021-25 too proved no different. Crossing the mark of expected placement drives & offers, this year proved job-productive for JEC students not only in number but quality placement also.</p>
            <p>Presently JEC students are working world-wide with prestigious global companies like Google, Microsoft, Apple, Amazon, Infosys, Triumph, Cape Electric and many more. JEC is closely associated with a few brands. These brands consider JEC as ‘One Stop Solution’ for industry ready human resource.</p>
            
            <div className="chairman-quote">
              <i className="fas fa-quote-left" style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'block' }}></i>
              "We know that great universities world over are known by their successful alumni, and we are proud to share that the placement of JEC students are on rise day by day. This success is really our Placement Glory."
              <div style={{ marginTop: '10px', fontWeight: '700' }}>— Shri L C Saraogi, Chairman</div>
            </div>
          </div>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Top Placements, Recruiters & Outreach</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Presently, 300+ JEC students are also working on ‘Live Projects’ directly with the Industry like Infosys, Delta Powers, Teksystems, Decathlons, Sony, Future Group, DCB Bank, Oyo Rooms, PayTm and many more.
            </p>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-card)' }} alt="Corporate Meeting" />
          </div>
        </div>

        <div className="section-header">
          <h2>Star <span>Achievers</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Breaking Barriers & Setting New Benchmarks</p>
        </div>

        <div className="gold-grid">
          <div className="gold-card">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" className="student-img-lg" alt="Student" />
            <div className="gold-name">Sunil Agarwal</div>
            <div className="gold-company">Cisco</div>
            <div className="gold-package">1.56 Cr</div>
          </div>
          <div className="gold-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="student-img-lg" alt="Student" />
            <div className="gold-name">Brijesh Dhanker</div>
            <div className="gold-company">UBS Group AG</div>
            <div className="gold-package">80 LPA</div>
          </div>
          <div className="gold-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" className="student-img-lg" alt="Student" />
            <div className="gold-name">Sandip Bose</div>
            <div className="gold-company">TVS Motors</div>
            <div className="gold-package">46 LPA</div>
          </div>
          <div className="gold-card">
            <img src="https://randomuser.me/api/portraits/men/22.jpg" className="student-img-lg" alt="Student" />
            <div className="gold-name">Ankit Shrivastava</div>
            <div className="gold-company">Wipro</div>
            <div className="gold-package">25 LPA</div>
          </div>
        </div>

        <div className="section-header" style={{ marginTop: '0' }}>
          <h2>Placement <span>Gallery</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Celebrating our placed students</p>
        </div>

        <div className="achievers-grid" id="studentGrid">
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/1.jpg" className="student-img" alt="student" /><div className="ac-name">Junhaid Khan</div><div className="ac-comp">Jakson Green Pvt. Ltd.</div><div className="ac-pkg">20.40 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/2.jpg" className="student-img" alt="student" /><div className="ac-name">Dashrath Singh Kavia</div><div className="ac-comp">SalesForce</div><div className="ac-pkg">19 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/3.jpg" className="student-img" alt="student" /><div className="ac-name">Gaurav Verma</div><div className="ac-comp">Technip Energies</div><div className="ac-pkg">17 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/4.jpg" className="student-img" alt="student" /><div className="ac-name">Yashmit Sharma</div><div className="ac-comp">Synopsys, Inc.</div><div className="ac-pkg">15.3 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/5.jpg" className="student-img" alt="student" /><div className="ac-name">Piyush Rajliwal</div><div className="ac-comp">BOSCH Jaipur</div><div className="ac-pkg">12 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/6.jpg" className="student-img" alt="student" /><div className="ac-name">Ramkishan</div><div className="ac-comp">EoxysiIT</div><div className="ac-pkg">12 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/men/7.jpg" className="student-img" alt="student" /><div className="ac-name">Kshitij Mathur</div><div className="ac-comp">HabileLabs Pvt Ltd</div><div className="ac-pkg">12 LPA</div></div>
            <div className="achiever-card premium"><img src="https://randomuser.me/api/portraits/women/8.jpg" className="student-img" alt="student" /><div className="ac-name">Aishwarya</div><div className="ac-comp">BuildMart PVT. LTD.</div><div className="ac-pkg">10 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/9.jpg" className="student-img" alt="student" /><div className="ac-name">Himanshu Kumar</div><div className="ac-comp">Pinnacle Infotech</div><div className="ac-pkg">9.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/10.jpg" className="student-img" alt="student" /><div className="ac-name">Shivam Shekhar Jha</div><div className="ac-comp">WHITEHAT JR</div><div className="ac-pkg">9.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/11.jpg" className="student-img" alt="student" /><div className="ac-name">Ranchi Nandwaniya</div><div className="ac-comp">C-Maze PMC</div><div className="ac-pkg">9.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/12.jpg" className="student-img" alt="student" /><div className="ac-name">Junhaid Khan</div><div className="ac-comp">Adani Green Energy</div><div className="ac-pkg">8.60 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/13.jpg" className="student-img" alt="student" /><div className="ac-name">Naman Singh</div><div className="ac-comp">Logzero Technologies</div><div className="ac-pkg">8 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/14.jpg" className="student-img" alt="student" /><div className="ac-name">Ravikant</div><div className="ac-comp">Swaraa Tech Solutions</div><div className="ac-pkg">7.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/15.jpg" className="student-img" alt="student" /><div className="ac-name">Swami Raj</div><div className="ac-comp">Beta Arrays Pvt. Ltd.</div><div className="ac-pkg">7.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/16.jpg" className="student-img" alt="student" /><div className="ac-name">Sachin Rajput</div><div className="ac-comp">Celebal Technologies</div><div className="ac-pkg">7 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/17.jpg" className="student-img" alt="student" /><div className="ac-name">Khushi Sharma</div><div className="ac-comp">Celebal Technologies</div><div className="ac-pkg">7 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/18.jpg" className="student-img" alt="student" /><div className="ac-name">Aishwarya Laxmi</div><div className="ac-comp">CRESCENTIA INDIA</div><div className="ac-pkg">7 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/19.jpg" className="student-img" alt="student" /><div className="ac-name">Vinay Rawal</div><div className="ac-comp">Matellio</div><div className="ac-pkg">7 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/20.jpg" className="student-img" alt="student" /><div className="ac-name">Khushbu Sen</div><div className="ac-comp">Byjus</div><div className="ac-pkg">6.75 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/21.jpg" className="student-img" alt="student" /><div className="ac-name">Nikhil Raj</div><div className="ac-comp">Byjus</div><div className="ac-pkg">6.75 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Deepak Meena</div><div className="ac-comp">ZUCOL Group</div><div className="ac-pkg">6.50 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Ravi Ranjan Thakur</div><div className="ac-comp">ZUCOL Group</div><div className="ac-pkg">6.50 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Abhay Yadav</div><div className="ac-comp">Zocal</div><div className="ac-pkg">6.5 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Ajay Singh</div><div className="ac-comp">J K Tyer</div><div className="ac-pkg">6.5 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Ravindra Singh</div><div className="ac-comp">J K Tyer</div><div className="ac-pkg">6.5 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Devendra Khichi</div><div className="ac-comp">Celebal Technologies</div><div className="ac-pkg">6.5 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Gulnaz Bano</div><div className="ac-comp">Celebal Technologies</div><div className="ac-pkg">6.5 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Arjun Devasi</div><div className="ac-comp">Albiorix Technology</div><div className="ac-pkg">6.25 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Rustam Kumar</div><div className="ac-comp">Aryam Inter-Continental</div><div className="ac-pkg">6 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Tushar</div><div className="ac-comp">SPAS NextGen Infotech</div><div className="ac-pkg">6 LPA</div></div>
            <div className="achiever-card"><img src="httpshttps{...}" className="student-img" alt="student" /><div className="ac-name">Akash Panchal</div><div className="ac-comp">KCT, Neerja Modi</div><div className="ac-pkg">5.6 LPA</div></div>
            <div className="achiever-card"><img src="https{...}" className="student-img" alt="student" /><div className="ac-name">Bhavna Verma</div><div className="ac-comp">Indus Tower</div><div className="ac-pkg">5.6 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/34.jpg" className="student-img" alt="student" /><div className="ac-name">Deepak Gavendra</div><div className="ac-comp">Indus Tower</div><div className="ac-pkg">5.6 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/35.jpg" className="student-img" alt="student" /><div className="ac-name">Dhirendra Singh</div><div className="ac-comp">Indus Tower</div><div className="ac-pkg">5.60 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/36.jpg" className="student-img" alt="student" /><div className="ac-name">Gourav Priyadarshi</div><div className="ac-comp">Pantagon Space</div><div className="ac-pkg">5.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/37.jpg" className="student-img" alt="student" /><div className="ac-name">Ravikant Kumar</div><div className="ac-comp">Pantagon Space</div><div className="ac-pkg">5.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/38.jpg" className="student-img" alt="student" /><div className="ac-name">Radhika Kumari</div><div className="ac-comp">Marwarpay Info</div><div className="ac-pkg">5.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/39.jpg" className="student-img" alt="student" /><div className="ac-name">Vinay Kumar</div><div className="ac-comp">Dev Technosys</div><div className="ac-pkg">5.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/40.jpg" className="student-img" alt="student" /><div className="ac-name">Khateeb Ahmed</div><div className="ac-comp">Puzzolana Machinary</div><div className="ac-pkg">5.4 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/41.jpg" className="student-img" alt="student" /><div className="ac-name">Raviranjan Kumar</div><div className="ac-comp">Zucol Group</div><div className="ac-pkg">5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/42.jpg" className="student-img" alt="student" /><div className="ac-name">Rachi Nandwaniya</div><div className="ac-comp">Zucol Solutions</div><div className="ac-pkg">5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/43.jpg" className="student-img" alt="student" /><div className="ac-name">Krishan Kant Soni</div><div className="ac-comp">SKF Bearing</div><div className="ac-pkg">5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/44.jpg" className="student-img" alt="student" /><div className="ac-name">Ashvini Kumar</div><div className="ac-comp">Skywaltz Balloon</div><div className="ac-pkg">5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/45.jpg" className="student-img" alt="student" /><div className="ac-name">Gajanand Acharya</div><div className="ac-comp">Zucol Group</div><div className="ac-pkg">5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/46.jpg" className="student-img" alt="student" /><div className="ac-name">Siddhi Agarwal</div><div className="ac-comp">Deorwine Infotech</div><div className="ac-pkg">5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/47.jpg" className="student-img" alt="student" /><div className="ac-name">Tethagat Priyadarshi</div><div className="ac-comp">Cognizant</div><div className="ac-pkg">4.70 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/48.jpg" className="student-img" alt="student" /><div className="ac-name">Aayush Anand</div><div className="ac-comp">Cognizant</div><div className="ac-pkg">4.70 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/49.jpg" className="student-img" alt="student" /><div className="ac-name">Pappu Kumar</div><div className="ac-comp">Gauri Project</div><div className="ac-pkg">4.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/50.jpg" className="student-img" alt="student" /><div className="ac-name">Tausif Raza</div><div className="ac-comp">Trans Auto Int.</div><div className="ac-pkg">4.5 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/women/51.jpg" className="student-img" alt="student" /><div className="ac-name">Arti Kumari</div><div className="ac-comp">Sombansi Enviro</div><div className="ac-pkg">4.4 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/52.jpg" className="student-img" alt="student" /><div className="ac-name">Gulam Aadil</div><div className="ac-comp">One Point One</div><div className="ac-pkg">4.4 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/53.jpg" className="student-img" alt="student" /><div className="ac-name">Md. Firdaus Ahmad</div><div className="ac-comp">Prestige Group</div><div className="ac-pkg">3.70 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/54.jpg" className="student-img" alt="student" /><div className="ac-name">Jitendra Choudhary</div><div className="ac-comp">Halcyon Tech</div><div className="ac-pkg">3.50 LPA</div></div>
            <div className="achiever-card"><img src="https://randomuser.me/api/portraits/men/55.jpg" className="student-img" alt="student" /><div className="ac-name">Praveen Beniwal</div><div className="ac-comp">ALP Overseas</div><div className="ac-pkg">3.50 LPA</div></div>
        </div>

        <div className="section-header">
            <h2>Placement Drives</h2>
            <div className="section-line" style={{ maxWidth: '200px', margin: '10px auto', height: '4px', background: 'var(--gold)' }}></div>
        </div>

        <div className="tabs-wrapper">
            <div className="tabs-nav">
                <button className={`tab-btn ${activeTab === 'y24-25' ? 'active' : ''}`} onClick={() => openYear('y24-25')}>2024-25</button>
                <button className={`tab-btn ${activeTab === 'y23-24' ? 'active' : ''}`} onClick={() => openYear('y23-24')}>2023-24</button>
                <button className={`tab-btn ${activeTab === 'y22-23' ? 'active' : ''}`} onClick={() => openYear('y22-23')}>2022-23</button>
                <button className={`tab-btn ${activeTab === 'y21-22' ? 'active' : ''}`} onClick={() => openYear('y21-22')}>2021-22</button>
            </div>

            <div id="y24-25" className={`tab-content ${activeTab === 'y24-25' ? 'active' : ''}`}>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr><th>Date</th><th>Company Name</th><th>CTC (LPA)</th><th>Branch</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>5-Jul-24</td><td>Teleperformance</td><td>6.00</td><td>CS/CS(AI)</td></tr>
                            <tr><td>2-Jan-25</td><td>Cognizant</td><td>4.70</td><td>CS/CS(AI)</td></tr>
                            <tr><td>7-Jan-25</td><td>Cosmo Logic IT Solution Pvt Ltd.</td><td>10.00</td><td>CS/CS(AI)</td></tr>
                            <tr><td>22-Jan-25</td><td>Normet India Pvt Ltd.</td><td>5.50</td><td>ECE/EE</td></tr>
                            <tr><td>22-Jan-25</td><td>VVDN Technologies Pvt. Ltd.</td><td>4.20</td><td>ECE/EE</td></tr>
                            <tr><td>4-Feb-25</td><td>SPAS Nextgen Infotech Pvt. Ltd.</td><td>6.00</td><td>CS/CS(AI)</td></tr>
                            <tr><td>5-Feb-25</td><td>ALP Aeroflex (I) Pvt Ltd.</td><td>3.00</td><td>ME/Produ.</td></tr>
                            <tr><td>21-Mar-25</td><td>Kanini</td><td>3.00-5.00</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>21-Mar-25</td><td>Zucol Technologies</td><td>5.20-7.00</td><td>CS/CS(AI)</td></tr>
                            <tr><td>5-Apr-25</td><td>Spectrum Talent Management</td><td>3.60</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>7-Apr-25</td><td>Classic Signatures Pvt. Ltd.</td><td>3.20</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>12-Apr-25</td><td>Celebal Technology</td><td>5.00</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>12-Apr-25</td><td>Workspan</td><td>12.00</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>15-Apr-25</td><td>DianApps</td><td>3.60-4.00</td><td>All Branches</td></tr>
                            <tr><td>21-Apr-25</td><td>Celebal Technology (Intership)</td><td>2.50</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>28-Apr-25</td><td>Accrual Intelligence Manuals Group</td><td>3.00</td><td>EE/ME/ECE</td></tr>
                            <tr><td>28-Apr-25</td><td>Hireyy Group</td><td>3.50</td><td>EE/ME/ECE</td></tr>
                            <tr><td>28-Apr-25</td><td>Mechlin Group</td><td>4.00</td><td>EE/ME/ECE</td></tr>
                            <tr><td>28-Apr-25</td><td>Etech Group</td><td>3.20</td><td>EE/ME/ECE</td></tr>
                            <tr><td>29-Apr-25</td><td>Accura Tequipent</td><td>3.00</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>30-Apr-25</td><td>Prodesk IT</td><td>3.00-11.00</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>8-May-25</td><td>KPMG ( Internship)</td><td>2.50</td><td>CS/CS(AI)</td></tr>
                            <tr><td>12-May-25</td><td>CEAT Tyers</td><td>3.00</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>15-May-25</td><td>Fonix Technologies ( Internship)</td><td>2.50</td><td>CS/CS(AI)</td></tr>
                            <tr><td>20-May-25</td><td>Dian Apps Technologies Pvt. Ltd.</td><td>2.4-4.5</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>22-May-25</td><td>Anemo Prime Pvt. Ltd</td><td>2.5-4.6</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>6-Jun-25</td><td>Innovaccer</td><td>2.40</td><td>CS/CS(AI)/IT</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="y23-24" className={`tab-content ${activeTab === 'y23-24' ? 'active' : ''}`}>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr><th>Date</th><th>Company Name</th><th>CTC (LPA)</th><th>Branch</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>20-Oct-23</td><td>Victory Electrical International Ltd</td><td>3.00-5.00</td><td>EE/ME/ECE</td></tr>
                            <tr><td>21-Oct-23</td><td>Prodesk IT</td><td>3.00</td><td>EE/ME/ECE</td></tr>
                            <tr><td>21-Oct-23</td><td>Prodesk IT</td><td>5.00</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>07-Nov-23</td><td>Sandvik Mining & Rock</td><td>4.00</td><td>EE/ME (Female)</td></tr>
                            <tr><td>11-Nov-23</td><td>IBM CodeKnack</td><td>4.50</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>16-Nov-23</td><td>Precision Design and Engineering</td><td>2.25-5.00</td><td>EE/ME/CE</td></tr>
                            <tr><td>22-Nov-23</td><td>EY</td><td>6.37</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>01-Dec-23</td><td>Corum8</td><td>3.60</td><td>CS/CS(AI)/IT</td></tr>
                            <tr><td>02-Dec-23</td><td>WeVois</td><td>5.00</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>21-Dec-23</td><td>Syscom Softech (P) Limited</td><td>3.50</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>05-Jan-24</td><td>Mobzway Technologies</td><td>4.30</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>12-Jan-24</td><td>Brudite</td><td>3.50-6.00</td><td>All Branches</td></tr>
                            <tr><td>17-Jan-24</td><td>B-Trnsfrmd</td><td>4.00-4.60</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>19-Jan-24</td><td>Ceasefire Industries</td><td>4.50</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>23-Jan-24</td><td>AppzoTech</td><td>4.60</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>19-Feb-24</td><td>Celebal Technology</td><td>4.50</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>05-Mar-24</td><td>Macleods Pharmaceuticals Ltd</td><td>4.00-5.00</td><td>EE/ME/BSc.</td></tr>
                            <tr><td>09-Mar-24</td><td>Cyntexa</td><td>4.50</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>14-Mar-24</td><td>VoiceXP</td><td>5.00</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>20-Mar-24</td><td>NTT DATA Services</td><td>3.00</td><td>All Branches</td></tr>
                            <tr><td>01-Apr-24</td><td>Workspan</td><td>12.00</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>05-Apr-24</td><td>MandleBulb Technology</td><td>3.95</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>05-Apr-24</td><td>ETERNAL HR SERVICES PRIVATE LIMITED</td><td>2.50</td><td>EE/ECE/ME</td></tr>
                            <tr><td>08-Apr-24</td><td>Vanshiv</td><td>4.75</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>20-Apr-24</td><td>DianApps</td><td>3.90</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>22-Apr-24</td><td>Hawkscode</td><td>3.50-6.00</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>26-Apr-24</td><td>Sisecam Flat Glass Indi</td><td>4.50-4.80</td><td>EE/ME/CE</td></tr>
                            <tr><td>27-Apr-24</td><td>DevTechnoSys</td><td>4.58</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>27-Apr-24</td><td>RJ Solar Pvt. Ltd.</td><td>4.00-5.00</td><td>EE/ME</td></tr>
                            <tr><td>30-Apr-24</td><td>Vcosmos (Transcom)</td><td>2.40-3.48</td><td>All Branches</td></tr>
                            <tr><td>30-Apr-24</td><td>HDFC Sales</td><td>3.00-3.60</td><td>All Branches</td></tr>
                            <tr><td>30-Apr-24</td><td>Just Dial</td><td>3.00-3.60</td><td>All Branches</td></tr>
                            <tr><td>08-May-24</td><td>Singularis Ventures</td><td>4.35</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>14-May-24</td><td>ALP Aeroflex (I) Pvt Ltd.</td><td>3.00</td><td>ME/Produ.</td></tr>
                            <tr><td>19-May-24</td><td>Tech Matrix</td><td>4.60</td><td>CSE/CS(AI)/IT</td></tr>
                            <tr><td>21-May-24</td><td>Gabriel India Limited</td><td>3.00</td><td>EE/ME/CE/ECE</td></tr>
                            <tr><td>21-May-24</td><td>Mahle Anand Thermal Systems Private Ltd.</td><td>3.00</td><td>EE/ME/CE/ECE</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div id="y22-23" className={`tab-content ${activeTab === 'y22-23' ? 'active' : ''}`}>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr><th>Date</th><th>Company Name</th><th>CTC (LPA)</th><th>Branch</th></tr>
                        </thead>
                        <tbody>
                             <tr><td>24-Aug-22</td><td>Codetrade (India) Pvt Ltd</td><td>4.00</td><td>CSE/CS(AI)/IT</td></tr>
                             <tr><td>30-Aug-22</td><td>Appcino Technologies</td><td>3.00-6.00</td><td>CSE/CS(AI)/IT</td></tr>
                             <tr><td>01-Sep-22</td><td>Sunshine Automation India Ltd.</td><td>2.50</td><td>EE/ECE</td></tr>
                             <tr><td>27-Sep-22</td><td>Fexle Services Pvt Ltd</td><td>3.75</td><td>CSE/CS(AI)/IT</td></tr>
                             <tr><td>08-Nov-22</td><td>Ultra Tech Cement Ltd</td><td>3.00-6.00</td><td>EE/ME</td></tr>
                             <tr><td>15-Nov-22</td><td>Hire Mee</td><td>3.00-7.00</td><td>All Branches</td></tr>
                             <tr><td>17-Nov-22</td><td>Ultra Tech Cement Ltd</td><td>3.00-6.00</td><td>CE</td></tr>
                             <tr><td>21-Dec-22</td><td>Aloha Technology Pvt Ltd</td><td>3.00-5.00</td><td>CSE/CS(AI)/IT</td></tr>
                             <tr><td>07-Jan-23</td><td>Cyntexa</td><td>4.50</td><td>CSE/CS(AI)/IT</td></tr>
                             <tr><td>20-Jan-23</td><td>Ceasefire Industries Limited</td><td>3.00-4.00</td><td>CSE/CS(AI)/IT</td></tr>
                             <tr><td>21-Jan-23</td><td>Konical India Public Ltd</td><td>11.00</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>03-Feb-23</td><td>BYLD Group</td><td>3.00</td><td>All Branches</td></tr>
                             <tr><td>04-Feb-23</td><td>LEMONVB TECHSOLU PRIVATE LIMITED</td><td>8.00-11.00</td><td>All Branches</td></tr>
                             <tr><td>19-Feb-23</td><td>HCL Technologies</td><td>3.50</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>25-Feb-23</td><td>Sarvika Technologies</td><td>4.50</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>11-Mar-23</td><td>GSPN Technologies</td><td>4.00</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>25-Apr-23</td><td>SDAD Technology</td><td>3.60</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>11-May-23</td><td>Sinduja Finance</td><td>3.50</td><td>All Branches</td></tr>
                             <tr><td>11-May-23</td><td>L& T Finance</td><td>3.45</td><td>All Branches</td></tr>
                             <tr><td>11-May-23</td><td>AU Bank</td><td>4.00</td><td>All Branches</td></tr>
                             <tr><td>11-May-23</td><td>HDB Bank</td><td>4.00</td><td>All Branches</td></tr>
                             <tr><td>11-May-23</td><td>Paisa Buddy</td><td>3.25</td><td>All Branches</td></tr>
                             <tr><td>12-Nov-22</td><td>ABJIMA IT Consulting Pvt. Ltd</td><td>3.60</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>10-Feb-23</td><td>N.K. Buildcon Pvt. Ltd. Jaipur</td><td>3.00-6.00</td><td>All Branches</td></tr>
                             <tr><td>25-Apr-23</td><td>Brudite</td><td>3.50-4.50</td><td>CS/CS(AI)/IT</td></tr>
                             <tr><td>22-Dec-22</td><td>Medtronic</td><td>3.00</td><td>EE/ME</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

             <div id="y21-22" className={`tab-content ${activeTab === 'y21-22' ? 'active' : ''}`}>
                <div style={{ overflowX: 'auto' }}>
                    <table>
                        <thead>
                            <tr><th>Date</th><th>Company Name</th><th>CTC (LPA)</th><th>Branch</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>23-Mar-22</td><td>Hackveda Ltd.</td><td>4.80</td><td>ALL BRANCH</td></tr>
                            <tr><td>22-Mar-22</td><td>Accenture</td><td>6.00</td><td>CSE, IT</td></tr>
                            <tr><td>22-Mar-22</td><td>Infosys</td><td>4.40</td><td>ALL BRANCH</td></tr>
                            <tr><td>17-Mar-22</td><td>Pentagon Space Pvt. Ltd.</td><td>5.30</td><td>ALL BRANCH</td></tr>
                            <tr><td>16-Mar-22</td><td>Parama Hik Vision India Pvt. Ltd.</td><td>3.30</td><td>ALL BRANCH</td></tr>
                            <tr><td>16-Mar-22</td><td>ITC Infotech</td><td>5.50</td><td>ALL BRANCH</td></tr>
                            <tr><td>16-Mar-22</td><td>HireMee</td><td>3.75</td><td>ALL BRANCH</td></tr>
                            <tr><td>15-Mar-22</td><td>Talentsprint</td><td>5.00</td><td>ALL BRANCH (Girls)</td></tr>
                            <tr><td>14-Mar-22</td><td>Channel4</td><td>8.00</td><td>ALL BRANCH</td></tr>
                            <tr><td>14-Mar-22</td><td>Career Net</td><td>3.10</td><td>CSE, IT</td></tr>
                            <tr><td>14-Mar-22</td><td>Ericsson</td><td>3.45</td><td>ALL BRANCH</td></tr>
                            <tr><td>13-Mar-22</td><td>Factset</td><td>6.00</td><td>ALL BRANCH</td></tr>
                            <tr><td>12-Mar-22</td><td>Concentrix</td><td>7.20</td><td>ALL BRANCH</td></tr>
                            <tr><td>11-Mar-22</td><td>Genpact</td><td>3.20</td><td>ALL BRANCH</td></tr>
                            <tr><td>11-Mar-22</td><td>Exposys Data Systems</td><td>3.60</td><td>ALL BRANCH</td></tr>
                            <tr><td>10-Mar-22</td><td>Intersoft Data Labs Solution Pvt. Ltd.</td><td>8.00</td><td>ALL BRANCH</td></tr>
                            <tr><td>7-Mar-22</td><td>Talent Battle</td><td>6.66</td><td>ALL BRANCH</td></tr>
                            <tr><td>7-Mar-22</td><td>Intern Shala</td><td>3.80</td><td>ALL BRANCH</td></tr>
                            <tr><td>2-Mar-22</td><td>Code Shef</td><td>4.50</td><td>ALL BRANCH</td></tr>
                            <tr><td>28-Feb-22</td><td>Virtusa Consulting Services</td><td>6.50</td><td>ALL BRANCH</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default Placements;