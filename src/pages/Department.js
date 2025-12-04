import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase'; // Ensure this points to your firebase config
import { doc, getDoc } from 'firebase/firestore';

function Department() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 1. Get the current URL path (e.g., "/JEC-engineering/Civil-Engineering")
  const location = useLocation();

  useEffect(() => {
    const fetchDepartmentData = async () => {
      setLoading(true);
      try {
        // 2. Extract the ID from the URL (getting the last part after the slash)
      // NEW SAFER CODE
// 1. Remove trailing slash if it exists
const cleanPath = location.pathname.replace(/\/$/, '');
// 2. Get the last segment
const pathSegments = cleanPath.split('/');
const deptId = decodeURIComponent(pathSegments[pathSegments.length - 1]);

console.log("Cleaned ID to fetch:", deptId); // Check this log!
        console.log("Fetching data for:", deptId); // Debugging

        // 3. Fetch specific document from 'departments' collection
        const docRef = doc(db, "departments", deptId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.error("No such department found!");
          setData(null); // Handle "Not Found" case
        }
      } catch (error) {
        console.error("Error fetching department:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentData();
  }, [location]); // Re-run this if the user clicks a different department link

  // --- LOADER ---
  if (loading) {
    return <div style={{padding:"100px", textAlign:"center", fontSize:"1.5rem"}}>Loading Department Details...</div>;
  }

  // --- NOT FOUND STATE ---
  if (!data) {
    return <div style={{padding:"100px", textAlign:"center"}}><h2>Department Not Found</h2><p>Please check the URL or contact admin.</p></div>;
  }

  return (
    <div className="dept-page-wrapper">
      
      {/* HERO SECTION */}
      <header className="dept-hero">
          <h1 className="dept-animated-section">{data.title}</h1>
          <p className="dept-animated-section" style={{animationDelay: '0.1s'}}>{data.subtitle}</p>
          <div className="badge dept-animated-section" style={{animationDelay: '0.2s'}}>Approved by AICTE, New Delhi</div>
      </header>

      {/* STATS GRID */}
      <div className="dept-stats-container">
          <div className="dept-stats-grid">
              {data.stats && data.stats.map((stat, index) => (
                  <div className="dept-stat-card dept-animated-section" style={{animationDelay: `0.${index+3}s`}} key={index}>
                      <div className="dept-stat-icon"><i className={stat.icon}></i></div>
                      <div className="dept-stat-label">{stat.label}</div>
                  </div>
              ))}
          </div>
      </div>

      <div className="dept-container">

          {/* INTRO SECTION */}
          <div className="dept-section-split dept-animated-section">
              <div className="dept-text-block">
                  <h3>{data.about_title || "About the Course"}</h3>
                  <p>{data.about_text}</p>
              </div>
              <div className="dept-img-block">
                  <img src={data.about_image || "https://via.placeholder.com/600"} alt="Department Feature" />
              </div>
          </div>

          {/* PARALLAX SECTION (Optional: You can make this dynamic too) */}
          <div className="dept-parallax-section dept-animated-section">
              <div className="dept-parallax-content">
                  <h3>The JEC Edge</h3>
                  <p>Our program is designed to bridge the gap between academic concepts and industry requirements, ensuring every student is future-ready.</p>
              </div>
          </div>

          {/* TABS SECTION */}
          <div className="dept-section-header dept-animated-section">
              <span>Course Goals</span>
              <h2>Aims & Objectives</h2>
          </div>
          
          <div className="dept-tabs-container dept-animated-section">
              <div className="dept-tabs-nav">
                  <button className={`dept-tab-btn ${activeTab === 'tab-1' ? 'active' : ''}`} onClick={() => setActiveTab('tab-1')}>Core Knowledge</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-2' ? 'active' : ''}`} onClick={() => setActiveTab('tab-2')}>Professional Skills</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-3' ? 'active' : ''}`} onClick={() => setActiveTab('tab-3')}>Advanced Application</button>
              </div>
              
              {/* TAB 1 CONTENT */}
              <div className={`dept-tab-content ${activeTab === 'tab-1' ? 'active' : ''}`}>
                  <div className="dept-tab-grid">
                      {data.tabs && data.tabs.tab1 && data.tabs.tab1.map((item, idx) => (
                          <div className="dept-tab-card" key={idx}>
                              <div className="dept-tab-icon"><i className={item.icon}></i></div>
                              <p>{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>

              {/* TAB 2 CONTENT */}
              <div className={`dept-tab-content ${activeTab === 'tab-2' ? 'active' : ''}`}>
                  <div className="dept-tab-grid">
                      {data.tabs && data.tabs.tab2 && data.tabs.tab2.map((item, idx) => (
                          <div className="dept-tab-card" key={idx}>
                              <div className="dept-tab-icon"><i className={item.icon}></i></div>
                              <p>{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>

               {/* TAB 3 CONTENT */}
               <div className={`dept-tab-content ${activeTab === 'tab-3' ? 'active' : ''}`}>
                  <div className="dept-tab-grid">
                      {data.tabs && data.tabs.tab3 && data.tabs.tab3.map((item, idx) => (
                          <div className="dept-tab-card" key={idx}>
                              <div className="dept-tab-icon"><i className={item.icon}></i></div>
                              <p>{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>
          </div>

          {/* KEY SUBJECTS & CAREERS */}
          <div className="dept-section-split dept-animated-section" style={{marginTop:"3rem"}}>
              <div>
                  <h3>Key Subjects</h3>
                  <div className="dept-pill-grid">
                      {data.subjects && data.subjects.map((sub, i) => (
                          <div className="dept-pill" key={i}>{sub}</div>
                      ))}
                  </div>
              </div>
              <div>
                  <h3>Career Prospects</h3>
                  <div className="dept-pill-grid">
                      {data.careers && data.careers.map((career, i) => (
                          <div className="dept-pill dept-pill-hot" key={i}>{career}</div>
                      ))}
                  </div>
              </div>
          </div>

          <div className="dept-cta-box dept-animated-section">
              <div className="dept-cta-split">
                  <div>
                      <h3>Eligibility & How to Apply</h3>
                      <p style={{color:'var(--dept-text-muted)', marginBottom: '1rem'}}>
                          <strong>Degree: 4 Years / 8 Semesters</strong><br/>
                          {data.eligibility || "Pass in 10+2 with Physics and Mathematics as compulsory subjects."}
                      </p>
                  </div>
                  <div className="dept-cta-action">
                      <a href="/admissions" className="dept-cta-btn">Apply Now</a>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Department;