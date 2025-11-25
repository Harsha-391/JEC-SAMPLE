import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../firebase';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonialsRef = collection(db, "student_testimonials");
        // Sort by 'order' field. If you haven't added 'order' to docs, remove ", orderBy('order')"
        const q = query(testimonialsRef, orderBy("order")); 
        const querySnapshot = await getDocs(q);
        
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setTestimonials(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="testimonials-page">
        <section className="testimonial-hero">
          <div className="max-width-container">
            <h1>Loading Stories...</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    // This wrapper class will scope all the new CSS
    <div className="testimonials-page">

      <section className="testimonial-hero">
        <div className="max-width-container">
          <h1>Student Testimonials</h1>
          <p>Hear from our students and alumni about their journey at JEC.</p>
        </div>
      </section>

      <section className="testimonial-grid-section">
        <div className="max-width-container">
          <div className="t-grid">

            {testimonials.map((item) => (
              <div className="t-card" key={item.id}>
                <i className="fas fa-quote-left quote-icon"></i>
                <p className="quote-text">"{item.quote}"</p>
                <div className="student-info">
                  {/* Logic to show image if available, else a generic icon */}
                  <div className="student-avatar">
                    {item.imageUrl ? (
                       <img src={item.imageUrl} alt={item.name} style={{width:'100%', height:'100%', borderRadius:'50%', objectFit:'cover'}} />
                    ) : (
                       <i className="fas fa-user"></i>
                    )}
                  </div>
                  
                  <div className="student-details">
                    <h4>{item.name}</h4>
                    <p className="course">{item.course}</p>
                    
                    {item.placement && (
                       <div className="placement-badge">{item.placement}</div>
                    )}
                    
                    {/* Only render Salary badge if the field exists in Firebase */}
                    {item.salary && (
                       <span className="salary-badge" style={{marginLeft: '5px'}}>{item.salary}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Fallback if no data is found in Firebase */}
            {!loading && testimonials.length === 0 && (
              <p style={{textAlign: 'center', width: '100%', gridColumn: '1/-1'}}>
                No testimonials found. Please add data to the 'student_testimonials' collection in Firebase.
              </p>
            )}

          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;