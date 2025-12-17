import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';

const EditPlacements = () => {
  const [activeTab, setActiveTab] = useState('star'); // star, gallery, drives
  const [loading, setLoading] = useState(false);

  // --- STAR ACHIEVERS STATE ---
  const [stars, setStars] = useState([]);
  const [starForm, setStarForm] = useState({ name: '', company: '', package: '', image: '' });

  // --- GALLERY STATE ---
  const [gallery, setGallery] = useState([]);
  const [galleryForm, setGalleryForm] = useState({ name: '', company: '', package: '', image: '', isPremium: false });

  // --- DRIVES STATE ---
  const [drives, setDrives] = useState([]);
  const [driveForm, setDriveForm] = useState({ year: '2024-25', date: '', company: '', ctc: '', branch: '' });

  // --- FETCH DATA ---
  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch Stars
      const starQ = query(collection(db, "placement_stars"), orderBy("package", "desc")); // Simplified ordering
      const starSnaps = await getDocs(starQ);
      setStars(starSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Fetch Gallery
      const gallQ = query(collection(db, "placement_gallery"));
      const gallSnaps = await getDocs(gallQ);
      setGallery(gallSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Fetch Drives
      const driveQ = query(collection(db, "placement_drives"), orderBy("date", "desc"));
      const driveSnaps = await getDocs(driveQ);
      setDrives(driveSnaps.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    } catch (error) {
      console.error(error);
      toast.error("Error fetching data");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- HANDLERS ---

  // 1. Star Achievers
  const handleStarSubmit = async (e) => {
    e.preventDefault();
    if (!starForm.name || !starForm.image) return toast.warn("Name and Image required");
    try {
      await addDoc(collection(db, "placement_stars"), starForm);
      toast.success("Star Achiever Added");
      setStarForm({ name: '', company: '', package: '', image: '' });
      fetchData();
    } catch (err) { toast.error("Failed to add"); }
  };

  const deleteStar = async (id) => {
    if (window.confirm("Delete this achiever?")) {
      await deleteDoc(doc(db, "placement_stars", id));
      fetchData();
    }
  };

  // 2. Gallery
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    if (!galleryForm.name || !galleryForm.image) return toast.warn("Name and Image required");
    try {
      await addDoc(collection(db, "placement_gallery"), galleryForm);
      toast.success("Student Added to Gallery");
      setGalleryForm({ name: '', company: '', package: '', image: '', isPremium: false });
      fetchData();
    } catch (err) { toast.error("Failed to add"); }
  };

  const deleteGallery = async (id) => {
    if (window.confirm("Delete?")) {
      await deleteDoc(doc(db, "placement_gallery", id));
      fetchData();
    }
  };

  // 3. Drives
  const handleDriveSubmit = async (e) => {
    e.preventDefault();
    if (!driveForm.company || !driveForm.year) return toast.warn("Company and Year required");
    try {
      await addDoc(collection(db, "placement_drives"), driveForm);
      toast.success("Drive Added");
      setDriveForm({ ...driveForm, company: '', ctc: '', branch: '' }); // Keep year and date for convenience
      fetchData();
    } catch (err) { toast.error("Failed to add"); }
  };

  const deleteDrive = async (id) => {
    if (window.confirm("Delete this drive entry?")) {
      await deleteDoc(doc(db, "placement_drives", id));
      fetchData();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      <h2>Manage Placements</h2>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('star')} style={tabStyle(activeTab === 'star')}>Star Achievers</button>
        <button onClick={() => setActiveTab('gallery')} style={tabStyle(activeTab === 'gallery')}>Placement Gallery</button>
        <button onClick={() => setActiveTab('drives')} style={tabStyle(activeTab === 'drives')}>Placement Drives (Tables)</button>
      </div>

      {/* --- STAR ACHIEVERS TAB --- */}
      {activeTab === 'star' && (
        <div>
          <div style={styles.card}>
            <h3>Add Star Achiever</h3>
            <form onSubmit={handleStarSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input placeholder="Student Name" value={starForm.name} onChange={e => setStarForm({...starForm, name: e.target.value})} style={styles.input} />
              <input placeholder="Company" value={starForm.company} onChange={e => setStarForm({...starForm, company: e.target.value})} style={styles.input} />
              <input placeholder="Package (e.g. 1.56 Cr)" value={starForm.package} onChange={e => setStarForm({...starForm, package: e.target.value})} style={styles.input} />
              <div style={{ gridColumn: '1 / -1' }}>
                <ImageUpload label="Student Photo" onUploadComplete={(url) => setStarForm({...starForm, image: url})} />
                {starForm.image && <small>Image Uploaded</small>}
              </div>
              <button type="submit" style={styles.btn}>Add Achiever</button>
            </form>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px', marginTop: '20px' }}>
            {stars.map(item => (
              <div key={item.id} style={styles.itemCard}>
                <img src={item.image} alt="s" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
                <h4>{item.name}</h4>
                <p>{item.company} | {item.package}</p>
                <button onClick={() => deleteStar(item.id)} style={styles.delBtn}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- GALLERY TAB --- */}
      {activeTab === 'gallery' && (
        <div>
          <div style={styles.card}>
            <h3>Add to Gallery</h3>
            <form onSubmit={handleGallerySubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <input placeholder="Student Name" value={galleryForm.name} onChange={e => setGalleryForm({...galleryForm, name: e.target.value})} style={styles.input} />
              <input placeholder="Company" value={galleryForm.company} onChange={e => setGalleryForm({...galleryForm, company: e.target.value})} style={styles.input} />
              <input placeholder="Package (e.g. 12 LPA)" value={galleryForm.package} onChange={e => setGalleryForm({...galleryForm, package: e.target.value})} style={styles.input} />
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor:'pointer' }}>
                <input type="checkbox" checked={galleryForm.isPremium} onChange={e => setGalleryForm({...galleryForm, isPremium: e.target.checked})} />
                Is Premium (Large Card)?
              </label>

              <div style={{ gridColumn: '1 / -1' }}>
                <ImageUpload label="Student Photo" onUploadComplete={(url) => setGalleryForm({...galleryForm, image: url})} />
              </div>
              <button type="submit" style={styles.btn}>Add Student</button>
            </form>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px', marginTop: '20px' }}>
            {gallery.map(item => (
              <div key={item.id} style={{...styles.itemCard, border: item.isPremium ? '2px solid gold' : '1px solid #eee'}}>
                <img src={item.image} alt="s" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '5px' }} />
                <h5>{item.name}</h5>
                <p style={{fontSize:'12px'}}>{item.company}</p>
                <button onClick={() => deleteGallery(item.id)} style={styles.delBtn}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- DRIVES TAB --- */}
      {activeTab === 'drives' && (
        <div>
          <div style={styles.card}>
            <h3>Add Drive Entry</h3>
            <form onSubmit={handleDriveSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
              <select value={driveForm.year} onChange={e => setDriveForm({...driveForm, year: e.target.value})} style={styles.input}>
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
              </select>
              <input type="date" value={driveForm.date} onChange={e => setDriveForm({...driveForm, date: e.target.value})} style={styles.input} />
              <input placeholder="Company Name" value={driveForm.company} onChange={e => setDriveForm({...driveForm, company: e.target.value})} style={styles.input} />
              <input placeholder="CTC (e.g. 5.50)" value={driveForm.ctc} onChange={e => setDriveForm({...driveForm, ctc: e.target.value})} style={styles.input} />
              <input placeholder="Branch (e.g. CS/IT)" value={driveForm.branch} onChange={e => setDriveForm({...driveForm, branch: e.target.value})} style={styles.input} />
              
              <button type="submit" style={{...styles.btn, gridColumn: '1 / -1'}}>Add Drive</button>
            </form>
          </div>

          <div style={{ marginTop: '20px' }}>
            {['2024-25', '2023-24', '2022-23', '2021-22'].map(year => {
              const yearDrives = drives.filter(d => d.year === year);
              if (yearDrives.length === 0) return null;
              return (
                <div key={year} style={{ marginBottom: '30px' }}>
                  <h4 style={{borderBottom:'2px solid #0072C6', display:'inline-block'}}>{year}</h4>
                  <table style={{width:'100%', borderCollapse:'collapse', marginTop:'10px'}}>
                    <thead>
                      <tr style={{background:'#f0f0f0', textAlign:'left'}}>
                        <th style={{padding:'8px'}}>Date</th>
                        <th style={{padding:'8px'}}>Company</th>
                        <th style={{padding:'8px'}}>CTC</th>
                        <th style={{padding:'8px'}}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearDrives.map(d => (
                        <tr key={d.id} style={{borderBottom:'1px solid #eee'}}>
                          <td style={{padding:'8px'}}>{d.date}</td>
                          <td style={{padding:'8px'}}>{d.company}</td>
                          <td style={{padding:'8px'}}>{d.ctc}</td>
                          <td style={{padding:'8px'}}>
                            <button onClick={() => deleteDrive(d.id)} style={{color:'red', border:'none', background:'none', cursor:'pointer'}}>X</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            })}
          </div>
        </div>
      )}

    </div>
  );
};

const tabStyle = (isActive) => ({
  padding: '10px 20px',
  border: 'none',
  background: isActive ? '#0072C6' : '#eee',
  color: isActive ? 'white' : 'black',
  cursor: 'pointer',
  borderRadius: '5px'
});

const styles = {
  card: { background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  input: { padding: '10px', border: '1px solid #ddd', borderRadius: '5px' },
  btn: { padding: '10px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' },
  itemCard: { background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' },
  delBtn: { marginTop: '10px', padding: '5px 10px', background: '#fee2e2', color: 'red', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default EditPlacements;