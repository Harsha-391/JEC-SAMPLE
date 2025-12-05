// src/pages/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch Posts from Firebase
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts, ordered by date (descending) if you have a date field, or just fetch all
        // For simplicity, fetching all now. You can add orderBy('date', 'desc') later.
        const q = query(collection(db, "blog_posts")); 
        const querySnapshot = await getDocs(q);
        
        const postsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper: Separate Featured Post from Regular Feed
  const featuredPost = posts.find(post => post.isFeatured === true);
  const regularPosts = posts.filter(post => post.id !== featuredPost?.id);

  // Helper: Filter by Search
  const filteredPosts = regularPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="blog-page-wrapper" style={{padding:'100px', textAlign:'center'}}>Loading Articles...</div>;
  }

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

          {/* 1. Featured Post (Dynamic) */}
          {featuredPost && (
            <article className="blog-card featured">
              <div className="blog-img-wrapper">
                <img src={featuredPost.image || "https://via.placeholder.com/800x400"} alt={featuredPost.title} />
                <span className="date-badge">{featuredPost.date}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><i className="fas fa-user"></i> {featuredPost.author}</span>
                  <span><i className="fas fa-tag"></i> {featuredPost.category}</span>
                </div>
                <Link to={`/blog/view/${featuredPost.id}`}>
                  <h2 className="blog-title">{featuredPost.title}</h2>
                </Link>
                <p className="blog-excerpt">{featuredPost.excerpt}</p>
                <Link to={`/blog/view/${featuredPost.id}`} className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
              </div>
            </article>
          )}

          {/* 2. Regular Feed (Dynamic Map) */}
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article className="blog-card" key={post.id}>
                <div className="blog-img-wrapper">
                  <img src={post.image || "https://via.placeholder.com/600x300"} alt={post.title} />
                  <span className="date-badge">{post.date}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fas fa-user"></i> {post.author}</span>
                    <span><i className="fas fa-tag"></i> {post.category}</span>
                  </div>
                  <Link to={`/blog/view/${post.id}`}><h2 className="blog-title">{post.title}</h2></Link>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/view/${post.id}`} className="read-more">Read Full Article <i className="fas fa-arrow-right"></i></Link>
                </div>
              </article>
            ))
          ) : (
            <p>No articles found matching your search.</p>
          )}

          {/* Pagination (Static for now, can be made dynamic later) */}
          <div className="pagination">
            <span className="page-link active">1</span>
            <span className="page-link"><i className="fas fa-chevron-right"></i></span>
          </div>

        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar">
            
          <div className="widget">
            <h3 className="widget-title">Search</h3>
            <div className="search-box">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn"><i className="fas fa-search"></i></button>
            </div>
          </div>

          <div className="widget">
            <h3 className="widget-title">Recent Posts</h3>
            <ul className="recent-list">
              {/* Show top 3 posts in sidebar */}
              {posts.slice(0, 3).map(post => (
                <li key={post.id}>
                  <Link to={`/blog/view/${post.id}`} className="recent-link">
                    <img src={post.image} className="recent-thumb" alt="thumb" />
                    <div>
                      <div className="recent-text">{post.title}</div>
                      <span className="recent-date">{post.date}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="widget">
            <h3 className="widget-title">Categories</h3>
            <div className="tag-cloud">
              <span className="tag">Engineering</span>
              <span className="tag">Admissions</span>
              <span className="tag">Campus Life</span>
              <span className="tag">Placements</span>
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};

export default Blog;