// src/admin/pages/EditDepartment.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer, toast } from 'react-toastify';

const EditDepartment = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [name, setName] = useState(''); 
  const [slug, setSlug] = useState(''); 
  const [bannerImage, setBannerImage] = useState('');
  const [aboutImage, setAboutImage] = useState(''); 
  const [about, setAbout] = useState(''); 
  
  // New Fields replacing Vision/Mission
  const [coreKnowledge, setCoreKnowledge] = useState('');
  const [professionalSkills, setProfessionalSkills] = useState('');
  const [advancedApplication, setAdvancedApplication] = useState('');

  const [hodName, setHodName] = useState('');
  const [hodMessage, setHodMessage] = useState('');
  const [hodImage, setHodImage] = useState('');

  // 1. Fetch Departments
  const fetchDepartments = async () => {
    try {
      const q = query(collection(db, "departments"), orderBy("name"));
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDepartments(list);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching departments:", error);
      const querySnapshot = await getDocs(collection(db, "departments"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDepartments(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  // 2. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !slug) {
      toast.warn("Department Name and Slug are required!");
      return;
    }

    const deptData = {
      name,
      slug,
      bannerImage,
      aboutImage,
      about,
      // Save new fields
      coreKnowledge, 
      professionalSkills,
      advancedApplication,
      hodName,
      hodMessage,
      hodImage,
      updatedAt: new Date()
    };

    try {
      if (isEditing) {
        await updateDoc(doc(db, "departments", editId), deptData);
        toast.success("Department updated successfully!");
      } else {
        await addDoc(collection(db, "departments"), deptData);
        toast.success("New Department added!");
      }
      resetForm();
      fetchDepartments();
    } catch (error) {
      console.error("Error saving department:", error);
      toast.error("Error saving data.");
    }
  };

  // 3. Edit & Delete
  const handleEdit = (dept) => {
    setName(dept.name);
    setSlug(dept.slug);
    setBannerImage(dept.bannerImage);
    setAboutImage(dept.aboutImage || '');
    setAbout(dept.about);
    
    // Load new fields (fallback to empty string)
    setCoreKnowledge(dept.coreKnowledge || '');
    setProfessionalSkills(dept.professionalSkills || '');
    setAdvancedApplication(dept.advancedApplication || '');

    setHodName(dept.hodName);
    setHodMessage(dept.hodMessage);
    setHodImage(dept.hodImage);
    
    setEditId(dept.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this department permanently?")) {
      await deleteDoc(doc(db, "departments", id));
      toast.success("Department deleted.");
      fetchDepartments();
    }
  };

  const resetForm = () => {
    setName('');
    setSlug('');
    setBannerImage('');
    setAboutImage('');
    setAbout('');
    setCoreKnowledge('');
    setProfessionalSkills('');
    setAdvancedApplication('');
    setHodName('');
    setHodMessage('');
    setHodImage('');
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{isEditing ? "Edit Department" : "Add New Department"}</h2>
        {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
      </div>

      {/* --- FORM --- */}
      <div style={styles.card}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            
            {/* LEFT COLUMN: Main Info */}
            <div>
              <label style={styles.label}>Department Name</label>
              <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                style={styles.input} 
                placeholder="e.g. Computer Science Engineering" 
              />

              <div style={{ background: '#e0f2fe', padding: '10px', borderRadius: '5px', margin: '15px 0' }}>
                <label style={{...styles.label, color: '#0284c7'}}>URL Slug (Must match App.js route exactly)</label>
                <input 
                    type="text" 
                    value={slug} 
                    onChange={e => setSlug(e.target.value)} 
                    style={{...styles.input, borderColor: '#0284c7'}} 
                    placeholder="e.g. Computer-Science-Engineering" 
                />
              </div>

              <label style={styles.label}>About Department (Rich Text)</label>
              <ReactQuill theme="snow" value={about} onChange={setAbout} style={{ height: '200px', marginBottom: '50px' }} />

              {/* --- NEW SECTIONS --- */}
              <h3 style={{marginTop:'30px', borderBottom:'2px solid #eee', paddingBottom:'10px'}}>Program Outcomes</h3>
              
              <label style={styles.label}>1. Core Knowledge</label>
              <ReactQuill theme="snow" value={coreKnowledge} onChange={setCoreKnowledge} style={{ height: '150px', marginBottom: '50px' }} />

              <label style={styles.label}>2. Professional Skills</label>
              <ReactQuill theme="snow" value={professionalSkills} onChange={setProfessionalSkills} style={{ height: '150px', marginBottom: '50px' }} />

              <label style={styles.label}>3. Advanced Application</label>
              <ReactQuill theme="snow" value={advancedApplication} onChange={setAdvancedApplication} style={{ height: '150px', marginBottom: '50px' }} />

            </div>

            {/* RIGHT COLUMN: HOD & Images */}
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', height:'fit-content' }}>
              
              <ImageUpload label="1. Banner Image (Top)" onUploadComplete={setBannerImage} />
              {bannerImage && <img src={bannerImage} alt="Banner" style={{ width: '100%', height:'100px', objectFit:'cover', borderRadius: '5px', marginTop: '10px', marginBottom:'20px' }} />}

              <hr style={{borderTop:'1px solid #ddd', margin:'20px 0'}} />
              <ImageUpload label="2. About Section Image" onUploadComplete={setAboutImage} />
              {aboutImage && <img src={aboutImage} alt="About" style={{ width: '100%', height:'150px', objectFit:'cover', borderRadius: '5px', marginTop: '10px', marginBottom:'20px' }} />}

              <hr style={{borderTop:'1px solid #ddd', margin:'20px 0'}} />
              <h4>HOD Details</h4>
              <ImageUpload label="3. HOD Photo" onUploadComplete={setHodImage} />
              {hodImage && <img src={hodImage} alt="HOD" style={{ width: '80px', height:'80px', borderRadius: '50%', objectFit:'cover', marginTop: '10px' }} />}

              <label style={styles.label}>HOD Name</label>
              <input type="text" value={hodName} onChange={e => setHodName(e.target.value)} style={styles.input} placeholder="Dr. XYZ" />

              <label style={styles.label}>HOD Message</label>
              <textarea value={hodMessage} onChange={e => setHodMessage(e.target.value)} style={{...styles.input, height:'80px'}} />

              <button type="submit" style={styles.saveBtn}>
                {isEditing ? "Update Department" : "Create Department"}
              </button>
            </div>

          </div>
        </form>
      </div>

      {/* --- LIST --- */}
      <div style={{ marginTop: '50px' }}>
        <h3>Existing Departments</h3>
        <div style={styles.grid}>
            {departments.map(dept => (
              <div key={dept.id} style={styles.deptCard}>
                <img src={dept.bannerImage || "https://via.placeholder.com/300x100"} alt="banner" style={{ width:'100%', height:'120px', objectFit:'cover' }} />
                <div style={{ padding: '15px' }}>
                    <h4 style={{ margin: '0 0 5px 0', color: '#0072C6' }}>{dept.name}</h4>
                    <small style={{ display: 'block', color: '#666', marginBottom: '10px' }}>Slug: {dept.slug}</small>
                    
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => handleEdit(dept)} style={styles.editBtn}>Edit</button>
                        <button onClick={() => handleDelete(dept.id)} style={styles.deleteBtn}>Delete</button>
                    </div>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  label: { display: 'block', fontWeight: '600', margin: '15px 0 5px', fontSize: '13px', color: '#444' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' },
  saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' },
  cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' },
  deptCard: { background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #eee' },
  editBtn: { flex: 1, padding: '8px', background: '#E0F2FE', color: '#0284C7', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' },
  deleteBtn: { flex: 1, padding: '8px', background: '#FEE2E2', color: '#DC2626', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }
};

export default EditDepartment;