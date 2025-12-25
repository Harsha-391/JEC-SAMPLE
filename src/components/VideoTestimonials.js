// src/components/VirtualTour.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/VirtualTour.css';

function VirtualTour() {
    const [isMuted, setIsMuted] = useState(true);
    const [isApiReady, setIsApiReady] = useState(false);
    const playerRef = useRef(null);

    // Your Campus Tour Video ID
    const videoId = '3JjaFQSvtZU';

    useEffect(() => {
        // Handle YouTube API loading and global callback
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

    useEffect(() => {
        // Safety check to prevent crashing if videoId is missing
        const isValidId = videoId && videoId !== 'YOUR_360_VIDEO_ID';

        if (isApiReady && isValidId && !playerRef.current) {
            playerRef.current = new window.YT.Player('virtual-tour-player', {
                videoId: videoId,
                host: 'https://www.youtube.com', // Explicitly set host for security
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    loop: 1,
                    playlist: videoId,
                    controls: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    enablejsapi: 1,
                    // FIX: This origin tells YouTube your Vercel URL is safe
                    origin: window.location.origin
                },
                events: {
                    onReady: (event) => {
                        event.target.mute();
                        event.target.playVideo();
                    },
                    onStateChange: (event) => {
                        if (event.data === window.YT.PlayerState.ENDED) {
                            event.target.playVideo();
                        }
                    }
                },
            });
        }
    }, [isApiReady, videoId]);

    const handleToggleMute = (e) => {
        // Robust touch/click handler for mobile and desktop
        e.preventDefault();
        e.stopPropagation();

        if (playerRef.current && typeof playerRef.current.unMute === 'function') {
            if (isMuted) {
                playerRef.current.unMute();
                playerRef.current.setVolume(100);
                setIsMuted(false);
            } else {
                playerRef.current.mute();
                setIsMuted(true);
            }
        }
    };

    return (
        <section className="take-a-tour">
            <div className="tour-video-container">
                <div id="virtual-tour-player"></div>
                <div className="tour-overlay"></div>
            </div>

            <div className="take-a-tour-content">
                <h2 className="take-a-tour-title">JEC Campus Experience</h2>
                <p className="take-a-tour-subtitle">Take an immersive look at our world-class infrastructure and vibrant campus life.</p>

                <div className="tour-actions">
                    <button
                        className={`tour-mute-btn ${!isMuted ? 'active' : ''}`}
                        onPointerDown={handleToggleMute}
                        type="button"
                    >
                        <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
                        {isMuted ? ' Unmute Tour' : ' Mute Tour'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default VirtualTour;