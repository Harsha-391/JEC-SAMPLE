// src/pages/About.js
import React from 'react';

function About() {
  return (
    // This parent div ensures all new CSS styles are scoped to this page
    <div className="about-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>About JEC</h1>
          <p>Best Engineering College in North India, Jaipur (Rajasthan)</p>
          <div className="hero-underline"></div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="quick-facts">
        <div className="quick-facts-content">
          <div className="fact-item">
            <h3>Estd. Year</h3>
            <p>2000</p>
          </div>
          <div className="fact-item">
            <h3>REAP Code</h3>
            <p>1019</p>
          </div>
          <div className="fact-item">
            <h3>Alumni</h3>
            <p>10,000+</p>
          </div>
          <div className="fact-item">
            <h3>Placement</h3>
            <p>94%+</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction" id="who-we-are">
        <div className="introduction-content">
          <h2>An Education for the Mind and Heart</h2>
          <p>Intellectual rigor, elevation of every individual socially, self reflection, they are knitted together in every facets of Jaipur Engineering College Experience - your studies, your research and your interactions with faculty and the career decisions you make.</p>
          <p>JAIPUR ENGINEERING COLLEGE (JEC) is a leading engineering and technology institute where every interactions take place with a heart. A best college where people and ideas come together in new ways, Illuminating turnarounds, igniting sparks that fuel new ventures, and fostering intellectual breakthroughs. The Institute is committed to advance knowledge and educate students in various branches of engineering that will best serve the nation and the world in the 21st century. In the life span of an educational institution like JEC, twenty two years may be a tiny ray in the vast spectrum of Engineering and Technology, but for Jaipur Engineering College (JEC), the last two decades have been truly constructive, much like the building blocks. Today JEC is forward looking diverse community devoted to bring excellence in all walks of life by bonding with values and commitment to excellence and respect for each person's individual needs and talents.</p>
          <p>Since its inception in 2000, Jaipur Engineering College (JEC) has been a top engineering college known to enable students to carve a niche for themselves and develop a strong personality. Located on the serene outskirts of Jaipur on Delhi Highway, JEC provides students with state-of-the art infrastructure which helps them to attain comprehensive understanding of their chosen engineering discipline. Another unique aspect of JEC is its rich sporting culture which makes engineering even more fun.</p>
          <p>JEC community is driven by shared purpose: to make a better world through education, research and innovation. JEC is always a place of high ambition, entertaining and eccentric, committed to bring finest purposeful contribution, inventive and artistics, passionate about advancing ideas and humanity creating quality in teaching learning process- better to best, and welcoming to brilliant people regardless of where they come from.</p>
          <p>Our holistic approach to education, and the rigorous spirit of knowledge dissemination process to define fields and human life makes JEC unique force for transformation in society, our commitment to social values all underly everything JEC do as an institution with a rich Agrasen heritage. We are committed to help you shape your future.</p>
          <img src="/images/campus-intro.jpg" alt="JEC Campus Overview" className="intro-image" />
        </div>
      </section>

      {/* Stats Section - Achievements */}
      <section className="stats">
        <div className="stats-content">
          <div className="stat-box">
            <div className="stat-number">10,000+</div>
            <div className="stat-text">Alumni</div>
            <div className="stat-label">Global network of successful professionals</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">94%+</div>
            <div className="stat-text">Placement</div>
            <div className="stat-label">Rate with top companies and highest package of Rs. 69 Lakh</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1200+</div>
            <div className="stat-text">Computers</div>
            <div className="stat-label">For students with latest configuration and internet</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">60,000+</div>
            <div className="stat-text">Books</div>
            <div className="stat-label">In library with online journals</div>
          </div>
        </div>
        <div className="stats-disclaimer">
          *Stats as of 2025. Source: JEC Reports.
        </div>
      </section>

      {/* Academic Credibility Section */}
      <section className="credibility" id="credibility">
        <div className="credibility-content">
          <h2>Academic Credibility</h2>
          <p>The institute is approved by All India Council for Technical Education (AICTE), New Delhi. AICTE is an apex body of MoE, Government of India vested with statutory powers to initiate necessary steps for planning, formulation and maintenance of norms and standards, accreditation, funding of priority areas, monitoring and evaluation of courses/programmes in the field of technical education.</p>
          <p>Similarly, JEC is affiliated to Rajasthan Technical University (RTU), Kota Rajasthan, an university exclusively created to enhance the technical education by Government of Rajasthan. RTU aims to provide quality technical education to boost technical environment in India. To improve the quality of Engineering Education, JEC is actively associated with the activities executed by RTU under TEQIP III.</p>
          <p>To benefit the students through NPTEL initiative, JEC has taken a step forward towards the establishment of an NPTEL local Chapter in 2016. The objective of this Chapter is to enable the students gain knowledge through enhanced video lecture and obtain certificates for courses pursued. Pertinent to mention that NPTEL is a fully funded project by the Ministry of Human Resource Development, Government of India, with joint initiative of the IITs and IISc.</p>
          <p>It is a learning zone where students are taught to become men of value and not just men of success. Tell me, I forget. Teach me, I remember. Involve me and I learn. These words seems to be the echo that resounds in every page of JEC. The veracity of this saying is nowhere better illustrated than in the classroom and labs of JEC because they are learner centric. The thrust has always been two way communication: a process of building partnerships between the Learner and the Learned.</p>
          <div className="credibility-grid">
            <div className="cred-item">
              <i className="fas fa-stamp"></i>
              <h3>AICTE Approved</h3>
              <p>Apex body ensuring standards in technical education.</p>
            </div>
            <div className="cred-item">
              <i className="fas fa-university"></i>
              <h3>Affiliated to RTU</h3>
              <p>Enhancing technical education in Rajasthan.</p>
            </div>
            <div className="cred-item">
              <i className="fas fa-video"></i>
              <h3>NPTEL Local Chapter</h3>
              <p>Access to IIT/IISc courses and certifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salient Features Section */}
      <section className="features" id="features">
        <div className="features-content">
          <h2>Salient Features: The JEC Advantage</h2>
          <div className="features-list">
            <div className="feature-item">
              <p>Well qualified and experienced faculty members.</p>
            </div>
            <div className="feature-item">
              <p>More than 1200+ Computers for students with latest configuration and internet facility.</p>
            </div>
            <div className="feature-item">
              <p>Wi-Fi enabled campus, Internet facility through 110 mbps leased line.</p>
            </div>
            <div className="feature-item">
              <p>Library with 60,000+ books and online journals like IEEE, ASME, J-Gate and Springer.</p>
            </div>
            <div className="feature-item">
              <p>Book Bank facility.</p>
            </div>
            <div className="feature-item">
              <p>Separate air-cooled hostels for boys & girls, with attached bathroom.</p>
            </div>
            <div className="feature-item">
              <p>Best academic results in university examinations.</p>
            </div>
            <div className="feature-item">
              <p>Excellent placements, one of our students got highest package in Rajasthan of Rs. 69 Lakh.</p>
            </div>
            <div className="feature-item">
              <p>Placements in prominent industries, multinational companies, Indian army, and government organizations.</p>
            </div>
            <div className="feature-item">
              <p>Rajasthan’s first nodal centre of NITTTR, Chandigarh.</p>
            </div>
            <div className="feature-item">
              <p>Rajasthan’s first remote centre of IIT, Bombay & IIT, Kharagpur.</p>
            </div>
            <div className="feature-item">
              <p>Campus Connect Programmes with MNCs like Infosys, CAD Desk & Oracle.</p>
            </div>
            <div className="feature-item">
              <p>Association with foreign universities, institutions of national importance and R&D centers for research work.</p>
            </div>
            <div className="feature-item">
              <p>More than 10,000+ alumni of JEC Group are working over the globe and leading a successful career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission" id="vision-mission">
        <div className="vision-mission-content">
          <h2>Our Vision & Mission</h2>
          <div className="vm-grid">
            <div className="vm-card">
              <h3>Our Vision</h3>
              <p>To make students technologically superior & ethically strong and build them as professionals, who will become the trend setters in the industry.</p>
              <h3>Our Mission</h3>
              <ul>
                <li>M1: To provide conceptual, basic & market driven knowledge of Core Engineering and Emerging Areas with practical exposure to meet the future requirements of industry and corporate.</li>
                <li>M2: To extend academic and social environment for achieving excellence in innovation driven knowledge to create manpower for developed society.</li>
                <li>M3: To present a platform for Industry Institute Interaction (IIC) through projects relevant to industry and society for entrepreneurship development.</li>
                <li>M4: To Provide an eco-system for accumulation of knowledge in the form of high quality research, patent and publication.</li>
                <li>M5: To integrate the teaching -learning process with human values and professional ethics.</li>
              </ul>
            </div>
            <div className="vm-card">
              <h3>Our Commitments</h3>
              <p>We will achieve this by our Commitments of:</p>
              <ul>
                <li>Academic integrity and accountability</li>
                <li>Respect and tolerance for the views of every individual</li>
                <li>Attention to issues of national relevance as well as of global concern</li>
                <li>Breadth of understanding, including knowledge of the human sciences</li>
                <li>Well qualified, dedicated and committed associates</li>
                <li>Appreciation of intellectual excellence and creativity</li>
                <li>An unfettered spirit of exploration, rationality and enterprise</li>
                <li>Creation of State-of-the-art infrastructure, facilities and services</li>
                <li>Finest interaction with industry and alumni</li>
                <li>Quality placements for our student</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;