import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { Helmet } from 'react-helmet-async'; 
import './Department.css'; 

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

        const q = query(collection(db, "departments"), where("slug", "==", urlSlug));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setData(querySnapshot.docs[0].data());
        } else {
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

  // Scroll Animations
  useEffect(() => {
    if (!data) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.dept-animated-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [data]);

  if (loading) return <div style={{padding:"100px", textAlign:"center"}}>Loading...</div>;
  if (!data) return <div style={{padding:"100px", textAlign:"center"}}><h2>Department Not Found</h2></div>;

  const getPills = (str) => str ? str.split(',').map(s => s.trim()) : [];

  return (
    <div className="dept-page-wrapper">
      <Helmet>
        <title>{data.title || data.name || "JEC Department"} | Jaipur Engineering College</title>
        <meta name="description" content={data.subtitle || "Department details at JEC Jaipur"} />
      </Helmet>

      {/* HERO */}
      <header className="dept-hero" style={{backgroundImage: `linear-gradient(rgba(0, 114, 198, 0.9), rgba(0, 50, 100, 0.8)), url(${data.bannerImage || '/images/hero.jpg'})`}}>
          <h1 className="dept-animated-section">{data.title || data.name}</h1>
          <p className="dept-animated-section" style={{animationDelay: '0.1s'}}>
            {data.subtitle}
          </p>
          <div className="badge dept-animated-section" style={{animationDelay: '0.2s'}}>Approved by AICTE, New Delhi</div>
      </header>

      {/* STATS (Static for now, as requested) */}
      <div className="dept-stats-container">
          <div className="dept-stats-grid">
               <div className="dept-stat-card dept-animated-section"><div className="dept-stat-icon"><i className="fas fa-laptop-code"></i></div><div className="dept-stat-label">Core Competencies</div></div>
               <div className="dept-stat-card dept-animated-section"><div className="dept-stat-icon"><i className="fas fa-sync-alt"></i></div><div className="dept-stat-label">Evolving Curriculum</div></div>
               <div className="dept-stat-card dept-animated-section"><div className="dept-stat-icon"><i className="fas fa-shield-alt"></i></div><div className="dept-stat-label">Secure Career</div></div>
               <div className="dept-stat-card dept-animated-section"><div className="dept-stat-icon"><i className="fas fa-briefcase"></i></div><div className="dept-stat-label">Industry Ready</div></div>
          </div>
      </div>

      <div className="dept-container">

          {/* INTRO */}
          <div className="dept-section-split dept-animated-section">
              <div className="dept-text-block">
                  <h3>{data.about_title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: data.about || "" }} />
              </div>
              <div className="dept-img-block">
                  <img src={data.aboutImage || "https://via.placeholder.com/600x400?text=JEC+Department"} alt="About" />
              </div>
          </div>

          {/* PARALLAX */}
          {data.parallaxTitle && (
            <div className="dept-parallax-section dept-animated-section" style={{backgroundImage: `url(${data.parallaxImage || '/images/hero.jpg'})`}}>
                <div className="dept-parallax-overlay"></div>
                <div className="dept-parallax-content">
                    <h3>{data.parallaxTitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: data.parallaxDesc || "" }} />
                </div>
            </div>
          )}

          {/* TABS */}
          <div className="dept-section-header dept-animated-section">
              <span>Course Goals</span>
              <h2>Program Outcomes</h2>
          </div>
          
          <div className="dept-tabs-container dept-animated-section">
              <div className="dept-tabs-nav">
                  <button className={`dept-tab-btn ${activeTab === 'tab-1' ? 'active' : ''}`} onClick={() => setActiveTab('tab-1')}>Core Knowledge</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-2' ? 'active' : ''}`} onClick={() => setActiveTab('tab-2')}>Professional Skills</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-3' ? 'active' : ''}`} onClick={() => setActiveTab('tab-3')}>Advanced Application</button>
              </div>
              
              <div className={`dept-tab-content ${activeTab === 'tab-1' ? 'active' : ''}`}>
                 <div dangerouslySetInnerHTML={{ __html: data.coreKnowledge || "<p>Information available soon.</p>" }} />
              </div>
              <div className={`dept-tab-content ${activeTab === 'tab-2' ? 'active' : ''}`}>
                 <div dangerouslySetInnerHTML={{ __html: data.professionalSkills || "<p>Information available soon.</p>" }} />
              </div>
              <div className={`dept-tab-content ${activeTab === 'tab-3' ? 'active' : ''}`}>
                 <div dangerouslySetInnerHTML={{ __html: data.advancedApplication || "<p>Information available soon.</p>" }} />
              </div>
          </div>

          {/* MID BANNER */}
          {data.midBannerImage && (
            <div className="dept-banner-img-block dept-animated-section">
                <img src={data.midBannerImage} alt="Feature Banner" />
            </div>
          )}

          {/* AUDIENCE */}
          <div className="dept-audience-grid dept-animated-section">
              <div className="dept-audience-card">
                  <h4><i className="fas fa-book" style={{color:'var(--jec-red)'}}></i> {data.audienceTitle1 || "The Foundational Learner"}</h4>
                  <p>{data.audienceDesc1 || "For individuals seeking a solid theoretical foundation."}</p>
              </div>
              <div className="dept-audience-card">
                  <h4><i className="fas fa-briefcase" style={{color:'var(--jec-gold)'}}></i> {data.audienceTitle2 || "The Career-Builder"}</h4>
                  <p>{data.audienceDesc2 || "For students looking for exceptional career prospects."}</p>
              </div>
          </div>

          {/* PILLS */}
          <div className="dept-section-split dept-animated-section">
              <div>
                  <h3>Key Subjects</h3>
                  <div className="dept-pill-grid">
                      {getPills(data.keySubjects).length > 0 ? getPills(data.keySubjects).map((sub, i) => (
                          <div className="dept-pill" key={i}>{sub}</div>
                      )) : <p style={{color:'#666'}}>Curriculum details coming soon.</p>}
                  </div>
              </div>
              <div>
                  <h3>Career Prospects</h3>
                  <div className="dept-pill-grid">
                      {getPills(data.careerProspects).length > 0 ? getPills(data.careerProspects).map((car, i) => (
                          <div className={`dept-pill ${i < 3 ? 'dept-pill-hot' : ''}`} key={i}>{car}</div>
                      )) : <p style={{color:'#666'}}>Career details coming soon.</p>}
                  </div>
              </div>
          </div>

          {/* COMPANIES */}
          {data.companiesImage && (
             <>
                <div className="dept-section-header dept-animated-section">
                    <span>Join the Revolution</span>
                    <h2>Leading Companies</h2>
                </div>
                <div className="dept-img-block dept-animated-section" style={{padding: '2rem', background: 'white'}}>
                    <img src={data.companiesImage} alt="Companies" />
                </div>
             </>
          )}

          {/* CTA */}
          <div className="dept-cta-box dept-animated-section">
              <div className="dept-cta-split">
                  <div>
                      <h3>Eligibility & How to Apply</h3>
                      <div dangerouslySetInnerHTML={{ __html: data.eligibility || "<p>Contact admission cell for details.</p>" }} style={{color:'var(--text-muted)', marginBottom:'1rem'}} />
                      <h4 style={{color:'var(--text-main)', marginTop:'1rem'}}>SPEAK, DISCUSS & MEET YOUR COUNSELOR!</h4>
                  </div>
                  <div className="dept-cta-action">
                      {data.ctaImage && <img src={data.ctaImage} alt="Counselor" />}
                      <a href="/admission-enquiry" className="dept-cta-btn">Apply Now</a>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Department;