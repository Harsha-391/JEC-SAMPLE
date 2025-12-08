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
  const [name, setName] = useState(''); // e.g. "Computer Science & Engineering"
  const [slug, setSlug] = useState(''); // e.g. "cse" (used for matching routes if needed)
  const [bannerImage, setBannerImage] = useState('');
  const [about, setAbout] = useState(''); // Rich Text
  const [hodName, setHodName] = useState('');
  const [hodMessage, setHodMessage] = useState('');
  const [hodImage, setHodImage] = useState('');
  const [vision, setVision] = useState('');
  const [mission, setMission] = useState('');

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
      // Fallback without sort if index missing
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
    if (!name || !about) {
      toast.warn("Department Name and About section are required!");
      return;
    }

    const deptData = {
      name,
      slug: slug || name.toLowerCase().replace(/ /g, '-'),
      bannerImage,
      about,
      hodName,
      hodMessage,
      hodImage,
      vision,
      mission,
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
    setAbout(dept.about);
    setHodName(dept.hodName);
    setHodMessage(dept.hodMessage);
    setHodImage(dept.hodImage);
    setVision(dept.vision);
    setMission(dept.mission);
    
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
    setAbout('');
    setHodName('');
    setHodMessage('');
    setHodImage('');
    setVision('');
    setMission('');
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
              <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} placeholder="e.g. Computer Science Engineering" />

              <label style={styles.label}>About Department (Rich Text)</label>
              <ReactQuill theme="snow" value={about} onChange={setAbout} style={{ height: '200px', marginBottom: '50px' }} />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                    <label style={styles.label}>Vision</label>
                    <textarea value={vision} onChange={e => setVision(e.target.value)} style={{...styles.input, height:'100px'}} />
                </div>
                <div>
                    <label style={styles.label}>Mission</label>
                    <textarea value={mission} onChange={e => setMission(e.target.value)} style={{...styles.input, height:'100px'}} />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: HOD & Images */}
            <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', height:'fit-content' }}>
              
              <ImageUpload label="Banner Image" onUploadComplete={setBannerImage} />
              {bannerImage && <img src={bannerImage} alt="Banner" style={{ width: '100%', height:'100px', objectFit:'cover', borderRadius: '5px', marginTop: '10px', marginBottom:'20px' }} />}

              <hr style={{borderTop:'1px solid #ddd', margin:'20px 0'}} />
              
              <h4>HOD Details</h4>
              <ImageUpload label="HOD Photo" onUploadComplete={setHodImage} />
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
                    <h4 style={{ margin: '0 0 10px 0', color: '#0072C6' }}>{dept.name}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom:'15px' }}>
                        <img src={dept.hodImage || "https://via.placeholder.com/40"} alt="HOD" style={{width:'40px', height:'40px', borderRadius:'50%'}} />
                        <div style={{fontSize:'13px'}}>
                            <strong>HOD:</strong> {dept.hodName || 'N/A'}
                        </div>
                    </div>
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