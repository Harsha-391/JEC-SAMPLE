import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';
import { db } from '../firebase'; 
import { collection, getDocs } from 'firebase/firestore';

function Gallery() {
    const [galleryData, setGalleryData] = useState([]);
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [albumImages, setAlbumImages] = useState([]); // Array of objects {url, alt}
    const [viewerIndex, setViewerIndex] = useState(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "albums"));
                const albums = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setGalleryData(albums);
            } catch (error) {
                console.error("Error fetching gallery:", error);
            }
        };
        fetchGallery();
    }, []);

    const openModal = (album) => {
        const sourceImages = album.images || []; 
        
        // Normalize images to objects {url, alt} to support legacy string data
        const normalizedImages = sourceImages.map(img => {
            if (typeof img === 'string') {
                return { url: img, alt: album.title + " Photo" };
            }
            return img; // Already an object {url, alt}
        });

        // Loop logic for "Simulated" feel if few images (from original code)
        // Or just map them directly. Let's map directly for cleaner data.
        setAlbumImages(normalizedImages);
        setSelectedAlbum(album);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedAlbum(null);
        setAlbumImages([]);
        document.body.style.overflow = 'auto';
    };

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
        if (newIndex >= albumImages.length) newIndex = 0;
        else if (newIndex < 0) newIndex = albumImages.length - 1;
        setViewerIndex(newIndex);
    }, [isViewerOpen, viewerIndex, albumImages.length]);

    // Keyboard & Touch logic omitted for brevity (same as original)
    // ...

    return (
        <div className="gallery-page">
            <header className="modern-hero">
                {/* ... Hero Content ... */}
            </header>

            <div className="container">
                <div className="section-header">
                    <div><h2>Event <span>Albums</span></h2></div>
                </div>

                <div className="album-grid">
                    {galleryData.map((item) => (
                        <div className="album-card" key={item.id} onClick={() => openModal(item)}>
                            <div className="album-cover">
                                {/* Use coverAlt */}
                                <img src={item.cover} alt={item.coverAlt || item.title} />
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

            {selectedAlbum && (
                <div className="modal">
                    <div className="modal-header">
                        <h2 className="modal-title">{selectedAlbum.title}</h2>
                        <span className="close-btn" onClick={closeModal}>&times;</span>
                    </div>
                    <div className="modal-grid">
                        {albumImages.map((imgObj, index) => (
                            <div className="modal-img-wrapper" key={index} onClick={() => openImageViewer(index)}>
                                <img src={imgObj.url} alt={imgObj.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isViewerOpen && (
                <div className="image-viewer">
                    <span className="viewer-close" onClick={closeImageViewer}>&times;</span>
                    <div className="viewer-nav viewer-prev" onClick={() => changeImage(-1)}>&#10094;</div>
                    
                    <img className="viewer-img" src={albumImages[viewerIndex].url} alt={albumImages[viewerIndex].alt} />
                    
                    <div className="viewer-nav viewer-next" onClick={() => changeImage(1)}>&#10095;</div>
                    <div className="image-counter">{viewerIndex + 1} / {albumImages.length}</div>
                    <div className="viewer-caption">{albumImages[viewerIndex].alt}</div>
                </div>
            )}
        </div>
    );
}

export default Gallery;