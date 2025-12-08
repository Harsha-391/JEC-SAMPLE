// src/pages/VideoGallery.js
import React, { useState, useEffect, useMemo } from 'react';
import './VideoGallery.css'; // Import the maintained CSS

// --- 1. DATA CONFIGURATION (Strictly from Videos.html) ---
const rawVideos = [
  { title: "About JEC : Jaipur Engineering College", id: "dQw4w9WgXcQ", category: "Campus Life" },
  { title: "Jaipur Engineering College Overview", id: "dQw4w9WgXcQ", category: "Campus Life" },
  { title: "JEC Group of Colleges Official", id: "dQw4w9WgXcQ", category: "Campus Life" },
  { title: "Hostel & Canteen Tour", id: "dQw4w9WgXcQ", category: "Campus Life" },
  
  { title: "JEC Fungama 2016 Father Daughter relationship", id: "dQw4w9WgXcQ", category: "Fungama" },
  { title: "JEC Fungama 2016 Faculty Ramp Walk", id: "dQw4w9WgXcQ", category: "Fungama" },
  { title: "JEC Fungama 2015 Rini Chandra performance", id: "dQw4w9WgXcQ", category: "Fungama" },
  { title: "Fungama 2019 Highlights", id: "dQw4w9WgXcQ", category: "Fungama" },
  { title: "FUNGAMA 2018", id: "dQw4w9WgXcQ", category: "Fungama" },
  
  { title: "FUNGAMA-2015 Fashion Show", id: "dQw4w9WgXcQ", category: "Fashion Show" },
  { title: "JEC Faculty Fashion @ Fungama 2017", id: "dQw4w9WgXcQ", category: "Fashion Show" },
  { title: "JEC Fungama 2016 Dhriti Saharan", id: "dQw4w9WgXcQ", category: "Fashion Show" },
  
  { title: "AAGMAN 2013", id: "dQw4w9WgXcQ", category: "Freshers Party" },
  { title: "JEC Aagaman 2016", id: "dQw4w9WgXcQ", category: "Freshers Party" },
  { title: "AAGMAN 2014", id: "dQw4w9WgXcQ", category: "Freshers Party" },
  
  { title: "ROSTRUM 2014 JEC & JIET KUKAS", id: "dQw4w9WgXcQ", category: "Events" },
  { title: "FUNGAMA 2014 JEC & JIET", id: "dQw4w9WgXcQ", category: "Events" }
];

const VideoGallery = () => {
  // State for Modals
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  // --- 2. GROUPING LOGIC (Converted to useMemo) ---
  const albums = useMemo(() => {
    const grouped = {};
    rawVideos.forEach(vid => {
      if (!grouped[vid.category]) grouped[vid.category] = [];
      grouped[vid.category].push(vid);
    });
    return grouped;
  }, []);

  // --- Handlers ---
  
  // Level 1: Open Category
  const openCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    document.body.style.overflow = 'hidden'; // Lock scroll
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
    document.body.style.overflow = 'auto'; // Unlock scroll
  };

  // Level 2: Play Video
  const playVideo = (id) => {
    setPlayingVideoId(id);
  };

  const closePlayer = () => {
    setPlayingVideoId(null);
  };

  // Escape Key Support (Converted to useEffect)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (playingVideoId) {
          closePlayer();
        } else if (selectedCategory) {
          closeCategoryModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playingVideoId, selectedCategory]);

  return (
    <div className="video-gallery-wrapper">
      
      {/* --- HERO SECTION --- */}
      <header className="modern-hero">
        <div className="hero-content">
          <div className="hero-badge"><i className="fas fa-film"></i> JEC VIDEO ARCHIVE</div>
          <h1>JEC in <br /><span>Motion</span> & Sound</h1>
          <p>Relive the energy of campus life, cultural fests, and academic milestones through our curated video collections.</p>
          <div className="scroll-indicator">
            <i className="fas fa-arrow-down"></i> Scroll to Video Albums
          </div>
        </div>
        
        <div className="hero-collage">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" className="collage-img img-main" alt="Main Video" />
          <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" className="collage-img img-sub-1" alt="Event Video" />
          <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" className="collage-img img-sub-2" alt="Campus Video" />
        </div>
      </header>

      {/* --- ALBUM GRID (MAIN PAGE) --- */}
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Video <span>Albums</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '5px' }}>Select a category to view the playlist.</p>
          </div>
        </div>
        
        <div id="album-root" className="album-grid">
          {Object.entries(albums).map(([category, videos]) => {
            const coverImg = `https://img.youtube.com/vi/${videos[0].id}/hqdefault.jpg`;
            const count = videos.length;
            
            return (
              <div key={category} className="album-card" onClick={() => openCategory(category)}>
                <div className="album-cover">
                  <img src={coverImg} alt={category} />
                  <div className="folder-overlay">
                    <div className="view-btn">View Playlist</div>
                  </div>
                </div>
                <div className="album-info">
                  <span className="album-count">{count} Videos</span>
                  <div className="album-title">{category}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- CATEGORY MODAL (THE LIST) --- */}
      {selectedCategory && (
        <div id="categoryModal" className="category-modal">
          <div className="cat-header">
            <h2 id="modalTitle" className="cat-title">{selectedCategory}</h2>
            <button className="back-btn" onClick={closeCategoryModal}>
              <i className="fas fa-arrow-left"></i> Back to Albums
            </button>
          </div>
          <div id="videoListRoot" className="cat-grid">
            {albums[selectedCategory]?.map((vid, index) => {
              const thumb = `https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`;
              return (
                <div key={index} className="video-item" onClick={() => playVideo(vid.id)}>
                  <div className="vid-thumb">
                    <img src={thumb} loading="lazy" alt={vid.title} />
                    <div className="play-icon"><i className="fas fa-play-circle"></i></div>
                  </div>
                  <div className="vid-info">
                    <div className="vid-title">{vid.title}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- PLAYER OVERLAY (CINEMA MODE) --- */}
      {playingVideoId && (
        <div id="playerModal" className="player-overlay" onClick={closePlayer}>
          <span className="close-player" onClick={closePlayer}><i className="fas fa-times"></i></span>
          <div className="player-wrapper" onClick={(e) => e.stopPropagation()}>
            <iframe 
              id="youtubeFrame" 
              src={`https://www.youtube.com/embed/${playingVideoId}?autoplay=1&rel=0`} 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
              title="Video Player"
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default VideoGallery;