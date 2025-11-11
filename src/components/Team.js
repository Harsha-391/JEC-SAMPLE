// src/components/Team.js
import React, { useRef } from 'react';

// We can define the team data as an array
const teamMembers = [
  { id: 1, name: 'Dr. Ram K Sharma', title: 'Vice Chancellor, JEC', img: 'https://picsum.photos/400/500?random=1' },
  { id: 2, name: 'Prof. Vijaysekhar Chellaboina', title: 'Dean, School of Computer Science', img: 'https://picsum.photos/400/500?random=2' },
  { id: 3, name: 'Prof. Bhaskar Bhatt', title: 'Dean, School of Design', img: 'https://picsum.photos/400/500?random=3' },
  // Add more members if needed
];

function Team() {
  // 1. Create a ref to attach to the carousel element
  const carouselRef = useRef(null);

  // 2. Define the scroll function
  const scrollCarousel = (scrollAmount) => {
    // 3. Access the element via .current and call its scrollBy method
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="stories">
      <div className="stories-content">
        <h2 className="stories-title">Our Team</h2>
        <p className="stories-subtitle">Meet the dedicated professionals...</p>
        
        {/* 4. Attach the ref to the carousel div */}
        <div className="stories-carousel" id="team-carousel" ref={carouselRef}>
          
          {/* We map over the data to create cards (the React way) */}
          {/* We repeat the list twice to ensure seamless scrolling */}
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div className="story-card" key={index}>
              <img src={member.img} alt={member.name} className="story-image" />
              <div className="story-content">
                <h3>{member.name}</h3>
                <p>{member.title}</p>
              </div>
            </div>
          ))}

        </div>
        <div className="carousel-wrapper">
          <div className="stories-nav">
            
            {/* 5. Use React's onClick prop */}
            <button className="nav-button prev" onClick={() => scrollCarousel(-320)} aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="nav-button next" onClick={() => scrollCarousel(320)} aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            
          </div>
        </div>
        <a href="#" className="view-all-btn">View All Members</a>
      </div>
    </section>
  );
}

export default Team;