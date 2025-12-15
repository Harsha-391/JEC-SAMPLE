import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';

const departments = [
  { id: 'cse', title: 'Computer Science Engineering' },
  { id: 'ai', title: 'Artificial Intelligence' },
  { id: 'ee', title: 'Electrical Engineering' },
  { id: 'ece', title: 'Electronics & Comm. Engg.' },
  { id: 'it', title: 'Information Technology' },
  { id: 'me', title: 'Mechanical Engineering' },
  { id: 'civil', title: 'Civil Engineering' },
  { id: 'ash', title: 'Applied Sciences & Humanities' }
];

const EditFaculty = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Editing State
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [researchArea, setResearchArea] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('cse');
  const [image, setImage] = useState('');
  const [imageAlt, setImageAlt] = useState(''); // 1. Add Alt Text
  const [order, setOrder] = useState(1);

  // 1. Fetch Faculty Members
  const fetchMembers = async () => {
    try {
      const q = query(collection(db, "faculty_members"), orderBy("order")); 
      const querySnapshot = await getDocs(q);
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(list);
      setLoading(false);
    } catch (error) {
      console.warn("Index might be missing, fetching without sort:", error);
      const querySnapshot = await getDocs(collection(db, "faculty_members"));
      const list = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMembers(list);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // 2. Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !role || !department) {
      toast.warn("Name, Designation, and Department are required!");
      return;
    }

    const facultyData = {
      name,
      role,
      qualification,
      experience,
      researchArea,
      email,
      department,
      image,
      imageAlt, // 2. Save Alt Text
      order: Number(order)
    };

    try {
      if (isEditing) {
        await updateDoc(doc(db, "faculty_members", editId), facultyData);
        toast.success("Faculty member updated!");
      } else {
        await addDoc(collection(db, "faculty_members"), facultyData);
        toast.success("Faculty member added!");
      }
      resetForm();
      fetchMembers();
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Error saving data.");
    }
  };

  // 3. Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to remove this member?")) {
      await deleteDoc(doc(db, "faculty_members", id));
      toast.success("Member removed.");
      fetchMembers();
    }
  };

  // 4. Handle Edit
  const handleEdit = (member) => {
    setName(member.name);
    setRole(member.role);
    setQualification(member.qualification);
    setExperience(member.experience);
    setResearchArea(member.researchArea);
    setEmail(member.email);
    setDepartment(member.department);
    setImage(member.image);
    setImageAlt(member.imageAlt || ''); // Load Alt Text
    setOrder(member.order || 1);
    
    setEditId(member.id);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const resetForm = () => {
    setName('');
    setRole('');
    setQualification('');
    setExperience('');
    setResearchArea('');
    setEmail('');
    setDepartment('cse');
    setImage('');
    setImageAlt('');
    setOrder(1);
    setIsEditing(false);
    setEditId(null);
  };

  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <ToastContainer />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>{isEditing ? "Edit Faculty Member" : "Add New Faculty"}</h2>
        {isEditing && <button onClick={resetForm} style={styles.cancelBtn}>Cancel Edit</button>}
      </div>

      <div style={styles.card}>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
          
          <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
             <ImageUpload label="Profile Photo" onUploadComplete={setImage} />
             {image ? (
               <img src={image} alt="Preview" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginTop: '15px', border: '3px solid #ddd' }} />
             ) : (
               <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: '#e2e8f0', margin: '15px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                 No Image
               </div>
             )}
             <div style={{ marginTop: '15px', textAlign:'left' }}>
               <label style={styles.label}>Photo Alt Text</label>
               <input 
                type="text" 
                value={imageAlt} 
                onChange={e => setImageAlt(e.target.value)} 
                style={styles.input} 
                placeholder="e.g. Portrait of Dr. John Doe"
               />
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            {/* ... Other inputs (Name, Role, etc.) remain the same ... */}
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={styles.label}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input} placeholder="Dr. John Doe" />
            </div>
            <div>
              <label style={styles.label}>Designation (Role)</label>
              <input type="text" value={role} onChange={e => setRole(e.target.value)} style={styles.input} placeholder="Assistant Professor" />
            </div>
            <div>
              <label style={styles.label}>Department</label>
              <select value={department} onChange={e => setDepartment(e.target.value)} style={styles.input}>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.title}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={styles.label}>Qualification</label>
              <input type="text" value={qualification} onChange={e => setQualification(e.target.value)} style={styles.input} placeholder="Ph.D" />
            </div>
            <div>
              <label style={styles.label}>Experience</label>
              <input type="text" value={experience} onChange={e => setExperience(e.target.value)} style={styles.input} placeholder="12 Years" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={styles.label}>Research Area</label>
              <input type="text" value={researchArea} onChange={e => setResearchArea(e.target.value)} style={styles.input} placeholder="AI, IoT" />
            </div>
            <div>
              <label style={styles.label}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />
            </div>
            <div>
              <label style={styles.label}>Order</label>
              <input type="number" value={order} onChange={e => setOrder(e.target.value)} style={styles.input} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <button type="submit" style={styles.saveBtn}>
                {isEditing ? "Update Faculty Member" : "Add Faculty Member"}
              </button>
            </div>
          </div>
        </form>
      </div>
      
      {/* List section omitted for brevity, logic is same as before */}
      <div style={{ marginTop: '50px' }}>
        <h3>Faculty List</h3>
        {/* ... */}
      </div>
    </div>
  );
};

const styles = {
  card: { background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' },
  label: { display: 'block', fontWeight: '600', margin: '0 0 5px', fontSize: '13px', color: '#444' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px' },
  saveBtn: { width: '100%', padding: '12px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' },
  cancelBtn: { padding: '8px 15px', background: '#64748B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
};

export default EditFaculty;