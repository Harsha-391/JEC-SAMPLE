import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';

const EditTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [quote, setQuote] = useState('');
  const [placement, setPlacement] = useState('');
  const [salary, setSalary] = useState('');
  const [image, setImage] = useState('');
  const [imageAlt, setImageAlt] = useState(''); // 1. Add Alt Text
  const [order, setOrder] = useState(1);

  // Fetch logic omitted (same as original)
  const fetchTestimonials = async () => { /* ... */ 
      const querySnapshot = await getDocs(collection(db, "student_testimonials"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(list);
      setLoading(false);
  };
  
  useEffect(() => { fetchTestimonials(); }, []);

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
      imageUrl: image,
      imageAlt, // 2. Save Alt Text
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

  const handleDelete = async (id) => { /* ... */ };

  const handleEdit = (item) => {
    setName(item.name);
    setCourse(item.course);
    setQuote(item.quote);
    setPlacement(item.placement || '');
    setSalary(item.salary || '');
    setImage(item.imageUrl || '');
    setImageAlt(item.imageAlt || ''); // Load Alt Text
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
    setImageAlt('');
    setOrder(1);
    setIsEditing(false);
    setEditId(null);
  };

  // Filter logic omitted...
  const filteredList = testimonials; 

  return (
    <div style={{ padding: '20px', maxWidth: '1100px', margin: '0 auto' }}>
      <ToastContainer />
      {/* Header logic ... */}
      
      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
             <ImageUpload label="Student Photo" onUploadComplete={setImage} />
             {image ? (
               <img src={image} alt="Preview" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', marginTop: '15px', border: '3px solid #ddd' }} />
             ) : (
               <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: '#e2e8f0', margin: '15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                 <i className="fas fa-user" style={{ fontSize: '40px' }}></i>
               </div>
             )}
             <div style={{ marginTop:'10px', textAlign:'left' }}>
                <label style={styles.label}>Image Alt Text</label>
                <input 
                    type="text" 
                    value={imageAlt} 
                    onChange={e => setImageAlt(e.target.value)} 
                    style={styles.input} 
                    placeholder="e.g. Photo of Rahul Sharma"
                />
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
             {/* Text fields for Name, Course, Quote... same as original */}
             <div>
              <label style={styles.label}>Student Name *</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Course / Batch *</label>
              <input type="text" value={course} onChange={e => setCourse(e.target.value)} style={styles.input} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={styles.label}>Testimonial Quote *</label>
              <textarea value={quote} onChange={e => setQuote(e.target.value)} style={{...styles.input, height:'80px'}} />
            </div>
             {/* ... */}
            <div style={{ gridColumn: '1 / -1', marginTop:'10px' }}>
              <button type="submit" style={styles.saveBtn}>
                {isEditing ? "Update Testimonial" : "Add Testimonial"}
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* List section ... */}
    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  label: { display: 'block', fontWeight: '600', margin: '0 0 5px', fontSize: '13px', color: '#444' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' },
  saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  // ...
};

export default EditTestimonials;