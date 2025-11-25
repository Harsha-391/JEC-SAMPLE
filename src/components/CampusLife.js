import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../firebase';

function CampusLife() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const galleryRef = collection(db, "campus_gallery");
        const q = query(galleryRef, orderBy("order")); 
        const querySnapshot = await getDocs(q);
        
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setGalleryItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching campus gallery:", error);
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  // Filter Logic
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="campus-life">
      <div className="campus-life-content">
        <h2 className="campus-life-title">Campus Life at JEC</h2>
        <p className="campus-life-desc">
          Experience the vibrant life at JEC, from our cozy hostels and hygienic mess 
          to electrifying fests and academic infrastructure.
        </p>

        {/* Category Filter Buttons */}
        <div className="filter-container" style={{marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap'}}>
          <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All</button>
          <button className={`filter-btn ${activeCategory === 'college' ? 'active' : ''}`} onClick={() => setActiveCategory('college')}>College Campus</button>
          <button className={`filter-btn ${activeCategory === 'hostel' ? 'active' : ''}`} onClick={() => setActiveCategory('hostel')}>Hostel Life</button>
          <button className={`filter-btn ${activeCategory === 'mess' ? 'active' : ''}`} onClick={() => setActiveCategory('mess')}>Mess & Canteen</button>
          <button className={`filter-btn ${activeCategory === 'fests' ? 'active' : ''}`} onClick={() => setActiveCategory('fests')}>Fests & Events</button>
        </div>

        {loading ? (
           <p style={{textAlign:'center', color: 'white'}}>Loading Gallery...</p>
        ) : (
          <div className="campus-gallery">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`gallery-item ${item.isLarge ? 'large' : ''}`}
              >
                <img src={item.imageUrl} alt={item.alt || "Campus Life"} />
                
                {item.overlayText && (
                  <div className="gallery-overlay">
                    <h3>{item.overlayText}</h3>
                  </div>
                )}

                {item.showPlayButton && (
                  <div className="play-button">▶</div>
                )}
              </div>
            ))}

            {!loading && filteredItems.length === 0 && (
               <p style={{color:'white', width: '100%', textAlign: 'center'}}>No images found in this category.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default CampusLife;