import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { Helmet } from 'react-helmet-async'; 

function Department() {
  const [activeTab, setActiveTab] = useState('tab-1');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation();

  useEffect(() => {
    const fetchDepartmentData = async () => {
      setLoading(true);
      try {
        const cleanPath = location.pathname.replace(/\/$/, '');
        const pathSegments = cleanPath.split('/');
        const urlSlug = decodeURIComponent(pathSegments[pathSegments.length - 1]);

        console.log("Searching for Department with slug:", urlSlug);

        const q = query(
          collection(db, "departments"), 
          where("slug", "==", urlSlug)
        );
        
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setData(docData);
        } else {
          console.error("No department found with this slug.");
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching department:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentData();
  }, [location]);

  if (loading) {
    return <div style={{padding:"100px", textAlign:"center", fontSize:"1.5rem"}}>Loading Department Details...</div>;
  }

  if (!data) {
    return (
      <div style={{padding:"100px", textAlign:"center"}}>
        <h2>Department Not Found</h2>
        <p>Could not find data for this link. Please check the Admin Panel "Slug".</p>
      </div>
    );
  }

  return (
    <div className="dept-page-wrapper">
      <Helmet>
        <title>{data.title || data.name} | Jaipur Engineering College</title>
        <meta name="description" content={data.about ? data.about.substring(0, 150) : "Department details at JEC Jaipur"} />
      </Helmet>
      
      {/* HERO SECTION */}
      <header className="dept-hero" style={{backgroundImage: `url(${data.bannerImage || '/images/hero.jpg'})`}}>
          <div style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.6)', zIndex:0}}></div>
          <div style={{position:'relative', zIndex:1}}>
            <h1 className="dept-animated-section">{data.title || data.name}</h1>
            <p className="dept-animated-section" style={{animationDelay: '0.1s'}}>{data.subtitle || "Shaping Future Innovators"}</p>
            <div className="badge dept-animated-section" style={{animationDelay: '0.2s'}}>Approved by AICTE, New Delhi</div>
          </div>
      </header>

      {/* STATS GRID */}
      <div className="dept-stats-container">
          <div className="dept-stats-grid">
              {(data.stats || []).map((stat, index) => (
                  <div className="dept-stat-card dept-animated-section" style={{animationDelay: `0.${index+3}s`}} key={index}>
                      <div className="dept-stat-icon"><i className={stat.icon || "fas fa-star"}></i></div>
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
                  <div dangerouslySetInnerHTML={{ __html: data.about }} />
              </div>
              <div className="dept-img-block">
                  <img 
                    src={data.aboutImage || "https://via.placeholder.com/600x400?text=About+Image+Not+Set"} 
                    alt="About Department" 
                  />
              </div>
          </div>

          {/* HOD MESSAGE SECTION */}
          {data.hodName && (
            <div className="dept-section-split dept-animated-section" style={{marginTop:'3rem', background:'#f9f9f9', padding:'2rem', borderRadius:'10px'}}>
               <div className="dept-img-block">
                  <img 
                    src={data.hodImage || "https://via.placeholder.com/150?text=HOD"} 
                    alt={data.hodName} 
                    style={{borderRadius:'10px', maxHeight:'300px', objectFit:'cover'}} 
                  />
              </div>
              <div className="dept-text-block">
                  <h3>Head of Department</h3>
                  <h4>{data.hodName}</h4>
                  <p><em>"{data.hodMessage}"</em></p>
              </div>
            </div>
          )}

          {/* --- NEW TABS SECTION --- */}
          <div className="dept-section-header dept-animated-section">
              <span>Course Curriculum</span>
              <h2>Program Outcomes</h2>
          </div>
          
          <div className="dept-tabs-container dept-animated-section">
              <div className="dept-tabs-nav">
                  <button className={`dept-tab-btn ${activeTab === 'tab-1' ? 'active' : ''}`} onClick={() => setActiveTab('tab-1')}>Core Knowledge</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-2' ? 'active' : ''}`} onClick={() => setActiveTab('tab-2')}>Professional Skills</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-3' ? 'active' : ''}`} onClick={() => setActiveTab('tab-3')}>Advanced Application</button>
              </div>
              
              {/* Tab 1: Core Knowledge */}
              <div className={`dept-tab-content ${activeTab === 'tab-1' ? 'active' : ''}`}>
                 {/* Render HTML content from Quill Editor */}
                 <div dangerouslySetInnerHTML={{ __html: data.coreKnowledge || "<p>Content coming soon...</p>" }} />
              </div>

              {/* Tab 2: Professional Skills */}
              <div className={`dept-tab-content ${activeTab === 'tab-2' ? 'active' : ''}`}>
                 <div dangerouslySetInnerHTML={{ __html: data.professionalSkills || "<p>Content coming soon...</p>" }} />
              </div>

               {/* Tab 3: Advanced Application */}
               <div className={`dept-tab-content ${activeTab === 'tab-3' ? 'active' : ''}`}>
                 <div dangerouslySetInnerHTML={{ __html: data.advancedApplication || "<p>Content coming soon...</p>" }} />
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