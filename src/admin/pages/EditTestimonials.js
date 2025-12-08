// src/admin/pages/EditTestimonials.js
import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';

const EditTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Editing State
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [name, setName] = useState('');
  const [course, setCourse] = useState(''); // e.g. "B.Tech CSE (2024 Batch)"
  const [quote, setQuote] = useState('');
  const [placement, setPlacement] = useState(''); // e.g. "Placed at Microsoft"
  const [salary, setSalary] = useState(''); // e.g. "44 LPA"
  const [image, setImage] = useState('');
  const [order, setOrder] = useState(1);

  // 1. Fetch Data
  const fetchTestimonials = async () => {
    try {
      // Try to order by 'order', fallback if index missing
      const q = query(collection(db, "student_testimonials"), orderBy("order")); 
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(list);
      setLoading(false);
    } catch (error) {
      console.warn("Index might be missing, fetching without sort:", error);
      const querySnapshot = await getDocs(collection(db, "student_testimonials"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // 2. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quote || !course) {
      toast.warn("Name, Course, and Quote are required!");
      return;
    }

    const data = {
      name,
      course,
      quote,
      placement,
      salary,
      imageUrl: image, // Matches frontend property name
      order: Number(order)
    };

    try {
      if (isEditing) {
        await updateDoc(doc(db, "student_testimonials", editId), data);
        toast.success("Testimonial updated!");
      } else {
        await addDoc(collection(db, "student_testimonials"), data);
        toast.success("Testimonial added!");
      }
      resetForm();
      fetchTestimonials();
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Error saving data.");
    }
  };

  // 3. Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Delete this testimonial permanently?")) {
      await deleteDoc(doc(db, "student_testimonials", id));
      toast.success("Deleted successfully.");
      fetchTestimonials();
    }
  };

  // 4. Handle Edit
  const handleEdit = (item) => {
    setName(item.name);
    setCourse(item.course);
    setQuote(item.quote);
    setPlacement(item.placement || '');
    setSalary(item.salary || '');
    setImage(item.imageUrl || '');
    setOrder(item.order || 1);
    
    setEditId(item.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setName('');
    setCourse('');
    setQuote('');
    setPlacement('');
    setSalary('');
    setImage('');
    setOrder(1);
    setIsEditing(false);
    setEditId(null);
  };

  // 5. Search Filter
  const filteredList = testimonials.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.placement && item.placement.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      <ToastContainer />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{isEditing ? "Edit Testimonial" : "Add New Testimonial"}</h2>
        {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel</button>}
      </div>

      {/* --- FORM --- */}
      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          
          {/* Left: Image */}
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
             <ImageUpload label="Student Photo" onUploadComplete={setImage} />
             {image ? (
               <img src={image} alt="Preview" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginTop: '15px', border: '3px solid #ddd' }} />
             ) : (
               <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e2e8f0', margin: '15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                 <i className="fas fa-user" style={{ fontSize: '40px' }}></i>
               </div>
             )}
          </div>

          {/* Right: Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            
            <div>
              <label style={styles.label}>Student Name *</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} placeholder="e.g. Rahul Sharma" />
            </div>

            <div>
              <label style={styles.label}>Course / Batch *</label>
              <input type="text" value={course} onChange={e => setCourse(e.target.value)} style={styles.input} placeholder="e.g. B.Tech CSE (2024)" />
            </div>

            <div style={{ gridColumn: '1 / -1' }}>
              <label style={styles.label}>Testimonial Quote *</label>
              <textarea value={quote} onChange={e => setQuote(e.target.value)} style={{...styles.input, height:'80px'}} placeholder="What did they say about JEC?" />
            </div>

            <div>
              <label style={styles.label}>Placement (Optional)</label>
              <input type="text" value={placement} onChange={e => setPlacement(e.target.value)} style={styles.input} placeholder="e.g. Placed at Google" />
            </div>

            <div>
              <label style={styles.label}>Salary Package (Optional)</label>
              <input type="text" value={salary} onChange={e => setSalary(e.target.value)} style={styles.input} placeholder="e.g. 12 LPA" />
            </div>

            <div>
              <label style={styles.label}>Display Order</label>
              <input type="number" value={order} onChange={e => setOrder(e.target.value)} style={styles.input} />
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop:'10px' }}>
              <button type="submit" style={styles.saveBtn}>
                {isEditing ? "Update Testimonial" : "Add Testimonial"}
              </button>
            </div>

          </div>
        </form>
      </div>

      {/* --- LIST & SEARCH --- */}
      <div style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
           <h3>Student Stories ({filteredList.length})</h3>
           <input 
             type="text" 
             placeholder="Search by name, company..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             style={{ padding: '10px', width: '300px', borderRadius: '20px', border: '1px solid #ccc' }}
           />
        </div>

        {loading ? <p>Loading...</p> : (
          <div style={styles.grid}>
            {filteredList.map(item => (
              <div key={item.id} style={styles.itemCard}>
                <div style={{ display:'flex', alignItems:'center', gap:'15px', padding:'15px' }}>
                  <img 
                    src={item.imageUrl || "https://via.placeholder.com/100"} 
                    alt={item.name} 
                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #eee' }} 
                  />
                  <div>
                    <h4 style={{ margin: '0 0 3px 0', color: '#0072C6' }}>{item.name}</h4>
                    <span style={{ fontSize: '12px', color: '#666', background:'#f0f0f0', padding:'2px 6px', borderRadius:'4px' }}>{item.course}</span>
                  </div>
                </div>
                
                <div style={{ padding: '0 15px 15px', fontSize:'13px', color:'#555', flex: 1 }}>
                  <p style={{ fontStyle: 'italic', margin: '0 0 10px' }}>"{item.quote.substring(0, 80)}..."</p>
                  {item.placement && <div style={{ color: '#10B981', fontWeight:'600' }}>{item.placement}</div>}
                </div>

                <div style={{ display: 'flex', borderTop:'1px solid #eee' }}>
                  <button onClick={() => handleEdit(item)} style={styles.editBtn}>Edit</button>
                  <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  label: { display: 'block', fontWeight: '600', margin: '0 0 5px', fontSize: '13px', color: '#444' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' },
  saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' },
  itemCard: { background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', border: '1px solid #eee', display:'flex', flexDirection:'column' },
  editBtn: { flex: 1, padding: '10px', background: 'transparent', color: '#0072C6', border: 'none', cursor: 'pointer', fontWeight: '600', borderRight:'1px solid #eee' },
  deleteBtn: { flex: 1, padding: '10px', background: 'transparent', color: '#DC2626', border: 'none', cursor: 'pointer', fontWeight: '600' }
};

export default EditTestimonials;