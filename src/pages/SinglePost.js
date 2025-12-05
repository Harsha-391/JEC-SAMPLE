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

  // --- THE SMART PARSER FUNCTION ---
  // This turns your plain text into a beautiful layout
  const renderContent = (text) => {
    if (!text) return null;

    // Split the text by new lines so we can process each paragraph
    const lines = text.split('\n');

    return lines.map((line, index) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={index} />; // Empty line = space

      // 1. Detect Headers (starts with ##)
      if (trimmed.startsWith('##')) {
        return <h3 key={index} className="blog-subtitle">{trimmed.replace('##', '')}</h3>;
      }

      // 2. Detect Images (starts with IMAGE:)
      // Example: IMAGE: https://mysite.com/pic.jpg
      if (trimmed.startsWith('IMAGE:')) {
        const url = trimmed.replace('IMAGE:', '').trim();
        return <img key={index} src={url} alt="Blog detail" className="blog-inline-img" />;
      }

      // 3. Detect Bullet Points (starts with *)
      if (trimmed.startsWith('* ')) {
        return <li key={index} className="blog-list-item">{trimmed.replace('* ', '')}</li>;
      }

      // 4. Default: It's a Paragraph
      return <p key={index} className="blog-text">{trimmed}</p>;
    });
  };

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
          
          {/* USE THE PARSER HERE instead of dangerouslySetInnerHTML */}
          <div className="dynamic-content">
             {renderContent(post.content)}
          </div>

          <div className="post-tags">
            <strong>Tags:</strong>
            <div className="tag-cloud">
              {post.tags && post.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar (Kept same as before) */}
        <aside className="blog-sidebar">
          <div className="widget">
            <h3 className="widget-title">About the Author</h3>
            <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
              <img src="https://via.placeholder.com/60" style={{borderRadius:'50%'}} alt={post.author} />
              <div>
                <strong style={{display:'block', color:'var(--text-main)'}}>{post.author}</strong>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default SinglePost;