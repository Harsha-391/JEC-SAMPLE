import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';
// 1. Import Firebase Database functions
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

function Gallery() {
    // 2. Change galleryData from a const variable to State
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(true);

    // State for Modal (Album View)
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);

    // State for Image Viewer (Lightbox)
    const [viewerIndex, setViewerIndex] = useState(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // 3. FETCH DATA FROM FIREBASE (The New Logic)
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "albums"));
                const albumsList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setGalleryData(albumsList);
            } catch (error) {
                console.error("Error fetching albums: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAlbums();
    }, []);

    // --- OPEN CATEGORY GRID (Modal) ---
    const openModal = (album) => {
        // If the database has an 'images' array, use it directly.
        // Fallback to simulation if the array is empty or missing.
        let imagesToShow = album.images || [];
        
        if (imagesToShow.length === 0 && album.count) {
             // Fallback logic if you haven't uploaded full arrays yet
            for (let i = 0; i < album.count; i++) {
                imagesToShow.push(album.cover); 
            }
        }

        setAlbumImages(imagesToShow);
        setSelectedAlbum(album);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setSelectedAlbum(null);
        setAlbumImages([]);
        document.body.style.overflow = 'auto'; 
    };

    // --- FULL SCREEN VIEWER & NAVIGATION ---
    const openImageViewer = (index) => {
        setViewerIndex(index);
        setIsViewerOpen(true);
    };

    const closeImageViewer = () => {
        setIsViewerOpen(false);
        setViewerIndex(null);
    };

    const changeImage = useCallback((direction) => {
        if (!isViewerOpen || viewerIndex === null) return;

        let newIndex = viewerIndex + direction;
        if (newIndex >= albumImages.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = albumImages.length - 1;
        }
        setViewerIndex(newIndex);
    }, [isViewerOpen, viewerIndex, albumImages.length]);

    // --- EVENT LISTENERS ---
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isViewerOpen) {
                if (event.key === 'ArrowLeft') changeImage(-1);
                if (event.key === 'ArrowRight') changeImage(1);
                if (event.key === 'Escape') closeImageViewer();
            } else if (selectedAlbum) {
                if (event.key === 'Escape') closeModal();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isViewerOpen, selectedAlbum, changeImage]);

    // Swipe Logic
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const onTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) changeImage(1);
        if (distance < -50) changeImage(-1);
    };

    if (loading) {
        return <div style={{padding:"50px", textAlign:"center"}}>Loading Gallery...</div>;
    }

    return (
        <div className="gallery-page">
            <header className="modern-hero">
                <div className="hero-content">
                    <div className="hero-badge"><i className="fas fa-camera"></i> JEC MEMORIES</div>
                    <h1>Capturing<br /><span>Excellence</span> & Life</h1>
                    <p>Explore our visual journey. From vibrant cultural fests to state-of-the-art labs, experience the JEC spirit through our lens.</p>
                </div>
            </header>

            <div className="container">
                <div className="section-header">
                    <h2>Event <span>Albums</span></h2>
                </div>

                <div className="album-grid">
                    {galleryData.map((item) => (
                        <div className="album-card" key={item.id} onClick={() => openModal(item)}>
                            <div className="album-cover">
                                {/* Use a placeholder if cover is missing */}
                                <img src={item.cover || "https://via.placeholder.com/400"} alt={item.title} />
                                <div className="album-overlay">
                                    <div className="view-btn">View Album</div>
                                </div>
                            </div>
                            <div className="album-info">
                                <div className="album-meta">
                                    <span className="album-count">{item.images ? item.images.length : 0} Photos</span>
                                </div>
                                <div className="album-title">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL & VIEWER (Same as before) */}
            {selectedAlbum && (
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="modal-title">{selectedAlbum.title}</h2>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                    </div>
                    <div className="modal-grid">
                        {albumImages.map((imgSrc, index) => (
                            <div className="modal-img-wrapper" key={index} onClick={() => openImageViewer(index)}>
                                <img src={imgSrc} alt="Gallery" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isViewerOpen && (
                <div className="image-viewer" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                    <span className="viewer-close" onClick={closeImageViewer}>&times;</span>
                    <div className="viewer-nav viewer-prev" onClick={() => changeImage(-1)}>&#10094;</div>
                    <img className="viewer-img" src={albumImages[viewerIndex]} alt="Full View" />
                    <div className="viewer-nav viewer-next" onClick={() => changeImage(1)}>&#10095;</div>
                </div>
            )}
        </div>
    );
}

export default Gallery;