import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'; // Import the database connection

function Hero() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        // 'homepage_settings' is the collection, 'banner' is the document ID
        const docRef = doc(db, "homepage_settings", "banner");
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setBannerData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    fetchBanner();
  }, []);

  // Use the image URL from Firebase, or fallback to your local default image
  const bgImage = bannerData?.imageUrl || '/images/hero.jpg';

  return (
    // We use inline styles here to set the background image dynamically
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content">
          {/* Dynamic Heading */}
          <h1>
            {bannerData ? bannerData.heading : "Jaipur’s best engineering college for your bright future."}
          </h1>
          
          <div className="hero-underline"></div>
          
          {/* Dynamic Subheading (Optional) */}
          <p>
            {bannerData && bannerData.subheading 
              ? bannerData.subheading 
              : ""}
          </p>
          
        
      </div> 
    </section>
  );
}

export default Hero;