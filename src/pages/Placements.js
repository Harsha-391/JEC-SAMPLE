import React, { useState } from 'react';

function Placements() {
  // This state will track which tab is active. 'Y2025' is the default.
  const [activeTab, setActiveTab] = useState('Y2025');

  // This function will be called by the tab buttons
  const openYear = (yearName) => {
    setActiveTab(yearName);
  };

  return (
    // This wrapper class will scope all the new CSS
    <div className="placements-page-v2">

      <section className="hero-banner">
        <div className="max-width-container">
          <h1>Placement Glory</h1>
          <p>The Future of our Students is our First Priority. Discover Life after JEC.</p>
        </div>
      </section>

      <section className="stats-banner">
        <div className="max-width-container stats-grid">
          <div className="stat-card">
            <h2>94%</h2>
            <p>Placement Rate</p>
          </div>
          <div className="stat-card">
            <h2>500+</h2>
            <p>Companies Visited</p>
          </div>
          <div className="stat-card">
            <h2>₹ 69 LPA</h2>
            <p>Highest Package</p>
          </div>
          <div className="stat-card">
            <h2>7300+</h2>
            <p>Alumni Network</p>
          </div>
        </div>
      </section>

      <section className="logo-cloud-section">
        <div className="max-width-container">
          <h2 className="section-title">Our Top Recruiters</h2>
          <div className="logo-grid">
            {/* TODO: Replace all these placeholders with your images 
              from the /public/images/ folder.
              Example: <img src="/images/infosys.png" alt="Infosys" />
            */}
            <img src="https://via.placeholder.com/150x60?text=Infosys" alt="Infosys" />
            <img src="https://via.placeholder.com/150x60?text=Wipro" alt="Wipro" />
            <img src="https://via.placeholder.com/150x60?text=Accenture" alt="Accenture" />
            <img src="https://via.placeholder.com/150x60?text=TCS" alt="TCS" />
            <img src="https://via.placeholder.com/150x60?text=Capgemini" alt="Capgemini" />
            <img src="https://via.placeholder.com/150x60?text=Byjus" alt="Byjus" />
            <img src="https://via.placeholder.com/150x60?text=HCL" alt="HCL" />
            <img src="https://via.placeholder.com/150x60?text=Amazon" alt="Amazon" />
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="max-width-container">
          <h2 className="section-title">Life After JEC</h2>
          <div className="testimonial-grid">
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"JEC provided me with the best opportunities. The placement cell was incredibly supportive, and I am grateful for the 360-degree support that helped me land my dream job."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Aarav Sharma</h4>
                  <p className="course">B.Tech, CSE (2018-22)</p>
                </div>
              </div>
            </div>
            <div className="t-card">
              <i className="fas fa-quote-left quote-icon"></i>
              <p className="quote-text">"The faculty at JEC is top-notch. Their mentorship and the advanced curriculum were key to my success. The 'Karma Courses' provided real-world skills that were invaluable."</p>
              <div className="student-info">
                <div className="student-avatar"><i className="fas fa-user"></i></div>
                <div className="student-details">
                  <h4>Priya Singh</h4>
                  <p className="course">B.Tech, ECE (2017-21)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="placement-data-section">
        <div className="max-width-container">
          <h2 className="section-title">Placement Records by Year</h2>
          
          <div className="tab-container">
            <button 
              className={`tab-btn ${activeTab === 'Y2025' ? 'active' : ''}`} 
              onClick={() => openYear('Y2025')}
            >
              2025 Batch
            </button>
            <button 
              className={`tab-btn ${activeTab === 'Y2024' ? 'active' : ''}`} 
              onClick={() => openYear('Y2024')}
            >
              2024 Batch
            </button>
            <button 
              className={`tab-btn ${activeTab === 'Y2023' ? 'active' : ''}`} 
              onClick={() => openYear('Y2023')}
            >
              2023 Batch
            </button>
            <button 
              className={`tab-btn ${activeTab === 'Y2022' ? 'active' : ''}`} 
              onClick={() => openYear('Y2022')}
            >
              2022 Batch
            </button>
          </div>

          {/* --- 2025 Content --- */}
          <div 
            id="Y2025" 
            className={`tab-content ${activeTab === 'Y2025' ? 'active' : ''}`}
          >
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Company Name</th>
                    <th>Package (LPA)</th>
                    <th>Branch</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Data for 2025 */}
                  <tr><td>12-Sep-24</td><td>Infosys (HackWithInfy)</td><td>9.50</td><td>CSE</td></tr>
                  <tr><td>10-Sep-24</td><td>Wipro (Elite)</td><td>6.50</td><td>ALL BRANCH</td></tr>
                  <tr><td>5-Sep-24</td><td>Accenture</td><td>7.00</td><td>CSE/IT/ECE</td></tr>
                  <tr><td>1-Sep-24</td><td>TCS (Digital)</td><td>7.20</td><td>ALL BRANCH</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* --- 2024 Content --- */}
          <div 
            id="Y2024" 
            className={`tab-content ${activeTab === 'Y2024' ? 'active' : ''}`}
          >
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>Date</th><th>Company Name</th><th>Package (LPA)</th><th>Branch</th></tr>
                </thead>
                <tbody>
                  {/* Data for 2024 */}
                  <tr><td>15-Oct-23</td><td>Capgemini</td><td>4.00</td><td>ALL BRANCH</td></tr>
                  <tr><td>10-Oct-23</td><td>Cognizant</td><td>4.50</td><td>CSE/IT</td></tr>
                  <tr><td>5-Oct-23</td><td>Byjus</td><td>10.00</td><td>ALL BRANCH</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* --- 2023 Content --- */}
          <div 
            id="Y2023" 
            className={`tab-content ${activeTab === 'Y2023' ? 'active' : ''}`}
          >
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>Date</th><th>Company Name</th><th>Package (LPA)</th><th>Branch</th></tr>
                </thead>
                <tbody>
                  {/* Data for 2023 */}
                  <tr><td>22-Nov-22</td><td>Celebal Technologies</td><td>5.00</td><td>CSE/IT</td></tr>
                  <tr><td>15-Nov-22</td><td>HCL Technologies</td><td>4.25</td><td>ALL BRANCH</td></tr>
                  <tr><td>10-Nov-22</td><td>Amazon</td><td>69.00</td><td>CSE</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* --- 2022 Content --- */}
          <div 
            id="Y2022" 
            className={`tab-content ${activeTab === 'Y2022' ? 'active' : ''}`}
          >
            <div className="table-container">
              <table>
                <thead>
                  <tr><th>Date</th><th>Company Name</th><th>Package (LPA)</th><th>Branch</th></tr>
                </thead>
                <tbody>
                  {/* Data for 2022 */}
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
    </div>
  );
}

export default Placements;