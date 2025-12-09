// src/pages/SinglePost.js
import React, { useState, useEffect, useRef } from 'react'; // 1. Import useRef
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Blog.css';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // 2. Create a reference for the content container
  const contentRef = useRef(null);

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

  // 3. Add this NEW useEffect to fix the links automatically
  useEffect(() => {
    if (post && contentRef.current) {
      // Find all links inside the blog content
      const links = contentRef.current.querySelectorAll('a');
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href) {
          // If link starts with "www." or doesn't have "http", fix it
          if (!href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            link.setAttribute('href', `https://${href}`);
          }
          
          // Optional: Force external links to open in a new tab
          if (!href.startsWith('/')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
          }
        }
      });
    }
  }, [post]); // Runs whenever the post data loads

  if (loading) return <div style={{padding:'100px', textAlign:'center'}}>Loading Article...</div>;
  if (!post) return <div style={{padding:'100px', textAlign:'center'}}>Article not found.</div>;

  return (
    <div className="blog-page-wrapper">
      
      {/* Navigation */}
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
          </div>
        </div>
      </header>

      <div className="single-post-container">
        <article className="article-body">
          
          {/* 4. Attach the ref to this div so we can find the links inside */}
          <div 
            ref={contentRef}
            className="dynamic-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-tags">
            <strong>Tags:</strong>
            <div className="tag-cloud">
               <span className="tag">{post.category}</span>
               <span className="tag">JEC Blog</span>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="blog-sidebar">
          <div className="widget">
            <h3 className="widget-title">About the Author</h3>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
              <div style={{width:'50px', height:'50px', background:'#eee', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <i className="fas fa-user" style={{color:'#888'}}></i>
              </div>
              <div>
                <strong style={{display:'block', color:'var(--text-main)'}}>{post.author}</strong>
                <span style={{fontSize:'12px', color:'#666'}}>Content Creator</span>
              </div>
            </div>
          </div>

          <div className="cta-box">
            <h3>Admission Open 2025</h3>
            <p>Join the league of successful engineers.</p>
            <Link to="/admission-enquiry" className="btn-apply">Apply Now</Link>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SinglePost;