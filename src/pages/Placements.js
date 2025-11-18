import React, { useState } from 'react';
// CSS is imported in App.js via App.css, so no individual import needed if App.css is global.
// If you need to import specifically: import '../App.css';

function Placements() {
  const [activeTab, setActiveTab] = useState('y24-25');

  const openYear = (yearName) => {
    setActiveTab(yearName);
  };

  return (
    <div className="placement-page-wrapper">
      {/* Navbar */}
      <nav className="pg-navbar">
        <div className="pg-logo">
          <i className="fas fa-university"></i> JEC Placement Cell
        </div>
      </nav>

      {/* Hero */}
      <header className="pg-hero">
        <h1>Placement Glory</h1>
        <p>Catapulting Careers • Life After JEC</p>
      </header>

      {/* Stats - This is the section you wanted fixed with boxes */}
      <div className="pg-stats-container">
        <div className="pg-stats-grid">
          <div className="pg-stat-card">
            <div className="pg-stat-value">94%+</div>
            <div className="pg-stat-label">Placement Rate</div>
          </div>
          <div className="pg-stat-card">
            <div className="pg-stat-value">1.56 Cr</div>
            <div className="pg-stat-label">Highest Package</div>
          </div>
          <div className="pg-stat-card">
            <div className="pg-stat-value">4300+</div>
            <div className="pg-stat-label">Total Placements</div>
          </div>
          <div className="pg-stat-card">
            <div className="pg-stat-value">550+</div>
            <div className="pg-stat-label">Active Recruiters</div>
          </div>
        </div>
      </div>

      <div className="pg-container">

        {/* Narrative */}
        <div className="pg-content-grid">
          <div className="pg-narrative-text">
            <h2>Catapulting Careers</h2>
            <p>As hard as it might be to imagine sometimes, there is life after JEC, as shown by the <strong>~10,000+ JEC alumni</strong> living around the world. Jaipur Engineering College (JEC) is making new strides in placements of its students in top notch brands every year.</p>
            <p>For the last three years, JEC has set the highest placement record, and the academic year 2021-25 too proved no different. Crossing the mark of expected placement drives & offers, this year proved job-productive for JEC students not only in number but quality placement also.</p>
            <p>Presently JEC students are working world-wide with prestigious global companies like Google, Microsoft, Apple, Amazon, Infosys, Triumph, Cape Electric and many more. JEC is closely associated with a few brands. These brands consider JEC as ‘One Stop Solution’ for industry ready human resource.</p>
            
            <div className="pg-chairman-quote">
              <i className="fas fa-quote-left" style={{fontSize:'1.5rem', marginBottom:'10px', display:'block'}}></i>
              "We know that great universities world over are known by their successful alumni, and we are proud to share that the placement of JEC students are on rise day by day. This success is really our Placement Glory."
              <div style={{marginTop:'10px', fontWeight:'700'}}>— Shri L C Saraogi, Chairman</div>
            </div>
          </div>
          <div>
            <h3 style={{marginBottom:'1.5rem'}}>Top Placements, Recruiters & Outreach</h3>
            <p style={{fontSize:'0.95rem', color:'var(--pg-text-muted)', marginBottom:'1rem'}}>
              Presently, 300+ JEC students are also working on ‘Live Projects’ directly with the Industry like Infosys, Delta Powers, Teksystems, Decathlons, Sony, Future Group, DCB Bank, Oyo Rooms, PayTm and many more.
            </p>
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" style={{width:'100%', borderRadius:'12px', boxShadow:'0 4px 20px rgba(0,0,0,0.05)'}} alt="Corporate Meeting" />
          </div>
        </div>

        {/* Gold Cards */}
        <div className="pg-section-header">
          <h2>Star <span>Achievers</span></h2>
          <p style={{color:'var(--pg-text-muted)'}}>Breaking Barriers & Setting New Benchmarks</p>
        </div>

        <div className="pg-gold-grid">
          <div className="pg-gold-card">
            <img src="https://randomuser.me/api/portraits/men/11.jpg" className="pg-student-img-lg" alt="Student" />
            <div className="pg-gold-name">Sunil Agarwal</div>
            <div className="pg-gold-company">Cisco</div>
            <div className="pg-gold-package">1.56 Cr</div>
          </div>
          <div className="pg-gold-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="pg-student-img-lg" alt="Student" />
            <div className="pg-gold-name">Brijesh Dhanker</div>
            <div className="pg-gold-company">UBS Group AG</div>
            <div className="pg-gold-package">80 LPA</div>
          </div>
          <div className="pg-gold-card">
            <img src="https://randomuser.me/api/portraits/men/45.jpg" className="pg-student-img-lg" alt="Student" />
            <div className="pg-gold-name">Sandip Bose</div>
            <div className="pg-gold-company">TVS Motors</div>
            <div className="pg-gold-package">46 LPA</div>
          </div>
          <div className="pg-gold-card">
            <img src="https://randomuser.me/api/portraits/men/22.jpg" className="pg-student-img-lg" alt="Student" />
            <div className="pg-gold-name">Ankit Shrivastava</div>
            <div className="pg-gold-company">Wipro</div>
            <div className="pg-gold-package">25 LPA</div>
          </div>
        </div>

        <div className="pg-section-header" style={{marginTop:'0'}}>
          <h2>Placement <span>Gallery</span></h2>
          <p style={{color:'var(--pg-text-muted)'}}>Celebrating our placed students</p>
        </div>

        <div className="pg-achievers-grid" id="studentGrid">
          {/* Premium Cards */}
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/1.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Junhaid Khan</div><div className="pg-ac-comp">Jakson Green Pvt. Ltd.</div><div className="pg-ac-pkg">20.40 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/2.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Dashrath Singh Kavia</div><div className="pg-ac-comp">SalesForce</div><div className="pg-ac-pkg">19 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/3.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Gaurav Verma</div><div className="pg-ac-comp">Technip Energies</div><div className="pg-ac-pkg">17 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/4.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Yashmit Sharma</div><div className="pg-ac-comp">Synopsys, Inc.</div><div className="pg-ac-pkg">15.3 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/5.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Piyush Rajliwal</div><div className="pg-ac-comp">BOSCH Jaipur</div><div className="pg-ac-pkg">12 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/6.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Ramkishan</div><div className="pg-ac-comp">EoxysiIT</div><div className="pg-ac-pkg">12 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/men/7.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Kshitij Mathur</div><div className="pg-ac-comp">HabileLabs Pvt Ltd</div><div className="pg-ac-pkg">12 LPA</div></div>
          <div className="pg-achiever-card pg-premium"><img src="https://randomuser.me/api/portraits/women/8.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Aishwarya</div><div className="pg-ac-comp">BuildMart PVT. LTD.</div><div class="pg-ac-pkg">10 LPA</div></div>

          {/* Standard Cards */}
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/9.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Himanshu Kumar</div><div className="pg-ac-comp">Pinnacle Infotech</div><div className="pg-ac-pkg">9.5 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/10.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Shivam Shekhar Jha</div><div className="pg-ac-comp">WHITEHAT JR</div><div className="pg-ac-pkg">9.5 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/women/11.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Ranchi Nandwaniya</div><div className="pg-ac-comp">C-Maze PMC</div><div className="pg-ac-pkg">9.5 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/12.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Junhaid Khan</div><div className="pg-ac-comp">Adani Green Energy</div><div className="pg-ac-pkg">8.60 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/13.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Naman Singh</div><div className="pg-ac-comp">Logzero Technologies</div><div className="pg-ac-pkg">8 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/14.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Ravikant</div><div className="pg-ac-comp">Swaraa Tech Solutions</div><div className="pg-ac-pkg">7.5 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/15.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Swami Raj</div><div className="pg-ac-comp">Beta Arrays Pvt. Ltd.</div><div className="pg-ac-pkg">7.5 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/16.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Sachin Rajput</div><div className="pg-ac-comp">Celebal Technologies</div><div className="pg-ac-pkg">7 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/women/17.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Khushi Sharma</div><div className="pg-ac-comp">Celebal Technologies</div><div className="pg-ac-pkg">7 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/women/18.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Aishwarya Laxmi</div><div className="pg-ac-comp">CRESCENTIA INDIA</div><div className="pg-ac-pkg">7 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/19.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Vinay Rawal</div><div className="pg-ac-comp">Matellio</div><div className="pg-ac-pkg">7 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/women/20.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Khushbu Sen</div><div className="pg-ac-comp">Byjus</div><div className="pg-ac-pkg">6.75 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/21.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Nikhil Raj</div><div className="pg-ac-comp">Byjus</div><div className="pg-ac-pkg">6.75 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/22.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Deepak Meena</div><div className="pg-ac-comp">ZUCOL Group</div><div className="pg-ac-pkg">6.50 LPA</div></div>
          <div className="pg-achiever-card"><img src="https://randomuser.me/api/portraits/men/23.jpg" className="pg-student-img" alt="" /><div className="pg-ac-name">Ravi Ranjan Thakur</div><div className="pg-ac-comp">ZUCOL Group</div><div className="pg-ac-pkg">6.50 LPA</div></div>
        </div>

        <div className="pg-section-header">
          <h2>Placement Drives</h2>
          <div className="pg-section-line" style={{maxWidth:'200px', margin:'10px auto', height:'4px', background:'var(--pg-gold)'}}></div>
        </div>

        <div className="pg-tabs-wrapper">
          <div className="pg-tabs-nav">
            <button 
              className={`pg-tab-btn ${activeTab === 'y24-25' ? 'active' : ''}`} 
              onClick={() => openYear('y24-25')}
            >
              2024-25
            </button>
            <button 
              className={`pg-tab-btn ${activeTab === 'y23-24' ? 'active' : ''}`} 
              onClick={() => openYear('y23-24')}
            >
              2023-24
            </button>
            <button 
              className={`pg-tab-btn ${activeTab === 'y22-23' ? 'active' : ''}`} 
              onClick={() => openYear('y22-23')}
            >
              2022-23
            </button>
            <button 
              className={`pg-tab-btn ${activeTab === 'y21-22' ? 'active' : ''}`} 
              onClick={() => openYear('y21-22')}
            >
              2021-22
            </button>
          </div>

          {/* 2024-25 Content */}
          <div className={`pg-tab-content ${activeTab === 'y24-25' ? 'active' : ''}`}>
            <div style={{overflowX:'auto'}}>
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
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* 2023-24 Content */}
          <div className={`pg-tab-content ${activeTab === 'y23-24' ? 'active' : ''}`}>
            <div style={{overflowX:'auto'}}>
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
                </tbody>
              </table>
            </div>
          </div>

          {/* 2022-23 Content */}
          <div className={`pg-tab-content ${activeTab === 'y22-23' ? 'active' : ''}`}>
             <div style={{overflowX:'auto'}}>
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
                </tbody>
              </table>
            </div>
          </div>

           {/* 2021-22 Content */}
           <div className={`pg-tab-content ${activeTab === 'y21-22' ? 'active' : ''}`}>
            <div style={{overflowX:'auto'}}>
              <table>
                <thead>
                  <tr><th>Date</th><th>Company Name</th><th>CTC (LPA)</th><th>Branch</th></tr>
                </thead>
                <tbody>
                    <tr><td>23-Mar-22</td><td>Hackveda Ltd.</td><td>4.80</td><td>ALL BRANCH</td></tr>
                    <tr><td>22-Mar-22</td><td>Accenture</td><td>6.00</td><td>CSE, IT</td></tr>
                    <tr><td>22-Mar-22</td><td>Infosys</td><td>4.40</td><td>ALL BRANCH</td></tr>
                    <tr><td>17-Mar-22</td><td>Pentagon Space Pvt. Ltd.</td><td>5.30</td><td>ALL BRANCH</td></tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

    </div>

    <footer className="pg-footer">
        <p>&copy; 2025 Jaipur Engineering College (JEC). All Rights Reserved.</p>
    </footer>

    </div>
  );
}

export default Placements;