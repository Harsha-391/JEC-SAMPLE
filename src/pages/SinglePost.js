// src/pages/SinglePost.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'; // useParams is key here
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Blog.css'; // Reusing the same CSS file

const SinglePost = () => {
  const { id } = useParams(); // Get the ID from the URL (e.g., /blog/view/123)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "blog_posts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div style={{padding:'100px', textAlign:'center'}}>Loading Article...</div>;
  
  if (!post) return <div style={{padding:'100px', textAlign:'center'}}>Article not found.</div>;

  return (
    <div className="blog-page-wrapper">
      
      {/* Navigation Breadcrumb */}
      <div style={{background: '#1E293B', color: '#fff', padding: '10px 2rem', fontSize: '0.9rem'}}>
          <Link to="/blog" style={{color: '#FCA311'}}> <i className="fas fa-arrow-left"></i> Back to Blog</Link>
      </div>

      <header className="article-hero" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('${post.image}')`}}>
        <div className="hero-content">
          <span className="post-badge">{post.category}</span>
          <h1 className="article-title">{post.title}</h1>
          <div className="post-meta">
            <span><i className="fas fa-user-circle"></i> {post.author}</span>
            <span><i className="fas fa-calendar-alt"></i> {post.date}</span>
            <span><i className="fas fa-clock"></i> {post.readTime || "5 Min Read"}</span>
          </div>
        </div>
      </header>

      <div className="single-post-container">
        
        <article className="article-body">
          
          {/* Render HTML Content safely */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="post-tags">
            <strong>Tags:</strong>
            <div className="tag-cloud">
              {post.tags && post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>

        </article>

        <aside className="blog-sidebar">
          <div className="widget">
            <h3 className="widget-title">About the Author</h3>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
              <img src="https://via.placeholder.com/60" style={{borderRadius:'50%'}} alt={post.author} />
              <div>
                <strong style={{display:'block', color:'var(--text-main)'}}>{post.author}</strong>
                <span style={{fontSize:'0.85rem', color:'var(--text-muted)'}}>JEC Contributor</span>
              </div>
            </div>
          </div>
          
          <div className="cta-box">
            <h3 style={{color:'var(--text-main)'}}>Start Your Engineering Journey</h3>
            <p>Inspired by this article? Join JEC today.</p>
            <Link to="/admissions" className="btn-apply">Apply Now <i className="fas fa-angle-right"></i></Link>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SinglePost;