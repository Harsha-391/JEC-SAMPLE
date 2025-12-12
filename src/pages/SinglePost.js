import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Helmet } from 'react-helmet-async'; 
import './Blog.css';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
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

  // Fix links automatically
  useEffect(() => {
    if (post && contentRef.current) {
      const links = contentRef.current.querySelectorAll('a');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          if (!href.startsWith('http') && !href.startsWith('/') && !href.startsWith('#') && !href.startsWith('mailto:')) {
            link.setAttribute('href', `https://${href}`);
          }
          if (!href.startsWith('/')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer'); 
          }
        }
      });
    }
  }, [post]);

  if (loading) {
    return (
      <div className="blog-page-wrapper" style={{padding:'100px', textAlign:'center'}}>
        <Helmet>
          <title>Loading Article... | JEC Jaipur</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div>Loading Article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="blog-page-wrapper" style={{padding:'100px', textAlign:'center'}}>
         <Helmet>
          <title>Article Not Found | JEC Jaipur</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div>Article not found.</div>
      </div>
    );
  }

  // Safe Fallback logic
  const pageTitle = post.metaTitle || post.title || "Blog Post";
  const pageDesc = post.metaDesc || post.excerpt || "Read this article on JEC Blog";
  const currentUrl = window.location.href;
  const pageImage = post.image || "https://your-domain.com/default-image.jpg"; 

  return (
    <div className="blog-page-wrapper">
      
      {/* DYNAMIC SEO TAGS */}
      <Helmet>
        <title>{pageTitle} | JEC Jaipur</title>
        <meta name="description" content={pageDesc} />
        <meta name="keywords" content={post.metaKeywords || "Engineering, JEC, College"} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={currentUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImage} />
      </Helmet>

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
          
          {/* --- UPDATED: Visible Featured Image --- */}
          <img 
            src={post.image} 
            alt={post.imageAlt || post.title} 
            style={{
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px', 
              marginBottom: '30px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)' // Subtle shadow for better look
            }} 
          />

          <div 
            ref={contentRef}
            className="dynamic-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="post-tags">
            <strong>Tags:</strong>
            <div className="tag-cloud">
               <span className="tag">{post.category}</span>
               {post.metaKeywords && post.metaKeywords.split(',').map((k, i) => (
                 <span key={i} className="tag">{k.trim()}</span>
               ))}
            </div>
          </div>
        </article>

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