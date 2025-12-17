import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore'; 
import { Helmet } from 'react-helmet-async'; 
import './Department.css'; 

function Department() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation();
  const contentRef = useRef(null); // 1. Ref for content

  // Fetch Data
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

  // 2. AUTOMATIC LINK FIXER (Like SinglePost.js)
  useEffect(() => {
    if (data && contentRef.current) {
      const links = contentRef.current.querySelectorAll('a');
      links.forEach(link => {
        let href = link.getAttribute('href');
        if (href) {
          // If it doesn't start with http, /, #, or mailto, assume it's an external link missing protocol
          if (!href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            href = `https://${href}`;
            link.setAttribute('href', href);
          }
          
          // Force external links to open in new tab
          if (href.startsWith('http')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer'); 
          }
        }
      });
    }
  }, [data]);

  if (loading) return <div style={{padding:"100px", textAlign:"center"}}>Loading...</div>;
  
  if (!data) return (
    <div style={{padding:"100px", textAlign:"center"}}>
        <h2>Department Not Found</h2>
        <p>Please check the URL or contact the administrator.</p>
    </div>
  );

  return (
    <div className="dept-page-wrapper">
      <Helmet>
        <title>{data.title || data.name || "JEC Department"} | Jaipur Engineering College</title>
        <meta name="description" content={data.subtitle || "Department details at JEC Jaipur"} />
      </Helmet>

      {/* HERO SECTION */}
      <header className="dept-hero" style={{backgroundImage: `linear-gradient(rgba(0, 114, 198, 0.9), rgba(0, 50, 100, 0.8)), url(${data.bannerImage || '/images/hero.jpg'})`}}>
          <div className="dept-hero-content">
            <h1 className="dept-animated-section">{data.title || data.name}</h1>
            <p className="dept-animated-section" style={{animationDelay: '0.1s'}}>
                {data.subtitle}
            </p>
            <div className="badge dept-animated-section" style={{animationDelay: '0.2s'}}>Approved by AICTE, New Delhi</div>
          </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="dept-container">
          <div className="dept-content-wrapper">
              <div 
                ref={contentRef} // 3. Attach Ref here
                className="dynamic-content"
                dangerouslySetInnerHTML={{ __html: data.content || data.about || "<p>Content coming soon...</p>" }} 
              />
          </div>
      </div>

    </div>
  );
}

export default Department;