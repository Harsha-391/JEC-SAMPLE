// src/components/Research.js
import React, { useRef } from 'react';

// Data for research topics
const researchTopics = [
  { id: 'ai', title: 'Artificial Intelligence', desc: 'Leading AI-driven innovations for healthcare, smart cities, and beyond.', img: 'https://picsum.photos/400/200?random=1' },
  { id: 'ml', title: 'Machine Learning', desc: 'Building scalable ML models to drive sustainable solutions for emerging economies.', img: 'https://picsum.photos/400/200?random=2' },
  { id: 'robotics', title: 'Robotics', desc: 'Advancing robotics for next-generation manufacturing and automation.', img: 'https://picsum.photos/400/200?random=3' },
  { id: 'iot', title: 'Internet of Things', desc: 'Developing IoT solutions for smart infrastructure and connectivity.', img: 'https://picsum.photos/400/200?random=4' },
];

function Research() {
  // 1. Create a ref for the carousel
  const carouselRef = useRef(null);

  // 2. Define the scroll function
  const scrollCarousel = (scrollAmount) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="stories">
      <div className="stories-content">
        <h2 className="stories-title">Research & Innovation</h2>
        <p className="stories-subtitle">Discover JEC's groundbreaking research initiatives, pushing the boundaries of technology to address global challenges.</p>
        
        {/* 3. Attach the ref */}
        <div className="stories-carousel" id="research-carousel" ref={carouselRef}>
          
          {/* Map over the data twice for seamless scrolling */}
          {[...researchTopics, ...researchTopics].map((topic, index) => (
            <div className="story-card" data-story={topic.id} key={index}>
              <img src={topic.img} alt={`${topic.title} Research`} className="story-image" />
              <div className="story-content">
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
                <a href="#" className="story-arrow" aria-label={`Learn more about ${topic.title} research`}>→</a>
              </div>
            </div>
          ))}

        </div>
        <div className="carousel-wrapper">
          <div className="stories-nav">
            
            {/* 4. Use React's onClick prop */}
            <button className="nav-button prev" onClick={() => scrollCarousel(-320)} aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button className="nav-button next" onClick={() => scrollCarousel(320)} aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>

          </div>
        </div>
        <a href="#" className="view-all-btn">Explore All Research</a>
      </div>
    </section>
  );
}

export default Research;