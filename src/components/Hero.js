// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from '../firebase';

function Hero() {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Fetch Banners from Firebase
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const bannersRef = collection(db, "home_banners");
        // We try to order them by 'order' field if you added it, otherwise it just fetches
        const q = query(bannersRef, orderBy("order")); 
        const querySnapshot = await getDocs(q);
        
        const bannerList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        if (bannerList.length > 0) {
          setBanners(bannerList);
        } else {
          // Fallback if DB is empty
          setBanners([{ 
            imageUrl: '/images/hero.png', 
            heading: "Jaipur’s best engineering college for your bright future.",
            subheading: "Empowering young minds through innovation."
          }]);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
        // Fallback on error
        setBanners([{ 
            imageUrl: '/images/hero.png', 
            heading: "Jaipur’s best engineering college for your bright future.",
            subheading: "Empowering young minds through innovation."
          }]);
      }
    };

    fetchBanners();
  }, []);

  // 2. Auto-Play Logic (Timer)
  useEffect(() => {
    if (banners.length <= 1) return; // Don't slide if only 1 banner

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [banners.length]);

  // 3. Manual Navigation Helper Functions
  const nextSlide = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // 4. Render
  return (
    <section className="hero-slider">
      {banners.map((banner, index) => (
        <div 
          key={banner.id || index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${banner.imageUrl})` }}
        >
          {/* Overlay to make text readable */}
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1>{banner.heading}</h1>
            <div className="hero-underline"></div>
            {banner.subheading && <p>{banner.subheading}</p>}
            <button className="apply-btn">Apply for Admission</button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Only show if more than 1 slide) */}
      {banners.length > 1 && (
        <>
          <button className="slider-arrow prev" onClick={prevSlide}>❮</button>
          <button className="slider-arrow next" onClick={nextSlide}>❯</button>

          <div className="slider-dots">
            {banners.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export default Hero;