import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../firebase';

// Helper Component for a single card
const FacultyCard = ({ member }) => (
  <div className="faculty-card">
    <div className="card-header">
      <img 
        src={member.image || "https://www.w3schools.com/howto/img_avatar.png"} 
        alt={member.name} 
        className="avatar" 
      />
      <div className="faculty-name">{member.name}</div>
      <div className="faculty-role">{member.role}</div>
    </div>
    <div className="card-body">
      <div className="info-row">
        <i className="fas fa-graduation-cap"></i> <span>Qualification: {member.qualification}</span>
      </div>
      <div className="info-row">
        <i className="fas fa-briefcase"></i> <span>Experience: {member.experience}</span>
      </div>
      <div className="research-area">
        <i className="fas fa-microscope"></i> {member.researchArea}
      </div>
    </div>
    <div className="card-footer">
      <a href={`mailto:${member.email}`} className="email-btn">
        <i className="fas fa-envelope"></i> Email Me
      </a>
    </div>
  </div>
);

function HumanNetwork() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);

  // Definition of departments to map specific codes to Display Titles
  const departments = [
    { id: 'cse', title: 'Computer Science Engineering' },
    { id: 'ee', title: 'Electrical Engineering' },
    { id: 'ece', title: 'Electronics & Comm. Engg.' },
    { id: 'it', title: 'Information Technology' },
    { id: 'me', title: 'Mechanical Engineering' },
    { id: 'ash', title: 'Applied Sciences & Humanities' },
    { id: 'civil', title: 'Civil Engineering' }
  ];

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const facultyRef = collection(db, "faculty_members");
        // Ordering by 'order' field. Remove orderBy if you don't add that field.
        const q = query(facultyRef, orderBy("order")); 
        const querySnapshot = await getDocs(q);
        
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setFaculty(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching faculty:", error);
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  const filterFaculty = (dept) => {
    setActiveFilter(dept);
  };

  if (loading) {
    return (
      <div className="human-network-page">
        <section className="faculty-hero">
          <div className="max-width-container">
            <h1>Loading Network...</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="human-network-page">
      
      <section className="faculty-hero">
        <div className="max-width-container">
          <h1>Human Network @ JEC</h1>
          <p>Meet the dedicated minds shaping the future of engineering.</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="filter-container">
        <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => filterFaculty('all')}>All Departments</button>
        <button className={`filter-btn ${activeFilter === 'cse' ? 'active' : ''}`} onClick={() => filterFaculty('cse')}>Computer Science</button>
        <button className={`filter-btn ${activeFilter === 'ee' ? 'active' : ''}`} onClick={() => filterFaculty('ee')}>Electrical Engg.</button>
        <button className={`filter-btn ${activeFilter === 'ece' ? 'active' : ''}`} onClick={() => filterFaculty('ece')}>Electronics & Comm.</button>
        <button className={`filter-btn ${activeFilter === 'it' ? 'active' : ''}`} onClick={() => filterFaculty('it')}>Information Tech</button>
        <button className={`filter-btn ${activeFilter === 'me' ? 'active' : ''}`} onClick={() => filterFaculty('me')}>Mechanical Engg.</button>
        <button className={`filter-btn ${activeFilter === 'ash' ? 'active' : ''}`} onClick={() => filterFaculty('ash')}>Applied Sciences</button>
        <button className={`filter-btn ${activeFilter === 'civil' ? 'active' : ''}`} onClick={() => filterFaculty('civil')}>Civil Engg.</button>
      </div>

      <div className="max-width-container faculty-section">
        
        {/* Loop through defined departments and render if they match filter */}
        {departments.map((dept) => {
            // Logic: Show this section if filter is 'all' OR filter matches this dept ID
            if (activeFilter !== 'all' && activeFilter !== dept.id) return null;

            // Filter the actual data for this department
            const deptMembers = faculty.filter(m => m.department === dept.id);

            // If no members found for this department, don't render the header
            if (deptMembers.length === 0) return null;

            return (
                <div key={dept.id}>
                    <h2 className="dept-title show">{dept.title}</h2>
                    <div className="faculty-grid show">
                        {deptMembers.map(member => (
                            <FacultyCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            );
        })}

        {/* Fallback if no data found */}
        {faculty.length === 0 && (
            <p style={{textAlign: 'center'}}>No faculty members found. Please check your database connection.</p>
        )}

      </div>
    </div>
  );
}

export default HumanNetwork;