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
        // Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => setIsApiReady(true);
        } else {
            setIsApiReady(true);
        }
    }, []);

    useEffect(() => {
        // Initialize player when API is ready
        if (isApiReady && videoId && !playerRef.current) {
            playerRef.current = new window.YT.Player('virtual-tour-player', {
                videoId: videoId,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    loop: 1,
                    playlist: videoId, // Necessary for infinite loop
                    controls: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3
                },
                events: {
                    onReady: (event) => {
                        event.target.mute();
                        event.target.playVideo();
                    },
                    onStateChange: (event) => {
                        // Ensure it restarts immediately when it ends
                        if (event.data === window.YT.PlayerState.ENDED) {
                            event.target.playVideo();
                        }
                    }
                },
            });
        }
    }, [isApiReady, videoId]);

    const handleToggleMute = (e) => {
        e.preventDefault();
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
            {/* Background Video Layer */}
            <div className="tour-video-background">
                <div id="virtual-tour-player"></div>
                <div className="tour-video-overlay"></div>
            </div>

            <div className="take-a-tour-content">
                <h2 className="take-a-tour-title">JEC Campus Experience</h2>
                <p className="take-a-tour-subtitle">Take an immersive look at our world-class infrastructure and vibrant campus life.</p>

                <div className="tour-actions">
                    <button
                        className={`tour-mute-toggle ${!isMuted ? 'active' : ''}`}
                        onPointerDown={handleToggleMute}
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