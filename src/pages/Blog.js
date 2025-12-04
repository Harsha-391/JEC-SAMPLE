// src/pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page-wrapper">
      
      {/* Hero Section */}
      <header className="blog-hero">
        <h1>News & Articles</h1>
        <p>Updates, Achievements, and Educational Insights from JEC</p>
      </header>

      <div className="blog-container">
        
        {/* Main Feed */}
        <main className="blog-feed">

          <article className="blog-card featured">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000" alt="JEC Campus" />
              <span className="date-badge">10 Oct 2025</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-user"></i> Pawan Harish</span>
                <span><i className="fas fa-tag"></i> Admissions</span>
              </div>
              <Link to="/blog/view">
                <h2 className="blog-title">Rajasthan Top Engineering College for 2025: Why JEC Kukas Leads the Way</h2>
              </Link>
              <p className="blog-excerpt">Are you searching for the best destination for your engineering career? Discover why Jaipur Engineering College (JEC) is ranked as the top choice for aspiring engineers in 2025...</p>
              <Link to="/blog/view" className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800" alt="Student Life" />
              <span className="date-badge">30 Aug 2025</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-user"></i> Pawan Harish</span>
                <span><i className="fas fa-tag"></i> Campus Life</span>
              </div>
              <Link to="/blog/view"><h2 className="blog-title">Top 10 Reasons Why Jaipur Engineering College (JEC) Is Becoming a Hub for World-Class Engineering Education</h2></Link>
              <p className="blog-excerpt">From state-of-the-art labs to Fortune 500 placements, explore the ten pillars that define the JEC advantage.</p>
              <Link to="/blog/view" className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" alt="Engineering Meeting" />
              <span className="date-badge">07 Aug 2025</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-user"></i> Pawan Harish</span>
                <span><i className="fas fa-tag"></i> B.Tech</span>
              </div>
              <Link to="/blog/view"><h2 className="blog-title">Best B.Tech Colleges in Jaipur, Rajasthan, for 2025: Why JEC Kukas Is Your Top Choice</h2></Link>
              <p className="blog-excerpt">A comparative analysis of engineering institutes in Jaipur and why JEC stands out in academics and infrastructure.</p>
              <Link to="/blog/view" className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800" alt="Technology" />
              <span className="date-badge">22 Jul 2025</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-user"></i> Pawan Harish</span>
                <span><i className="fas fa-tag"></i> Ranking</span>
              </div>
              <Link to="/blog/view"><h2 className="blog-title">Top B.Tech Colleges in Rajasthan for 2025: Why JEC Kukas Stands Out</h2></Link>
              <p className="blog-excerpt">Looking at the broader landscape of Rajasthan technical education, JEC continues to lead with innovation.</p>
              <Link to="/blog/view" className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
            </div>
          </article>

          <article className="blog-card">
            <div className="blog-img-wrapper">
              <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800" alt="AI Technology" />
              <span className="date-badge">16 Jul 2025</span>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span><i className="fas fa-user"></i> Pawan Harish</span>
                <span><i className="fas fa-tag"></i> AI & CSE</span>
              </div>
              <Link to="/blog/view"><h2 className="blog-title">Best AI Engineering Courses in Jaipur at JEC Kukas for 2025</h2></Link>
              <p className="blog-excerpt">Artificial Intelligence is the future. Discover the curriculum and opportunities available in our CSE-AI specialization.</p>
              <Link to="/blog/view" className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
            </div>
          </article>

          <div className="pagination">
            <span className="page-link active">1</span>
            <span className="page-link">2</span>
            <span className="page-link">3</span>
            <span className="page-link"><i className="fas fa-chevron-right"></i></span>
          </div>

        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
            
          <div className="widget">
            <h3 className="widget-title">Search</h3>
            <div className="search-box">
              <input type="text" className="search-input" placeholder="Search articles..." />
              <button className="search-btn"><i className="fas fa-search"></i></button>
            </div>
          </div>

          <div className="widget">
            <h3 className="widget-title">Recent Posts</h3>
            <ul className="recent-list">
              <li>
                <Link to="/blog/view" className="recent-link">
                  <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=100" className="recent-thumb" alt="AI" />
                  <div>
                    <div className="recent-text">Best AI Engineering Courses in Jaipur for 2025</div>
                    <span className="recent-date">16 Jul 2025</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/blog/view" className="recent-link">
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=100" className="recent-thumb" alt="Preparation" />
                  <div>
                    <div className="recent-text">Tips to get ready to apply for Best Engineering College</div>
                    <span className="recent-date">13 Jun 2020</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="widget">
            <h3 className="widget-title">Categories</h3>
            <div className="tag-cloud">
              <a href="#!" className="tag">Engineering</a>
              <a href="#!" className="tag">Artificial Intelligence</a>
              <a href="#!" className="tag">Campus Life</a>
              <a href="#!" className="tag">Sports</a>
              <a href="#!" className="tag">Placements</a>
              <a href="#!" className="tag">Career Tips</a>
              <a href="#!" className="tag">Admissions</a>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default Blog;