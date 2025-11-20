import React, { useState } from 'react';

function Department() {
  const [activeTab, setActiveTab] = useState('tab-1');

  return (
    <div className="dept-page-wrapper">
      
      {/* Internal Page Navbar */}

      <header className="dept-hero">
          <h1 className="dept-animated-section">B.Tech CSE (Artificial Intelligence)</h1>
          <p className="dept-animated-section" style={{animationDelay: '0.1s'}}>Pioneer the technologies of the future. Create a bridge to employment opportunities.</p>
          <div className="badge dept-animated-section" style={{animationDelay: '0.2s'}}>Approved by AICTE, New Delhi</div>
      </header>

      <div className="dept-stats-container">
          <div className="dept-stats-grid">
              <div className="dept-stat-card dept-animated-section" style={{animationDelay: '0.3s'}}><div className="dept-stat-icon"><i className="fas fa-laptop-code"></i></div><div className="dept-stat-label">Core Computer Competencies</div></div>
              <div className="dept-stat-card dept-animated-section" style={{animationDelay: '0.4s'}}><div className="dept-stat-icon"><i className="fas fa-sync-alt"></i></div><div className="dept-stat-label">Flexibility to Switch Evolving Areas</div></div>
              <div className="dept-stat-card dept-animated-section" style={{animationDelay: '0.5s'}}><div className="dept-stat-icon"><i className="fas fa-shield-alt"></i></div><div className="dept-stat-label">More Secure Field + Opportunities</div></div>
              <div className="dept-stat-card dept-animated-section" style={{animationDelay: '0.6s'}}><div className="dept-stat-icon"><i className="fas fa-briefcase"></i></div><div className="dept-stat-label">Dominant Tool for Business</div></div>
          </div>
      </div>

      <div className="dept-container">

          <div className="dept-section-split dept-animated-section">
              <div className="dept-text-block">
                  <h3>Why is this course so significant?</h3>
                  <p>Computer Science Engineering blends CS and electrical engineering to further advancements in digital technology. Artificial Intelligence has captured the imagination of the entire world with its potential to solve complex societal problems. The addition of an AI specialization supplements value to fill the critical needs of the industry for high-end AI scientists and engineers.</p>
                  <p>The course is designed to enable students to build intelligent machines, software, or applications with a cutting-edge combination of machine learning and visualization technologies. The main objective is to program computers to use example data or experience to solve a given problem.</p>
              </div>
              <div className="dept-img-block">
                  <img src="https://cdn.pixabay.com/photo/2023/09/20/11/42/artificial-8264662_1280.jpg" alt="Venn Diagram of Data Science Components" />
              </div>
          </div>

          <div className="dept-parallax-section dept-animated-section">
              <div className="dept-parallax-content">
                  <h3>The JEC Edge: Real-World AI</h3>
                  <p>AI has become an integral part of our daily lives. With this increase in usage, there is a significant requirement for researchers who can understand and build AI technologies. This program provides students an opportunity to learn both foundational and experimental components.</p>
                  <p>A student completing this program will be able to undertake industry careers involving innovation and problem-solving or research careers in AI, ML, and Computer Science. Students will also have the option to explore applied domains such as computer vision, natural language processing, robotics, and software analysis.</p>
              </div>
          </div>

          <div className="dept-section-header dept-animated-section">
              <span>Course Goals</span>
              <h2>Aims & Objectives</h2>
              <p>The B.Tech.(CSE-AI) program is designed to improve the following attributes in students:</p>
          </div>
          
          <div className="dept-tabs-container dept-animated-section">
              <div className="dept-tabs-nav">
                  <button className={`dept-tab-btn ${activeTab === 'tab-1' ? 'active' : ''}`} onClick={() => setActiveTab('tab-1')}>Core Knowledge</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-2' ? 'active' : ''}`} onClick={() => setActiveTab('tab-2')}>Professional Skills</button>
                  <button className={`dept-tab-btn ${activeTab === 'tab-3' ? 'active' : ''}`} onClick={() => setActiveTab('tab-3')}>Advanced Application</button>
              </div>
              
              <div className={`dept-tab-content ${activeTab === 'tab-1' ? 'active' : ''}`}>
                  <div className="dept-tab-grid">
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-book-open"></i></div><p>Understanding of <strong>theoretical foundations</strong> and limits of computing.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-layer-group"></i></div><p>Understanding of computing at <strong>different levels of abstraction</strong> (circuits, OS, algorithms, AI).</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-code-branch"></i></div><p>Ability to adapt models and algorithms for <strong>efficiently solving new problems</strong>.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-drafting-compass"></i></div><p>Capability to <strong>design, implement, and evaluate</strong> systems using modern tools.</p></div>
                  </div>
              </div>

              <div className={`dept-tab-content ${activeTab === 'tab-2' ? 'active' : ''}`}>
                  <div className="dept-tab-grid">
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-users"></i></div><p>Competence to work effectively in <strong>teams to accomplish a common goal</strong>.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-gavel"></i></div><p>An understanding of <strong>professional and ethical responsibility</strong>.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-bullhorn"></i></div><p>Ability to <strong>communicate effectively</strong> with a wide range of audiences.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-infinity"></i></div><p>Expertise to self-learn and engage in <strong>life-long learning</strong>.</p></div>
                  </div>
              </div>

              <div className={`dept-tab-content ${activeTab === 'tab-3' ? 'active' : ''}`}>
                  <div className="dept-tab-grid">
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-tools"></i></div><p>Understanding and ability to use <strong>advanced techniques and tools</strong>.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-flask"></i></div><p>Preparedness to undertake <strong>research tasks and projects</strong>.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-lightbulb"></i></div><p>Calibre to develop a <strong>business plan for an entrepreneurial venture</strong>.</p></div>
                      <div className="dept-tab-card"><div className="dept-tab-icon"><i className="fas fa-globe-asia"></i></div><p>An understanding of the <strong>economic and societal impact</strong> of AI solutions.</p></div>
                  </div>
              </div>
          </div>

          <div className="dept-banner-img-block dept-animated-section">
              <img src="https://cdn.pixabay.com/photo/2023/02/05/01/10/robot-7768527_1280.jpg" alt="AI, Machine Learning, Data Science Word Cloud" />
          </div>

          <div className="dept-audience-grid dept-animated-section">
              <div className="dept-audience-card">
                  <h4><i className="fas fa-book" style={{color:'var(--jec-red)'}}></i> The Foundational Learner</h4>
                  <p>For individuals who seek a <strong>solid theoretical foundation</strong>, systematic professional knowledge, and strong practical skills in Computer Science and AI to solve real-world problems.</p>
              </div>
              <div className="dept-audience-card">
                  <h4><i className="fas fa-briefcase" style={{color:'var(--jec-gold)'}}></i> The Career-Builder</h4>
                  <p>For students looking for a career with <strong>exceptional prospective fields</strong> and challenging roles in a futuristic industry. This program is ideal for those seeking financial security and a lifelong prospect of learning.</p>
              </div>
          </div>

          <div className="dept-section-split dept-animated-section">
              <div>
                  <h3>Key Subjects</h3>
                  <p>Apart from core CSE subjects, the thrust components of AI are part of the syllabus. Learning at JEC draws on the world's diversity and innovation.</p>
                  <div className="dept-pill-grid">
                      <div className="dept-pill">Machine Learning</div>
                      <div className="dept-pill">Natural Language Processing</div>
                      <div className="dept-pill">Computer Vision</div>
                      <div className="dept-pill">Robotics</div>
                      <div className="dept-pill">Software Analysis</div>
                      <div className="dept-pill">Data & AI Consulting</div>
                      <div className="dept-pill">AI Solution Architecture</div>
                      <div className="dept-pill">Neural Networks</div>
                      <div className="dept-pill">Data Mining</div>
                  </div>
              </div>
              <div>
                  <h3>Career Prospects</h3>
                  <p>Unlock your potential to thrive in diverse industries, as this course equips you with the expertise to succeed in a multitude of professional roles.</p>
                  <div className="dept-pill-grid">
                      <div className="dept-pill dept-pill-hot">Artificial Intelligence Engineer</div>
                      <div className="dept-pill dept-pill-hot">Machine Learning Engineer</div>
                      <div className="dept-pill dept-pill-hot">Data Science Architect</div>
                      <div className="dept-pill">Robotics Professional</div>
                      <div className="dept-pill">Software Engineer</div>
                      <div className="dept-pill">IIoT Architect</div>
                      <div className="dept-pill">AI Solution Architect</div>
                      <div className="dept-pill">System Administrator</div>
                  </div>
              </div>
          </div>

          <div className="dept-section-header dept-animated-section">
              <span>Join the AI Revolution</span>
              <h2>Leading AI-Driven Companies</h2>
              <p>Our students are prepared for roles at the world's most innovative companies.</p>
          </div>
          <div className="dept-img-block dept-animated-section" style={{padding: '2rem', background: 'white'}}>
              <img src="https://cdn.pixabay.com/photo/2023/09/20/11/42/artificial-8264664_1280.jpg" alt="Enterprise AI Companies Logo Cloud" />
          </div>

          <div className="dept-cta-box dept-animated-section">
              <div className="dept-cta-split">
                  <div>
                      <h3>Eligibility & How to Apply</h3>
                      <p style={{color:'var(--dept-text-muted)', marginBottom: '1rem'}}>
                          <strong>B.Tech: (4 Years / 8 Semesters)</strong><br/>
                          The journey begins after 10+2 / 12th passed with minimum 45% marks (40% for reserved categories). Pass in 10+2 with Physics and Mathematics as compulsory subjects along with one of the following: Chemistry / Biotechnology / Biology / Technical Vocational Subject / Computer Science / IT / Informatics Practices / Agriculture / Engineering Graphics / Business studies.
                      </p>
                      <h4 style={{color:'var(--dept-text-main)'}}>SPEAK, DISCUSS & MEET YOUR COUNSELOR(S)!</h4>
                      <p style={{color:'var(--dept-text-muted)', fontSize: '0.95rem'}}>
                          Your admission counselors are ready to serve you! Feel free to call or email your questions. They are affectionate to assist you and enable you to complete your admission formalities with ease!
                      </p>
                  </div>
                  <div className="dept-cta-action">
                      <img src="https://cdn.pixabay.com/photo/2023/05/08/08/41/ai-7977960_1280.jpg" alt="Analytics Leader Venn Diagram" />
                      <a href="/admissions" className="dept-cta-btn">Apply Now</a>
                  </div>
              </div>
          </div>

      </div>
    </div>
  );
}

export default Department;