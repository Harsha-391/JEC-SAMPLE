// src/components/VideoTestimonials.js
import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import '../styles/VideoTestimonials.css';

function VideoTestimonials() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mutedStates, setMutedStates] = useState({});
    const [isApiReady, setIsApiReady] = useState(false);
    const players = useRef({});

    // 1. Fetch videos from Firebase
    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const q = query(collection(db, "video_testimonials"), orderBy("order"));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setVideos(data);

                const initialMute = {};
                data.forEach(v => initialMute[v.id] = true);
                setMutedStates(initialMute);
            } catch (error) {
                console.error("Error loading testimonials:", error);
            }
            setLoading(false);
        };
        fetchVideos();
    }, []);

    // 2. Load and Manage YouTube API
    useEffect(() => {
        window.onYouTubeIframeAPIReady = () => {
            setIsApiReady(true);
        };

        if (window.YT && window.YT.Player) {
            setIsApiReady(true);
        } else {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }
    }, []);

    // 3. Initialize players
    useEffect(() => {
        if (isApiReady && videos.length > 0) {
            videos.forEach((video) => {
                if (players.current[video.id]) return;

                new window.YT.Player(`player-${video.id}`, {
                    videoId: video.videoId,
                    playerVars: {
                        autoplay: 1,
                        mute: 1,
                        loop: 1,
                        playlist: video.videoId,
                        controls: 0,
                        modestbranding: 1,
                        playsinline: 1, // Crucial for mobile autoplay
                        rel: 0,
                        enablejsapi: 1
                    },
                    events: {
                        onReady: (event) => {
                            event.target.mute();
                            event.target.playVideo();
                            players.current[video.id] = event.target;
                        },
                        onStateChange: (event) => {
                            if (event.data === window.YT.PlayerState.ENDED) {
                                event.target.playVideo();
                            }
                        }
                    },
                });
            });
        }
    }, [isApiReady, videos]);

    // FIXED: Toggle Mute using a more reliable touch-friendly handler
    const handleMuteToggle = (e, id) => {
        // Prevent event bubbling which often causes mobile clicks to fail
        e.preventDefault();
        e.stopPropagation();

        const player = players.current[id];
        if (player && typeof player.unMute === 'function') {
            if (mutedStates[id]) {
                player.unMute();
                player.setVolume(100); // Ensure volume is up
                setMutedStates(prev => ({ ...prev, [id]: false }));
            } else {
                player.mute();
                setMutedStates(prev => ({ ...prev, [id]: true }));
            }
        }
    };

    if (loading || videos.length === 0) return null;

    return (
        <section className="video-testimonials-section">
            <div className="vt-container">
                <div className="vt-header">
                    <h2 className="vt-title">Student Stories</h2>
                    <p className="vt-subtitle">Real experiences from JECians</p>
                </div>

                <div className="vt-grid">
                    {videos.slice(0, 3).map((video) => (
                        <div key={video.id} className="vt-card">
                            <div className="vt-video-wrapper">
                                <div id={`player-${video.id}`}></div>

                                {/* FIXED: Using onPointerDown for better mobile response */}
                                <button
                                    className={`vt-mute-btn ${!mutedStates[video.id] ? 'unmuted' : ''}`}
                                    onPointerDown={(e) => handleMuteToggle(e, video.id)}
                                    type="button"
                                >
                                    <i className={`fas ${mutedStates[video.id] ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                                    {mutedStates[video.id] ? ' Unmute' : ' Mute'}
                                </button>
                            </div>
                            <div className="vt-info">
                                {video.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
//hello//
export default VideoTestimonials;