import React, { useState } from 'react';

// Main Page Component
function HumanNetwork() {
  // This state will track which filter is active
  const [activeFilter, setActiveFilter] = useState('all');

  // This function will be called by the filter buttons
  const filterFaculty = (dept) => {
    setActiveFilter(dept);
  };

  return (
    // This wrapper class will scope all the new CSS
    <div className="human-network-page">
      
      <section className="faculty-hero">
        <div className="max-width-container">
          <h1>Human Network @ JEC</h1>
          <p>Meet the dedicated minds shaping the future of engineering.</p>
        </div>
      </section>

      <div className="filter-container">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
          onClick={() => filterFaculty('all')}
        >
          All Departments
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'cse' ? 'active' : ''}`} 
          onClick={() => filterFaculty('cse')}
        >
          Computer Science
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'ee' ? 'active' : ''}`} 
          onClick={() => filterFaculty('ee')}
        >
          Electrical Engg.
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'ece' ? 'active' : ''}`} 
          onClick={() => filterFaculty('ece')}
        >
          Electronics & Comm.
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'it' ? 'active' : ''}`} 
          onClick={() => filterFaculty('it')}
        >
          Information Tech
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'me' ? 'active' : ''}`} 
          onClick={() => filterFaculty('me')}
        >
          Mechanical Engg.
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'ash' ? 'active' : ''}`} 
          onClick={() => filterFaculty('ash')}
        >
          Applied Sciences
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'civil' ? 'active' : ''}`} 
          onClick={() => filterFaculty('civil')}
        >
          Civil Engg.
        </button>
      </div>

      <div className="max-width-container faculty-section">

        {/* --- Computer Science --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'cse' ? 'show' : ''}`}>
          Computer Science Engineering
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'cse' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Ashok Kumar" className="avatar" />
              <div className="faculty-name">Ashok Kumar Kumawat</div>
              <div className="faculty-role">Technical Asst</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>Qualification: MCA</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 11 Years</span></div>
              <div className="research-area"><i className="fas fa-microscope"></i> Networking, Hardware</div>
            </div>
            <div className="card-footer">
              <a href="mailto:ashokkumawat56@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
          {/* ... Add other CSE faculty cards here ... */}
          <div className="faculty-card">
                <div className="card-header">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Himanshu Indolia" className="avatar" />
                    <div className="faculty-name">Himanshu Indolia</div>
                    <div className="faculty-role">Technical Asst</div>
                </div>
                <div className="card-body">
                    <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>Diploma in CS</span></div>
                    <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 12 Years</span></div>
                    <div className="research-area">Networking, Hardware</div>
                </div>
                <div className="card-footer">
                    <a href="mailto:himanshuindolia@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
                </div>
            </div>
            <div className="faculty-card">
                <div className="card-header">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Sonia Sharma" className="avatar" />
                    <div className="faculty-name">Sonia Sharma</div>
                    <div className="faculty-role">Technical Asst</div>
                </div>
                <div className="card-body">
                    <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>MCA</span></div>
                    <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 15 Years</span></div>
                    <div className="research-area">Networking, Hardware</div>
                </div>
                <div className="card-footer">
                    <a href="mailto:sonia.jeckukas@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
                </div>
            </div>
            <div className="faculty-card">
                <div className="card-header">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Parul Gahelot" className="avatar" />
                    <div className="faculty-name">Parul Gahelot</div>
                    <div className="faculty-role">Asst. Professor</div>
                </div>
                <div className="card-body">
                    <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech.</span></div>
                    <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 3 Years</span></div>
                    <div className="research-area">Networking, Software Engineering, Information Security</div>
                </div>
                <div className="card-footer">
                    <a href="mailto:parulgahelot.jec@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
                </div>
            </div>
            <div className="faculty-card">
                <div className="card-header">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Sultan Singh Saini" className="avatar" />
                    <div className="faculty-name">Sultan Singh Saini</div>
                    <div className="faculty-role">Asso. Professor</div>
                </div>
                <div className="card-body">
                    <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech</span></div>
                    <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 17.5 Years</span></div>
                    <div className="research-area">Operating System, Database</div>
                </div>
                <div className="card-footer">
                    <a href="mailto:sultansinghsaini@jeckukas.org.in" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
                </div>
            </div>
        </div>

        {/* --- Electrical Engineering --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'ee' ? 'show' : ''}`}>
          Electrical Engineering
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'ee' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Dr. Bharat Bhushan Jain" className="avatar" />
              <div className="faculty-name">Dr. Bharat Bhushan Jain</div>
              <div className="faculty-role">Professor</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>Ph.D</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 17 Years</span></div>
              <div className="research-area">Renewable Energy Sources (Solar, Wind)</div>
            </div>
            <div className="card-footer">
              <a href="mailto:drbharatjainjec@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
          <div className="faculty-card">
                <div className="card-header">
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="S.N. Vijay" className="avatar" />
                    <div className="faculty-name">S.N. Vijay</div>
                    <div className="faculty-role">Asst. Professor</div>
                </div>
                <div className="card-body">
                    <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech</span></div>
                    <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 18 Years</span></div>
                    <div className="research-area">Microstrip, Antenna, Microwaves</div>
                </div>
                <div className="card-footer">
                    <a href="mailto:satyanarayanvijay@jeckukas.org.in" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
                </div>
            </div>
        </div>

        {/* --- Electronics & Comm. Engg. --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'ece' ? 'show' : ''}`}>
          Electronics & Comm. Engg.
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'ece' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Gauri Shankar Sharma" className="avatar" />
              <div className="faculty-name">Gauri Shankar Sharma</div>
              <div className="faculty-role">Asst. Professor</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 15.3 Years</span></div>
              <div className="research-area">VLSI Design, Embedded Systems, Microcontroller</div>
            </div>
            <div className="card-footer">
              <a href="mailto:gourishankarsharma@jeckukas.org.in" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
        </div>

        {/* --- Information Technology --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'it' ? 'show' : ''}`}>
          Information Technology
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'it' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Sultan Singh Saini" className="avatar" />
              <div className="faculty-name">Sultan Singh Saini</div>
              <div className="faculty-role">Asso. Professor</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 12 Years</span></div>
              <div className="research-area">Network Science, Data Mining, Cyber Security</div>
            </div>
            <div className="card-footer">
              <a href="mailto:sultansaini.jec@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
        </div>

        {/* --- Mechanical Engineering --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'me' ? 'show' : ''}`}>
          Mechanical Engineering
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'me' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Prof. Dr. D.G. Mahto" className="avatar" />
              <div className="faculty-name">Prof. (Dr.) D.G. Mahto</div>
              <div className="faculty-role">Professor</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>Ph.D</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 20+ Years</span></div>
              <div className="research-area">Production & Industrial Engg, Manufacturing Tech</div>
            </div>
            <div className="card-footer">
              <a href="mailto:directorjecjiet@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
          <div className="faculty-card">
                <div className="card-header">
                    <img src="https.www.w3schools.com/howto/img_avatar2.png" alt="Pinky Mourya" className="avatar" />
                    <div className="faculty-name">Pinky Mourya</div>
                    <div className="faculty-role">Asst. Professor</div>
                </div>
                <div className="card-body">
                    <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech</span></div>
                    <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 17 Years</span></div>
                    <div className="research-area">Production Engg, TQM, Advanced Manufacturing</div>
                </div>
                <div className="card-footer">
                    <a href="mailto:pinkymourya@jeckukas.org.in" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
                </div>
            </div>
        </div>

        {/* --- Applied Sciences & Humanities --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'ash' ? 'show' : ''}`}>
          Applied Sciences & Humanities
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'ash' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Prof. Sunita Goyal Rawat" className="avatar" />
              <div className="faculty-name">Prof. Sunita Goyal Rawat</div>
              <div className="faculty-role">Professor</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>Ph.D</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 22 Years</span></div>
              <div className="research-area">Organometallic Chemistry, Academic Planning</div>
            </div>
            <div className="card-footer">
              <a href="mailto:rawatsunita.jec@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
        </div>

        {/* --- Civil Engineering --- */}
        <h2 className={`dept-title ${activeFilter === 'all' || activeFilter === 'civil' ? 'show' : ''}`}>
          Civil Engineering
        </h2>
        <div className={`faculty-grid ${activeFilter === 'all' || activeFilter === 'civil' ? 'show' : ''}`}>
          <div className="faculty-card">
            <div className="card-header">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Abhishek Chanda" className="avatar" />
              <div className="faculty-name">Abhishek Chanda</div>
              <div className="faculty-role">Asst. Professor</div>
            </div>
            <div className="card-body">
              <div className="info-row"><i className="fas fa-graduation-cap"></i> <span>M.Tech, B.E.</span></div>
              <div className="info-row"><i className="fas fa-briefcase"></i> <span>Experience: 3 Years</span></div>
              <div className="research-area">Structural Engineering, Earthquake Engineering</div>
            </div>
            <div className="card-footer">
              <a href="mailto:abhishekchanda.jec@gmail.com" className="email-btn"><i className="fas fa-envelope"></i> Email Me</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HumanNetwork;