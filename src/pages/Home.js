// src/pages/Home.js
import React from 'react';

// Import all your content components
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import Team from '../components/Team';
import WhyJEC from '../components/WhyJEC';
import Outcomes from '../components/Outcomes';
import Research from '../components/Research';
import CampusLife from '../components/CampusLife';
import Grievance from '../components/Grievance';
import VirtualTour from '../components/VirtualTour';

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Stats />
      <Programs />
      <Team />
      <WhyJEC />
      <Outcomes />
      <Research />
      <CampusLife />
      <Grievance />
      <VirtualTour />
    </>
  );
}

export default Home;