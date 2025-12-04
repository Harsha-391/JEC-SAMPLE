import React, { useState, useEffect, useCallback } from 'react';
import './Gallery.css';

// --- DATA CONFIGURATION (Copied exactly from source) ---
const galleryData = [
    {
        id: 1, title: "Freshers Party", count: 12,
        cover: "https://cdn.pixabay.com/photo/2023/08/18/07/04/business-8197902_1280.jpg?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200", "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1200", "https://images.unsplash.com/photo-1530103862676-de3c9a59af57?q=80&w=1200"]
    },
    {
        id: 2, title: "College Mess", count: 8,
        cover: "https://jeckukas.org.in/managepro/uploads/Photos/2019-12-23_16:19:44IMG_7919.jpeg?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1554998171-7e5ecb5667be?q=80&w=1200", "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1200"]
    },
    {
        id: 3, title: "Blood Donation Camp", count: 15,
        cover: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1200", "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200"]
    },
    {
        id: 4, title: "JEC in News", count: 6,
        cover: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200"]
    },
    {
        id: 5, title: "Independence Day", count: 20,
        cover: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1200", "https://images.unsplash.com/photo-1599421490111-ad70b2d6568e?q=80&w=1200"]
    },
    {
        id: 6, title: "Jaipur Culture", count: 10,
        cover: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200"]
    },
    {
        id: 7, title: "Events at JEC", count: 25,
        cover: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1475721027767-p42856986883?q=80&w=1200"]
    },
    {
        id: 8, title: "Transport", count: 5,
        cover: "https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1200"]
    },
    {
        id: 9, title: "Auditorium", count: 4,
        cover: "https://cdn.pixabay.com/photo/2023/08/18/07/04/business-8197902_1280.jpg?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1584226761961-9827596a2170?q=80&w=1200"]
    },
    {
        id: 10, title: "Fungama 2019", count: 30,
        cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?q=80&w=1200"]
    },
    {
        id: 11, title: "Sports", count: 18,
        cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1200"]
    },
    {
        id: 12, title: "Board Room", count: 5,
        cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200"]
    },
    {
        id: 13, title: "Building", count: 8,
        cover: "https://cdn.pixabay.com/photo/2023/08/18/07/04/business-8197902_1280.jpg?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200"]
    },
    {
        id: 14, title: "Hostel", count: 10,
        cover: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200"]
    },
    {
        id: 15, title: "Canteen", count: 6,
        cover: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200"]
    },
    {
        id: 16, title: "Labs", count: 12,
        cover: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200"]
    },
    {
        id: 17, title: "Library", count: 9,
        cover: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200"]
    },
    {
        id: 18, title: "Net Labs", count: 7,
        cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200"]
    },
    {
        id: 19, title: "Student Life", count: 20,
        cover: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200"]
    },
    {
        id: 20, title: "Induction Programme", count: 14,
        cover: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200"]
    },
    {
        id: 21, title: "Cultural Events", count: 22,
        cover: "https://cdn.pixabay.com/photo/2023/08/18/07/04/business-8197902_1280.jpg?q=80&w=500&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?q=80&w=1200"]
    }
];

function Gallery() {
    // State for Modal (Album View)
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);

    // State for Image Viewer (Lightbox)
    const [viewerIndex, setViewerIndex] = useState(null);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    // --- OPEN CATEGORY GRID (Modal) ---
    const openModal = (album) => {
        // Replicating the "simulation" logic from the HTML file
        const simulatedImages = [];
        for (let i = 0; i < album.count; i++) {
            simulatedImages.push(album.images[i % album.images.length]);
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
            {/* HERO SECTION */}
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