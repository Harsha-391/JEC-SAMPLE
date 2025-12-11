import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styling for the editor
import { ToastContainer, toast } from 'react-toastify';

const EditBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Engineering');
  const [author, setAuthor] = useState('JEC Admin');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [image, setImage] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);

  // --- NEW SEO STATE VARIABLES ---
  const [imageAlt, setImageAlt] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');

  // 1. Fetch Posts
  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "blog_posts"), orderBy("date", "desc")); // Newest first
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(list);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      // Fallback if indexing fails
      const querySnapshot = await getDocs(collection(db, "blog_posts"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 2. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !image) {
      toast.warn("Title, Content, and Image are required!");
      return;
    }

    const postData = {
      title,
      category,
      author,
      date,
      image,
      imageAlt,     // Save Alt Text
      excerpt,
      content,
      isFeatured,
      metaTitle,    // Save Meta Title
      metaDesc,     // Save Meta Description
      metaKeywords, // Save Meta Keywords
      createdAt: new Date()
    };

    try {
      if (isEditing) {
        await updateDoc(doc(db, "blog_posts", editId), postData);
        toast.success("Post updated successfully!");
      } else {
        await addDoc(collection(db, "blog_posts"), postData);
        toast.success("New post published!");
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      console.error("Error saving post:", error);
      toast.error("Error saving post.");
    }
  };

  // 3. Edit & Delete
  const handleEdit = (post) => {
    setTitle(post.title);
    setCategory(post.category);
    setAuthor(post.author);
    setDate(post.date);
    setImage(post.image);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setIsFeatured(post.isFeatured || false);
    
    // Set new fields (with fallbacks)
    setImageAlt(post.imageAlt || '');
    setMetaTitle(post.metaTitle || '');
    setMetaDesc(post.metaDesc || '');
    setMetaKeywords(post.metaKeywords || '');

    setEditId(post.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this article permanently?")) {
      await deleteDoc(doc(db, "blog_posts", id));
      toast.success("Article deleted.");
      fetchPosts();
    }
  };

  const resetForm = () => {
    setTitle('');
    setCategory('Engineering');
    setAuthor('JEC Admin');
    setDate(new Date().toISOString().split('T')[0]);
    setImage('');
    setExcerpt('');
    setContent('');
    setIsFeatured(false);
    
    // Reset new fields
    setImageAlt('');
    setMetaTitle('');
    setMetaDesc('');
    setMetaKeywords('');

    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <ToastContainer />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{isEditing ? "Edit Article" : "Write New Article"}</h2>
        {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
      </div>

      {/* --- EDITOR FORM --- */}
      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
            
            {/* LEFT COLUMN: Main Content */}
            <div>
              <label style={styles.label}>Title</label>
              <input 
                type="text" value={title} onChange={e => setTitle(e.target.value)} 
                style={styles.input} placeholder="Enter engaging title..." 
              />

              <label style={styles.label}>Short Excerpt (Summary)</label>
              <textarea 
                value={excerpt} onChange={e => setExcerpt(e.target.value)} 
                style={{...styles.input, height: '80px'}} placeholder="Appears on the blog card..." 
              />

              <label style={styles.label}>Main Content</label>
              <div style={{ background: 'white', marginBottom: '20px' }}>
                <ReactQuill theme="snow" value={content} onChange={setContent} style={{ height: '300px', marginBottom: '50px' }} />
              </div>
            </div>

            {/* RIGHT COLUMN: Settings & SEO */}
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
              
              <ImageUpload label="Cover Image" onUploadComplete={setImage} />
              {image && <img src={image} alt="Preview" style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }} />}

              {/* 2. Alt Text for Image */}
              <label style={styles.label}>Image Alt Text</label>
              <input 
                type="text" value={imageAlt} onChange={e => setImageAlt(e.target.value)} 
                style={styles.input} placeholder="Description for screen readers..." 
              />

              <label style={styles.label}>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} style={styles.input}>
                <option>Engineering</option>
                <option>Campus Life</option>
                <option>Placements</option>
                <option>Events</option>
                <option>Admissions</option>
              </select>

              <label style={styles.label}>Author</label>
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)} style={styles.input} />

              <label style={styles.label}>Date</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={styles.input} />

              <div style={{ margin: '15px 0' }}>
                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" checked={isFeatured} onChange={e => setIsFeatured(e.target.checked)} />
                  <strong>Feature this post?</strong>
                </label>
              </div>

              {/* --- SEO SECTION --- */}
              <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '15px 0' }} />
              <h4 style={{ margin: '0 0 10px', color: '#333' }}>SEO Settings</h4>

              {/* 1. Meta Title */}
              <label style={styles.label}>Meta Title</label>
              <input 
                type="text" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} 
                style={styles.input} placeholder="Browser tab title..." 
              />

              {/* 3. Meta Description */}
              <label style={styles.label}>Meta Description</label>
              <textarea 
                value={metaDesc} onChange={e => setMetaDesc(e.target.value)} 
                style={{...styles.input, height: '60px'}} placeholder="Search engine summary..." 
              />

              {/* 4. Meta Keywords */}
              <label style={styles.label}>Meta Keywords</label>
              <input 
                type="text" value={metaKeywords} onChange={e => setMetaKeywords(e.target.value)} 
                style={styles.input} placeholder="Comma separated keys..." 
              />

              <button type="submit" style={styles.saveBtn}>
                {isEditing ? "Update Post" : "Publish Post"}
              </button>
            </div>

          </div>
        </form>
      </div>

      {/* --- POST LIST --- */}
      <h2 style={{ marginTop: '40px' }}>Manage Articles</h2>
      <div style={styles.listContainer}>
        {posts.map(post => (
          <div key={post.id} style={styles.listItem}>
            <img src={post.image} alt="thumb" style={styles.thumb} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px' }}>{post.title}</h4>
              <span style={{ fontSize: '12px', background: '#eee', padding: '2px 8px', borderRadius: '4px' }}>{post.category}</span>
              {post.isFeatured && <span style={{ fontSize: '12px', background: '#FFD700', padding: '2px 8px', borderRadius: '4px', marginLeft: '5px' }}>Featured</span>}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => handleEdit(post)} style={styles.editBtn}>Edit</button>
              <button onClick={() => handleDelete(post.id)} style={styles.deleteBtn}>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  label: { display: 'block', fontWeight: '600', margin: '10px 0 5px', fontSize: '14px' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '14px', boxSizing: 'border-box' },
  saveBtn: { width: '100%', padding: '12px', background: '#2563EB', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' },
  cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '15px' },
  listItem: { display: 'flex', alignItems: 'center', gap: '15px', background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #eee' },
  thumb: { width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' },
  editBtn: { padding: '5px 10px', background: '#E0F2FE', color: '#0284C7', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  deleteBtn: { padding: '5px 10px', background: '#FEE2E2', color: '#DC2626', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default EditBlog;