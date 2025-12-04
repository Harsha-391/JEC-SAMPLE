// src/pages/SinglePost.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Reusing the same CSS file

const SinglePost = () => {
  return (
    <div className="blog-page-wrapper">
      
      {/* Navigation Breadcrumb (Optional but helpful) */}
      <div style={{background: '#1E293B', color: '#fff', padding: '10px 2rem', fontSize: '0.9rem'}}>
          <Link to="/blog" style={{color: '#FCA311'}}> <i className="fas fa-arrow-left"></i> Back to Blog</Link>
      </div>

      <header className="article-hero">
        <div className="hero-content">
          <span className="post-badge">Admissions</span>
          <h1 className="article-title">Rajasthan Top Engineering College for 2025: Why JEC Kukas Leads the Way</h1>
          <div className="post-meta">
            <span><i className="fas fa-user-circle"></i> Pawan Harish</span>
            <span><i className="fas fa-calendar-alt"></i> October 10, 2025</span>
            <span><i className="fas fa-clock"></i> 5 Min Read</span>
          </div>
        </div>
      </header>

      <div className="single-post-container">
        
        <article className="article-body">
          
          <p className="lead" style={{fontSize:'1.25rem', fontWeight:'500', color:'var(--text-main)'}}>
            Are you searching for the <strong>Rajasthan top engineering college</strong> to launch your engineering career in 2025? Rajasthan is renowned for its quality education, and Jaipur Engineering College (JEC) Kukas, established in 2000, stands out as a premier institution.
          </p>

          <div className="highlight-box">
            <h3><i className="fas fa-bolt" style={{color:'var(--jec-gold)'}}></i> Key Highlights</h3>
            <p style={{marginBottom:0}}>With an impressive <strong>85%+ placement rate</strong>, cutting-edge programs like AI and robotics, and strong industry ties with companies like TCS, Amazon, and ISRO, JEC Kukas is a top choice among Rajasthan engineering colleges.</p>
          </div>

          <p>Ready to discover why JEC Kukas is the best engineering college in Rajasthan for 2025? Let’s explore!</p>

          <h2>Why JEC Kukas is the Rajasthan Top Engineering College</h2>
          <p>JEC Kukas has solidified its position as the Rajasthan top engineering college through academic excellence and career-focused education. Here’s what makes it exceptional:</p>
          
          <ul>
            <li><strong>Diverse B.Tech Programs:</strong> JEC offers B.Tech in Computer Science (with AI specialization), Electronics & Communication, Mechanical Engineering, and more, aligned with industry demands.</li>
            <li><strong>Outstanding Placements:</strong> In 2025, over 85% of final-year students secured jobs, with top packages reaching ₹22 LPA from recruiters like Infosys, Accenture, and Amazon. The average package is ₹6.8 LPA.</li>
            <li><strong>Modern Infrastructure:</strong> Located in Kukas, Jaipur, the campus features advanced labs, smart classrooms, and hostels.</li>
            <li><strong>Industry-Relevant Curriculum:</strong> Courses are designed with input from industry experts, ensuring graduates excel in fields like AI engineering and robotics.</li>
          </ul>

          <p>Choosing JEC Kukas means joining a top-tier institution that prepares you for global engineering challenges.</p>

          <h2>How to Join JEC Kukas in 2025: REAP Admission Process</h2>
          <p>Securing admission to the Rajasthan top engineering college is streamlined through the REAP 2025 admission process. Here’s how to enroll at JEC Kukas:</p>
          
          <ol style={{paddingLeft:'1.5rem', marginBottom:'1.5rem'}}>
            <li style={{marginBottom:'0.5rem'}}><strong>Eligibility:</strong> Pass 10+2 with Physics, Chemistry, and Mathematics, securing at least 45% marks (40% for reserved categories).</li>
            <li style={{marginBottom:'0.5rem'}}><strong>REAP Application:</strong> Register on the Rajasthan Engineering Admission Process (REAP) portal and select JEC Kukas as your preferred college.</li>
            <li style={{marginBottom:'0.5rem'}}><strong>Counseling and Seat Allotment:</strong> Participate in REAP-2025 counseling, submit preferences, and complete document verification.</li>
            <li style={{marginBottom:'0.5rem'}}><strong>Confirm Admission:</strong> Pay the admission fee as per REAP guidelines to secure your seat in a B.Tech in AI and robotics or other programs.</li>
          </ol>

          <div style={{background:'#FFFBEB', padding:'1.5rem', borderLeft:'4px solid var(--jec-gold)', borderRadius:'8px'}}>
            <strong>Pro Tip:</strong> Visit the official JEC admission portal for detailed steps and deadlines. Don’t miss your chance to study at one of the best engineering colleges in Jaipur!
          </div>

          <h2>Innovation and Industry Connections</h2>
          <p>JEC Kukas sets itself apart among Rajasthan engineering colleges with its focus on innovation and industry partnerships. The <strong>Institution Innovation Council (IIC)</strong> drives research and projects in fields like AI, nanotechnology, and robotics.</p>
          <ul>
            <li><strong>Industry Collaborations:</strong> Partnerships with ISRO, TCS, and Microsoft offer internships and live projects.</li>
            <li><strong>Research Excellence:</strong> Faculty and students work on AI-driven solutions and sustainable engineering.</li>
            <li><strong>Tech Events:</strong> Hackathons, workshops, and seminars connect students with industry leaders.</li>
          </ul>

          <h2>Student Life at JEC Kukas: Beyond Academics</h2>
          <p>Studying at JEC Kukas offers a vibrant campus experience. Here’s a glimpse of student life:</p>
          <ul>
            <li><strong>Dynamic Campus:</strong> Modern hostels, sports facilities, and advanced labs.</li>
            <li><strong>Cultural and Tech Fests:</strong> Annual events promote creativity and teamwork.</li>
            <li><strong>Student Clubs:</strong> From robotics to coding societies, JEC encourages extracurricular activities.</li>
          </ul>

          <div className="cta-box">
            <h3 style={{color:'var(--text-main)'}}>Start Your Engineering Journey Today</h3>
            <p>Whether you’re passionate about AI, robotics, or traditional engineering, JEC equips you with the skills to succeed in 2025 and beyond.</p>
            <Link to="/admission/Admission-Procedure" className="btn-apply">Apply Now for 2025 <i className="fas fa-angle-right"></i></Link>
          </div>

          <div className="post-tags">
            <strong>Tags:</strong>
            <div className="tag-cloud">
              <Link to="/blog" className="tag">Best engineering college in Jaipur</Link>
              <Link to="/blog" className="tag">JEC Kukas admission 2025</Link>
              <Link to="/blog" className="tag">Top B.Tech colleges in Rajasthan</Link>
            </div>
          </div>

        </article>

        <aside className="blog-sidebar">
          <div className="widget">
            <h3 className="widget-title">About the Author</h3>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
              <img src="https://via.placeholder.com/60" style={{borderRadius:'50%'}} alt="Pawan Harish" />
              <div>
                <strong style={{display:'block', color:'var(--text-main)'}}>Pawan Harish</strong>
                <span style={{fontSize:'0.85rem', color:'var(--text-muted)'}}>Education Analyst</span>
              </div>
            </div>
            <p style={{marginTop:'1rem', fontSize:'0.9rem', color:'var(--text-muted)'}}>Expert in Rajasthan's technical education landscape, guiding students toward top-tier engineering careers.</p>
          </div>

          <div className="widget">
            <h3 className="widget-title">Recent Posts</h3>
            <ul className="recent-list">
              <li>
                <Link to="/blog/view" className="recent-link">
                  Top 10 Reasons Why Jaipur Engineering College (JEC) Is Becoming a Hub...
                </Link>
                <span className="recent-date">30 Aug 2025</span>
              </li>
              <li>
                <Link to="/blog/view" className="recent-link">
                   Best B.Tech Colleges in Jaipur, Rajasthan, for 2025
                </Link>
                <span className="recent-date">07 Aug 2025</span>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SinglePost;