import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    query,
    orderBy
} from "firebase/firestore";
import ImageUpload from '../components/ImageUpload';
import { ToastContainer, toast } from 'react-toastify';
// FIXED CSS IMPORT BELOW
import 'react-toastify/dist/ReactToastify.css';

const ManageCampusLife = () => {
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // Form State
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [overlayText, setOverlayText] = useState('');
    const [alt, setAlt] = useState('');
    const [order, setOrder] = useState(0);
    const [isLarge, setIsLarge] = useState(false);
    const [showPlayButton, setShowPlayButton] = useState(false);

    const galleryRef = collection(db, "campus_gallery");

    useEffect(() => {
        fetchGallery();
    }, []);

    const fetchGallery = async () => {
        try {
            const q = query(galleryRef, orderBy("order", "asc"));
            const querySnapshot = await getDocs(q);
            setGalleryItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        } catch (error) {
            toast.error("Error fetching gallery");
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!imageUrl) return toast.error("Please upload an image first");

        try {
            await addDoc(galleryRef, {
                imageUrl,
                category,
                overlayText,
                alt,
                order: parseInt(order),
                isLarge,
                showPlayButton,
                createdAt: new Date()
            });
            toast.success("Image added to Campus Life!");
            resetForm();
            fetchGallery();
        } catch (error) {
            toast.error("Failed to add image");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Remove this image from the gallery?")) {
            try {
                await deleteDoc(doc(db, "campus_gallery", id));
                toast.success("Removed successfully");
                fetchGallery();
            } catch (error) {
                toast.error("Delete failed");
            }
        }
    };

    const resetForm = () => {
        setImageUrl('');
        setCategory('');
        setOverlayText('');
        setAlt('');
        setOrder(galleryItems.length + 1);
        setIsLarge(false);
        setShowPlayButton(false);
    };

    if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>Loading Gallery Manager...</div>;

    return (
        <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            <ToastContainer />
            <h2 style={{ color: '#0072C6', marginBottom: '30px', fontWeight: '700' }}>Manage Campus Life Gallery</h2>

            {/* --- ADD NEW IMAGE FORM --- */}
            <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', marginBottom: '50px', border: '1px solid #e2e8f0' }}>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                    <div style={{ gridColumn: 'span 2', background: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px dashed #cbd5e1' }}>
                        <ImageUpload label="Select Gallery Image" onUploadComplete={setImageUrl} />
                        {imageUrl && (
                            <div style={{ marginTop: '15px' }}>
                                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px' }}>Image Preview:</p>
                                <img src={imageUrl} alt="Preview" style={{ width: '100%', maxHeight: '250px', objectFit: 'contain', borderRadius: '8px', background: '#fff' }} />
                            </div>
                        )}
                    </div>

                    <div>
                        <label style={styles.label}>Category (e.g., Hostel, Lab, Fest)</label>
                        <input type="text" value={category} onChange={e => setCategory(e.target.value)} style={styles.input} placeholder="e.g. Infrastructure" />
                    </div>

                    <div>
                        <label style={styles.label}>Overlay Title (Visible on Hover)</label>
                        <input type="text" value={overlayText} onChange={e => setOverlayText(e.target.value)} style={styles.input} placeholder="e.g. Modern Computer Lab" />
                    </div>

                    <div>
                        <label style={styles.label}>Display Order (Lower numbers appear first)</label>
                        <input type="number" value={order} onChange={e => setOrder(e.target.value)} style={styles.input} />
                    </div>

                    <div>
                        <label style={styles.label}>Alt Text (SEO)</label>
                        <input type="text" value={alt} onChange={e => setAlt(e.target.value)} style={styles.input} placeholder="Description for Google" />
                    </div>

                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center', gridColumn: 'span 2', background: '#f1f5f9', padding: '15px', borderRadius: '8px' }}>
                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#334155' }}>
                            <input type="checkbox" checked={isLarge} onChange={e => setIsLarge(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                            <span>Bento Box: Make this a Wide Image</span>
                        </label>

                        <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600', color: '#334155' }}>
                            <input type="checkbox" checked={showPlayButton} onChange={e => setShowPlayButton(e.target.checked)} style={{ width: '18px', height: '18px' }} />
                            <span>Show Play Icon (For Videos)</span>
                        </label>
                    </div>

                    <button type="submit" style={styles.submitBtn}>Add Image to Homepage Gallery</button>
                </form>
            </div>

            {/* --- GALLERY LIST --- */}
            <h3 style={{ marginBottom: '25px', color: '#1e293b', borderLeft: '5px solid #0072C6', paddingLeft: '15px' }}>Current Live Gallery</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
                {galleryItems.map(item => (
                    <div key={item.id} style={styles.gridCard}>
                        <div style={{ position: 'relative' }}>
                            <img src={item.imageUrl} alt={item.alt} style={styles.cardImg} />
                            {item.isLarge && <span style={styles.badge}>Wide</span>}
                        </div>
                        <div style={{ padding: '15px' }}>
                            <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#0072C6', fontWeight: '800', letterSpacing: '0.5px' }}>{item.category || 'General'}</span>
                            <h4 style={{ margin: '5px 0', fontSize: '16px', color: '#1e293b' }}>{item.overlayText || 'JEC Campus'}</h4>
                            <p style={{ fontSize: '12px', color: '#64748b' }}>Order: {item.order} | Video: {item.showPlayButton ? 'Yes' : 'No'}</p>
                            <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn}>Delete Entry</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    label: { display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px', color: '#475569' },
    input: { width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '14px', outline: 'none' },
    submitBtn: { gridColumn: 'span 2', padding: '16px', background: '#0072C6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '700', fontSize: '16px', transition: 'background 0.3s' },
    gridCard: { background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', transition: 'transform 0.2s' },
    cardImg: { width: '100%', height: '180px', objectFit: 'cover' },
    badge: { position: 'absolute', top: '10px', right: '10px', background: '#FCA311', color: '#000', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' },
    deleteBtn: { marginTop: '15px', width: '100%', padding: '10px', background: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '700', fontSize: '12px' }
};

export default ManageCampusLife;