import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import './Blog.css';

const SinglePost = () => {
  const { id } = useParams();
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
          
          {/* ✅ FIXED: This renders the HTML from React Quill correctly */}
          <div 
            className="dynamic-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-tags">
            <strong>Tags:</strong>
            <div className="tag-cloud">
               {/* Fallback in case tags don't exist yet */}
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
            <Link to="/admissions" className="btn-apply">Apply Now</Link>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SinglePost;