// src/App.js
import React from 'react';
import './App.css'; // Your main stylesheet

// Import all your new components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Stats from './components/Stats';
import Programs from './components/Programs';
import Team from './components/Team';
import WhyJEC from './components/WhyJEC';
import Outcomes from './components/Outcomes';
import CampusLife from './components/CampusLife';
import Grievance from './components/Grievance';
import VirtualTour from './components/VirtualTour';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* All tags must be self-closing or have a closing tag */}
      <Sidebar />
      <div className="sticky-header">
        <Header />
        <Subheader />
      </div>
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
      <Footer />
    </>
  );
}

export default App;