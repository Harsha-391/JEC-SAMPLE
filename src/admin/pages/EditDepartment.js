import React, { useState, useEffect, useMemo, useRef } from 'react';
import { db, storage } from '../../firebase'; 
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import ImageUpload from '../components/ImageUpload';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import BlotFormatter from 'quill-blot-formatter';
import htmlEditButton from "quill-html-edit-button"; 
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

// --- KEY FIX: REGISTER INLINE STYLES ---
// This forces Quill to use style="color: red" instead of classes
const ColorStyle = Quill.import('attributors/style/color');
const BackgroundStyle = Quill.import('attributors/style/background');
const SizeStyle = Quill.import('attributors/style/size');
const AlignStyle = Quill.import('attributors/style/align');
const FontStyle = Quill.import('attributors/style/font');

Quill.register(ColorStyle, true);
Quill.register(BackgroundStyle, true);
Quill.register(SizeStyle, true);
Quill.register(AlignStyle, true);
Quill.register(FontStyle, true);

// Register Modules
Quill.register('modules/blotFormatter', BlotFormatter);
Quill.register("modules/htmlEditButton", htmlEditButton);

const EditDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  
  const contentQuillRef = useRef(null); 
  const eligibilityQuillRef = useRef(null); 

  // Form States
  const [name, setName] = useState(''); 
  const [slug, setSlug] = useState(''); 
  const [title, setTitle] = useState(''); 
  const [subtitle, setSubtitle] = useState(''); 
  const [bannerImage, setBannerImage] = useState(''); 
  const [content, setContent] = useState(''); 

  const [hodName, setHodName] = useState('');
  const [hodMessage, setHodMessage] = useState('');
  const [hodImage, setHodImage] = useState('');
  const [eligibility, setEligibility] = useState('');

  const DEFAULT_ELIGIBILITY = `
    <p><strong>B.Tech: (4 Years / 8 Semesters)</strong></p>
    <p>The journey begins after 10+2 / 12th passed with minimum 45% marks...</p>
    <h4 style="color: #0072C6;">SPEAK, DISCUSS & MEET YOUR COUNSELOR(S)!</h4>
    <p>Your admission counselors are ready to serve you!...</p>
  `;

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
            uploadTask.on('state_changed', null, (error) => toast.error("Upload failed"), 
            async () => {
                const url = await getDownloadURL(uploadTask.snapshot.ref);
                toast.dismiss(toastId);
                const altText = window.prompt("Enter Alt Text for this image (SEO):", "");
                
                const quill = document.querySelector('.ql-editor:focus')?.parentElement?.__quill;
                if (quill) {
                    const range = quill.getSelection(true);
                    quill.insertEmbed(range.index, 'image', url);
                    if (altText) {
                        setTimeout(() => {
                            const img = quill.root.querySelector(`img[src="${url}"]`);
                            if(img) img.setAttribute('alt', altText);
                        }, 100);
                    }
                    quill.setSelection(range.index + 1);
                } else {
                    toast.warn("Please click inside the editor content first.");
                }
            });
        } catch (e) { toast.error("Error uploading image"); }
      }
    };
  };

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }], 
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ],
      handlers: { image: imageHandler }
    },
    blotFormatter: {},
    htmlEditButton: {
      debug: true,
      msg: "Edit HTML Source",
      okText: "Update",
      buttonHTML: "&lt;&gt;", 
      buttonTitle: "Show HTML Source",
      styleWrapper: `
        .ql-html-editorContainer { background: #f0f0f0; padding: 20px; border: 1px solid #ccc; }
        .ql-html-textArea { background: #1e1e1e; color: #d4d4d4; font-family: monospace; font-size: 14px; padding: 10px; border-radius: 5px; }
      `
    }
  }), []);

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
    const data = { 
        name, slug: finalSlug, title, subtitle, bannerImage, content, 
        hodName, hodMessage, hodImage, eligibility, updatedAt: new Date() 
    };
    try {
      if (isEditing) { await updateDoc(doc(db, "departments", editId), data); toast.success("Updated!"); } 
      else { await addDoc(collection(db, "departments"), data); toast.success("Created!"); }
      resetForm(); fetchDepartments();
    } catch (error) { toast.error("Error saving."); }
  };

  const handleEdit = (dept) => {
    setName(dept.name || ''); setSlug(dept.slug || ''); setTitle(dept.title || '');
    setSubtitle(dept.subtitle || ''); setBannerImage(dept.bannerImage || '');
    setContent(dept.content || dept.about || ''); setHodName(dept.hodName || '');
    setHodMessage(dept.hodMessage || ''); setHodImage(dept.hodImage || '');
    setEligibility(dept.eligibility || '');
    setEditId(dept.id); setIsEditing(true); window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setIsEditing(false); setEditId(null); setName(''); setSlug(''); setTitle('');
    setSubtitle(''); setBannerImage(''); setContent(''); setHodName('');
    setHodMessage(''); setHodImage(''); setEligibility('');
  };

  const handleDelete = async (id) => {
    if(window.confirm("Delete?")) { await deleteDoc(doc(db, "departments", id)); fetchDepartments(); }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      <h2>{isEditing ? `Editing: ${name}` : "Add New Department"}</h2>
      
      <div style={{background:'white', padding:'20px', borderRadius:'10px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)'}}>
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'30px'}}>
              
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'20px'}}>
                  <div>
                      <h3 style={styles.head}>1. Page Settings</h3>
                      <label style={styles.label}>Department Name</label>
                      <input type="text" value={name} onChange={e=>setName(e.target.value)} style={styles.input} placeholder="e.g. CSE" />
                      <label style={styles.label}>URL Slug</label>
                      <input type="text" value={slug} onChange={e=>setSlug(e.target.value)} style={styles.input} placeholder="e.g. cse-ai" />
                      <label style={styles.label}>Hero Title</label>
                      <input type="text" value={title} onChange={e=>setTitle(e.target.value)} style={styles.input} placeholder="Main Heading" />
                      <label style={styles.label}>Hero Subtitle</label>
                      <input type="text" value={subtitle} onChange={e=>setSubtitle(e.target.value)} style={styles.input} />
                  </div>
                  <div>
                       <h3 style={styles.head}>2. Header Image</h3>
                       <ImageUpload 
                          label="Upload Banner (2400x760px)" 
                          onUploadComplete={setBannerImage}
                          constraints={{ width: 2400, height: 760, exact: false }}
                       />
                       {bannerImage && <img src={bannerImage} alt="Preview" style={{width:'100%', height:'100px', objectFit:'cover', marginTop:'10px', borderRadius:'5px'}} />}
                  </div>
              </div>

              <div>
                  <h3 style={styles.head}>3. Main Content (Free Canvas)</h3>
                  <div style={{ background: 'white' }}>
                    <ReactQuill 
                        ref={contentQuillRef}
                        theme="snow" 
                        value={content} 
                        onChange={setContent} 
                        modules={modules} 
                        style={{ height: '500px', marginBottom: '50px' }} 
                    />
                  </div>
              </div>

              <div style={{background:'#F8FAFC', padding:'20px', borderRadius:'8px', border:'1px solid #e2e8f0'}}>
                  <h3 style={styles.head}>4. HOD Section</h3>
                  <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:'20px'}}>
                      <div>
                          <ImageUpload label="HOD Photo (500x500px)" onUploadComplete={setHodImage} constraints={{width:500, height:500, exact:true}} />
                          {hodImage && <img src={hodImage} alt="HOD" style={{width:'80px', height:'80px', borderRadius:'50%', objectFit:'cover', marginTop:'10px'}} />}
                      </div>
                      <div>
                          <label style={styles.label}>HOD Name</label>
                          <input type="text" value={hodName} onChange={e=>setHodName(e.target.value)} style={styles.input} />
                          <label style={styles.label}>Message</label>
                          <textarea value={hodMessage} onChange={e=>setHodMessage(e.target.value)} style={{...styles.input, height:'80px'}} />
                      </div>
                  </div>
              </div>

              {/* ELIGIBILITY EDITOR */}
              <div style={{background:'#F0FDF4', padding:'20px', borderRadius:'8px', border:'1px solid #bbf7d0'}}>
                  <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <h3 style={{...styles.head, color:'#15803d', marginBottom:0, borderBottom:'none'}}>5. Eligibility & How to Apply</h3>
                    <button type="button" onClick={() => setEligibility(DEFAULT_ELIGIBILITY)} style={{fontSize:'12px', padding:'5px 10px', background:'#22c55e', color:'white', border:'none', borderRadius:'4px', cursor:'pointer'}}>
                        Load Default Text
                    </button>
                  </div>
                  
                  <div style={{ background: 'white' }}>
                    <ReactQuill 
                        ref={eligibilityQuillRef}
                        theme="snow" 
                        value={eligibility} 
                        onChange={setEligibility} 
                        modules={modules} 
                        style={{ height: '300px', marginBottom: '50px' }} 
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
              <div key={d.id} style={{padding:'10px', borderBottom:'1px solid #ccc', display:'flex', justifyContent:'space-between'}}>
                  <span>{d.name}</span>
                  <button onClick={() => handleEdit(d)}>Edit</button>
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