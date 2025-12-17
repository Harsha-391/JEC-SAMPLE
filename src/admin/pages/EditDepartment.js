import React, { useState, useEffect, useMemo, useRef } from 'react';
import { db, storage } from '../../firebase'; 
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import ImageUpload from '../components/ImageUpload';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlotFormatter from 'quill-blot-formatter';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

Quill.register('modules/blotFormatter', BlotFormatter);

const EditDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const quillRef = useRef(null); 

  // Form States
  const [name, setName] = useState(''); 
  const [slug, setSlug] = useState(''); 
  const [title, setTitle] = useState(''); 
  const [subtitle, setSubtitle] = useState(''); 
  const [bannerImage, setBannerImage] = useState(''); 
  const [content, setContent] = useState(''); 

  // --- 1. CUSTOM LINK HANDLER ---
  const linkHandler = () => {
    const quill = quillRef.current.getEditor();
    const range = quill.getSelection();
    
    // Get the currently selected text (if any)
    let value = prompt('Enter link URL:');
    if (value) {
        // Auto-fix URL protocol
        if (!value.startsWith('http') && !value.startsWith('/') && !value.startsWith('#') && !value.startsWith('mailto:')) {
            value = `https://${value}`;
        }
        
        quill.format('link', value);
    }
  };

  // --- 2. CUSTOM IMAGE HANDLER ---
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        try {
            const toastId = toast.loading("Uploading image...");
            const storageRef = ref(storage, `departments/content-${uuidv4()}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', null, 
            (error) => {
                toast.dismiss(toastId);
                toast.error("Upload failed");
            }, 
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                toast.dismiss(toastId);
                
                const altText = window.prompt("Enter Alt Text for this image (SEO):", "");
                const quill = quillRef.current.getEditor();
                const range = quill.getSelection(true);
                
                quill.insertEmbed(range.index, 'image', url);
                
                if (altText) {
                    setTimeout(() => {
                        const img = document.querySelector(`.ql-editor img[src="${url}"]`);
                        if(img) img.setAttribute('alt', altText);
                    }, 100);
                }
                
                quill.setSelection(range.index + 1);
            });
        } catch (e) {
            console.error(e);
            toast.error("Error uploading image");
        }
      }
    };
  };

  // --- EDITOR MODULES ---
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }], 
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
        link: linkHandler // 3. Hook up Link Handler
      }
    },
    blotFormatter: {
      overlay: {
        style: {
          border: '2px solid #0072C6',
        }
      }
    }
  }), []);

  // --- FETCH & SUBMIT LOGIC (Unchanged) ---
  useEffect(() => { fetchDepartments(); }, []);
  const fetchDepartments = async () => {
    try {
      const q = query(collection(db, "departments"), orderBy("name"));
      const querySnapshot = await getDocs(q);
      setDepartments(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    } catch (error) { console.error(error); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let finalSlug = slug;
    if (!finalSlug && name) finalSlug = name.toLowerCase().replace(/ /g, '-');

    const data = { name, slug: finalSlug, title, subtitle, bannerImage, content, updatedAt: new Date() };

    try {
      if (isEditing) {
        await updateDoc(doc(db, "departments", editId), data);
        toast.success("Department Updated!");
      } else {
        await addDoc(collection(db, "departments"), data);
        toast.success("Department Created!");
      }
      resetForm();
      fetchDepartments();
    } catch (error) { toast.error("Error saving."); }
  };

  const handleEdit = (dept) => {
    setName(dept.name || '');
    setSlug(dept.slug || '');
    setTitle(dept.title || '');
    setSubtitle(dept.subtitle || '');
    setBannerImage(dept.bannerImage || '');
    setContent(dept.content || dept.about || ''); 
    setEditId(dept.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if(window.confirm("Delete this department?")) {
        await deleteDoc(doc(db, "departments", id));
        fetchDepartments();
    }
  }

  const resetForm = () => {
    setIsEditing(false); setEditId(null);
    setName(''); setSlug(''); setTitle(''); setSubtitle(''); setBannerImage('');
    setContent('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      <h2>{isEditing ? `Editing: ${name}` : "Add New Department"}</h2>
      
      <div style={{background:'white', padding:'20px', borderRadius:'10px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)'}}>
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px'}}>
              
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
                  <div>
                      <h3 style={styles.head}>1. Page Settings</h3>
                      <label style={styles.label}>Department Name</label>
                      <input type="text" value={name} onChange={e=>setName(e.target.value)} style={styles.input} placeholder="e.g. CSE Department" />
                      <label style={styles.label}>URL Slug</label>
                      <input type="text" value={slug} onChange={e=>setSlug(e.target.value)} style={styles.input} placeholder="e.g. computer-science" />
                      <label style={styles.label}>Hero Title</label>
                      <input type="text" value={title} onChange={e=>setTitle(e.target.value)} style={styles.input} placeholder="e.g. B.Tech Computer Science" />
                      <label style={styles.label}>Hero Subtitle</label>
                      <input type="text" value={subtitle} onChange={e=>setSubtitle(e.target.value)} style={styles.input} placeholder="e.g. Shaping Future Innovators" />
                  </div>

                  <div>
                       <h3 style={styles.head}>2. Header Image</h3>
                       <ImageUpload label="Upload Banner" onUploadComplete={setBannerImage} />
                       {bannerImage && (
                           <img src={bannerImage} alt="Preview" style={{width:'100%', height:'150px', objectFit:'cover', marginTop:'10px', borderRadius:'5px'}} />
                       )}
                  </div>
              </div>

              <div>
                  <h3 style={styles.head}>3. Rich Page Content</h3>
                  <div style={{ background: 'white', minHeight: '600px' }}>
                    <ReactQuill 
                        ref={quillRef}
                        theme="snow" 
                        value={content} 
                        onChange={setContent} 
                        modules={modules}
                        style={{ height: '550px', marginBottom: '50px' }} 
                    />
                  </div>
              </div>

              <div style={{marginTop:'20px'}}>
                   <button type="submit" style={styles.saveBtn}>{isEditing ? "Update Page" : "Create Page"}</button>
                   {isEditing && <button type="button" onClick={resetForm} style={styles.cancelBtn}>Cancel</button>}
              </div>

          </form>
      </div>
      
      <div style={{marginTop:'50px'}}>
          <h3>Existing Departments</h3>
          {departments.map(d => (
              <div key={d.id} style={{padding:'15px', borderBottom:'1px solid #eee', background:'white', marginBottom:'5px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div><strong>{d.name || "(No Name)"}</strong> <span style={{color:'#888', fontSize:'12px'}}>({d.slug})</span></div>
                  <div>
                    <button onClick={() => handleEdit(d)} style={{cursor:'pointer', padding:'5px 10px', marginRight:'5px', background:'#E0F2FE', border:'none', borderRadius:'4px'}}>Edit</button>
                    <button onClick={() => handleDelete(d.id)} style={{cursor:'pointer', padding:'5px 10px', background:'#FEE2E2', border:'none', borderRadius:'4px', color:'red'}}>Delete</button>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
};

const styles = {
    input: { width:'100%', padding:'10px', marginBottom:'10px', borderRadius:'4px', border:'1px solid #ddd' },
    label: { display:'block', marginBottom:'5px', fontWeight:'600', fontSize:'14px' },
    head: { borderBottom:'2px solid #eee', paddingBottom:'5px', color:'#0072C6', marginBottom:'15px' },
    saveBtn: { padding:'15px 30px', background:'#0072C6', color:'white', border:'none', borderRadius:'5px', cursor:'pointer', fontSize:'16px', fontWeight:'bold' },
    cancelBtn: { padding:'15px 30px', background:'#64748B', color:'white', border:'none', borderRadius:'5px', cursor:'pointer', fontSize:'16px', marginLeft:'10px' }
};

export default EditDepartment;