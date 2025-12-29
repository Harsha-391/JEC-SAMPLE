// src/pages/Home.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import existing components
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import Team from '../components/Team';
import WhyJEC from '../components/WhyJEC';
import Outcomes from '../components/Outcomes';
import VideoTestimonials from '../components/VideoTestimonials';
import CampusLife from '../components/CampusLife';
import VirtualTour from '../components/VirtualTour';
import SEO from '../components/SEO';

function Home() {
    return (
        <>
            <SEO
                title="Jaipur Engineering College | Best Engineering College in Jaipur with High Placements"
                description="The JEC is known for offering top-quality education in various engineering & technology courses since 2000, and for its top placement results."
                keywords="JEC is one of the Best Engineering Colleges of Rajasthan in Jaipur city, Offering Top Quality education in various disciplines of Engineering & Technology. Since 2000, Jaipur Engineering College (JEC) has been known to enable students to develop a strong personality."
                canonical="https://jeckukas.org.in/"
            />

            <Hero />
            <Highlights />
            <Stats />
            <Programs />
            <Team />
            <WhyJEC />
            <Outcomes />
            <VideoTestimonials />
            <CampusLife />
            <VirtualTour />
        </>
    );
}

export default Home;