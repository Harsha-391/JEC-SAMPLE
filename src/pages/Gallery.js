import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';
// --- FIREBASE IMPORTS ---
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

function Gallery() {
    // 1. STATE: We replaced the hardcoded 'const galleryData' with this state
    const [galleryData, setGalleryData] = useState([]);

    // State for Modal (Album View)
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);

    // State for Image Viewer (Lightbox)
    const [viewerIndex, setViewerIndex] = useState(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // 2. FETCH DATA: Load from Firebase when component mounts
    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "albums"));
                const albums = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                console.log("Fetched Albums:", albums); // Debugging
                setGalleryData(albums);
            } catch (error) {
                console.error("Error fetching gallery:", error);
            }
        };

        fetchGallery();
    }, []);

    // --- OPEN CATEGORY GRID (Modal) ---
    // (KEPT LOGIC EXACTLY AS IT WAS)
    const openModal = (album) => {
        // Replicating the "simulation" logic from the HTML file
        const simulatedImages = [];
        
        // Safety check: ensure images array exists, otherwise use empty array
        const sourceImages = album.images || []; 
        
        if (sourceImages.length > 0) {
            for (let i = 0; i < album.count; i++) {
                simulatedImages.push(sourceImages[i % sourceImages.length]);
            }
        }
        
        setAlbumImages(simulatedImages);
        setSelectedAlbum(album);
        document.body.style.overflow = 'hidden'; // Disable scroll
    };

    const closeModal = () => {
        setSelectedAlbum(null);
        setAlbumImages([]);
        document.body.style.overflow = 'auto'; // Enable scroll
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
        // Infinite Loop Logic
        if (newIndex >= albumImages.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = albumImages.length - 1;
        }
        setViewerIndex(newIndex);
    }, [isViewerOpen, viewerIndex, albumImages.length]);

    // --- EVENT LISTENERS (Keyboard & Swipe) ---
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

    const onTouchStart = (e) => {
        setTouchEnd(null); // Reset
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) changeImage(1); // Next
        if (isRightSwipe) changeImage(-1); // Prev
    };

    return (
        <div className="gallery-page">
            {/* HERO SECTION - (KEPT EXACTLY THE SAME FOR STYLES) */}
            <header className="modern-hero">
                <div className="hero-content">
                    <div className="hero-badge"><i className="fas fa-camera"></i> JEC MEMORIES</div>
                    <h1>Capturing<br /><span>Excellence</span> & Life</h1>
                    <p>Explore our visual journey. From vibrant cultural fests to state-of-the-art labs, experience the JEC spirit through our lens.</p>
                    <div className="scroll-indicator">
                        <i className="fas fa-arrow-down"></i> Scroll to Albums
                    </div>
                </div>

                <div className="hero-collage">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600" className="collage-img img-main" alt="Campus Life" />
                    <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400" className="collage-img img-sub-1" alt="Labs" />
                    <img src="https://cdn.pixabay.com/photo/2023/08/18/07/04/business-8197902_1280.jpg?q=80&w=400" className="collage-img img-sub-2" alt="Culture" />
                </div>
            </header>

            {/* GALLERY CONTAINER */}
            <div className="container">
                <div className="section-header">
                    <div>
                        <h2>Event <span>Albums</span></h2>
                        <p>Select a category to view the full gallery.</p>
                    </div>
                </div>

                <div className="album-grid">
                    {/* 3. MAPPING: Iterate over our state data instead of hardcoded data */}
                    {galleryData.map((item) => (
                        <div className="album-card" key={item.id} onClick={() => openModal(item)}>
                            <div className="album-cover">
                                <img src={item.cover} alt={item.title} />
                                <div className="album-overlay">
                                    <div className="view-btn">View Album</div>
                                </div>
                            </div>
                            <div className="album-info">
                                <div className="album-meta">
                                    <span className="album-count">{item.count} Photos</span>
                                </div>
                                <div className="album-title">{item.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL (Album Grid View) */}
            {selectedAlbum && (
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="modal-title">{selectedAlbum.title}</h2>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                    </div>
                    <div className="modal-grid">
                        {albumImages.map((imgSrc, index) => (
                            <div className="modal-img-wrapper" key={index} onClick={() => openImageViewer(index)}>
                                <img src={imgSrc} alt="Gallery Image" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* IMAGE VIEWER (Lightbox) */}
            {isViewerOpen && (
                <div 
                    className="image-viewer"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <span className="viewer-close" onClick={closeImageViewer}>&times;</span>

                    <div className="viewer-nav viewer-prev" onClick={() => changeImage(-1)}>&#10094;</div>

                    <img className="viewer-img" src={albumImages[viewerIndex]} alt="Full View" />

                    <div className="viewer-nav viewer-next" onClick={() => changeImage(1)}>&#10095;</div>

                    <div className="image-counter">{viewerIndex + 1} / {albumImages.length}</div>
                    <div className="viewer-caption">Use Arrow Keys or Swipe to Navigate</div>
                </div>
            )}
        </div>
    );
}

export default Gallery;