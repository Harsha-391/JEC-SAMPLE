import React, { useState, useEffect, useMemo } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';

// --- RICH TEXT EDITOR IMPORTS ---
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

// 1. Image Resizer
import BlotFormatter from 'quill-blot-formatter';
// 2. HTML Source Editor (Like WordPress Text Tab)
import htmlEditButton from "quill-html-edit-button";

// Register Modules
Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register("modules/htmlEditButton", htmlEditButton);

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

  // SEO State
  const [imageAlt, setImageAlt] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');

  // --- EDITOR CONFIGURATION ---
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }], 
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }], // Colors & Backgrounds
      [{ 'align': [] }],
      ['link', 'image', 'video'],
      ['clean'] // Remove formatting
    ],
    blotFormatter: {}, // Image Resizing
    htmlEditButton: {
      debug: true, // Logging
      msg: "Edit HTML Source", // Tooltip
      okText: "Update", // Save button text
      cancelText: "Cancel",
      buttonHTML: "&lt;&gt;", // The < > icon
      buttonTitle: "Show HTML Source",
      syntax: false, // Turn off syntax highlighting if you don't have highlight.js
      styleWrapper: `
        .ql-html-editorContainer { background: #f0f0f0; padding: 20px; border: 1px solid #ccc; }
        .ql-html-textArea { font-family: monospace; font-size: 14px; background: #1e1e1e; color: #d4d4d4; }
      `
    }
  }), []);

  // Fetch Logic (Same as before)
  const fetchPosts = async () => {
    try {
      const q = query(collection(db, "blog_posts"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(list);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content || !image) {
      toast.warn("Title, Content, and Image are required!");
      return;
    }
    const postData = {
      title, category, author, date, image, imageAlt, excerpt, content,
      isFeatured, metaTitle, metaDesc, metaKeywords, createdAt: new Date()
    };
    try {
      if (isEditing) {
        await updateDoc(doc(db, "blog_posts", editId), postData);
        toast.success("Post updated!");
      } else {
        await addDoc(collection(db, "blog_posts"), postData);
        toast.success("New post published!");
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      toast.error("Error saving post.");
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setCategory(post.category);
    setAuthor(post.author);
    setDate(post.date);
    setImage(post.image);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setIsFeatured(post.isFeatured || false);
    setImageAlt(post.imageAlt || '');
    setMetaTitle(post.metaTitle || '');
    setMetaDesc(post.metaDesc || '');
    setMetaKeywords(post.metaKeywords || '');
    setEditId(post.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this article?")) {
      await deleteDoc(doc(db, "blog_posts", id));
      toast.success("Article deleted.");
      fetchPosts();
    }
  };

  const resetForm = () => {
    setTitle(''); setCategory('Engineering'); setAuthor('JEC Admin');
    setDate(new Date().toISOString().split('T')[0]); setImage(''); setExcerpt('');
    setContent(''); setIsFeatured(false); setImageAlt(''); setMetaTitle('');
    setMetaDesc(''); setMetaKeywords(''); setIsEditing(false); setEditId(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <ToastContainer />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{isEditing ? "Edit Article" : "Write New Article"}</h2>
        {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
      </div>

      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
            
            {/* MAIN CONTENT AREA */}
            <div>
              <label style={styles.label}>Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={styles.input} placeholder="Article Title" />
              
              <label style={styles.label}>Excerpt</label>
              <textarea value={excerpt} onChange={e => setExcerpt(e.target.value)} style={{...styles.input, height: '80px'}} placeholder="Short summary..." />
              
              <label style={styles.label}>Content (Visual & HTML Code)</label>
              <div style={{ background: 'white', marginBottom: '20px' }}>
                <ReactQuill 
                  theme="snow" 
                  value={content} 
                  onChange={setContent} 
                  modules={modules} // Includes HTML Button
                  style={{ height: '500px', marginBottom: '50px' }} 
                />
              </div>
            </div>

            {/* SIDEBAR SETTINGS */}
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px', height: 'fit-content' }}>
              <ImageUpload label="Cover Image" onUploadComplete={setImage} />
              {image && <img src={image} alt="Preview" style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }} />}
              
              <label style={styles.label}>Image Alt Text</label>
              <input type="text" value={imageAlt} onChange={e => setImageAlt(e.target.value)} style={styles.input} />

              <label style={styles.label}>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} style={styles.input}>
                <option>Engineering</option>
                <option>Campus Life</option>
                <option>Placements</option>
                <option>Events</option>
              </select>

              <label style={styles.label}>Author & Date</label>
              <input type="text" value={author} onChange={e => setAuthor(e.target.value)} style={{...styles.input, marginBottom:'5px'}} />
              <input type="date" value={date} onChange={e => setDate(e.target.value)} style={styles.input} />

              <div style={{ margin: '15px 0' }}>
                <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" checked={isFeatured} onChange={e => setIsFeatured(e.target.checked)} />
                  Feature Post?
                </label>
              </div>

              <hr style={{margin:'15px 0', borderTop:'1px solid #ddd'}} />
              <h4>SEO</h4>
              <input type="text" value={metaTitle} onChange={e => setMetaTitle(e.target.value)} style={styles.input} placeholder="Meta Title" />
              <input type="text" value={metaKeywords} onChange={e => setMetaKeywords(e.target.value)} style={styles.input} placeholder="Keywords" />
              
              <button type="submit" style={styles.saveBtn}>{isEditing ? "Update" : "Publish"}</button>
            </div>
          </div>
        </form>
      </div>

      <div style={styles.listContainer}>
        {posts.map(post => (
          <div key={post.id} style={styles.listItem}>
            <img src={post.image} alt="thumb" style={styles.thumb} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: '0 0 5px' }}>{post.title}</h4>
              <small>{post.date}</small>
            </div>
            <div>
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
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' },
  saveBtn: { width: '100%', padding: '12px', background: '#2563EB', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' },
  cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop:'30px' },
  listItem: { display: 'flex', alignItems: 'center', gap: '15px', background: 'white', padding: '15px', borderRadius: '8px', border: '1px solid #eee' },
  thumb: { width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' },
  editBtn: { padding: '5px 10px', background: '#E0F2FE', color: '#0284C7', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight:'5px' },
  deleteBtn: { padding: '5px 10px', background: '#FEE2E2', color: '#DC2626', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default EditBlog;