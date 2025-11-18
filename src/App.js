import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your Layout and Page components
import Layout from './components/Layout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Management from './pages/Management';
import HumanNetwork from './pages/HumanNetwork';
import IIC from './pages/IIC';
import Alumni from './pages/Alumni';
import Employment from './pages/Employment';
import AntiRagging from './pages/AntiRagging';
import Testimonials from './pages/Testimonials';
import JCES from './pages/JCES';
import AgrasenCollege from './pages/AgrasenCollege'; // <-- 1. IMPORT THE NEW PAGE

// --- Placeholder Component for other new pages ---
const SocietyPlaceholder = ({ title }) => (
  <div style={{ padding: '100px 20px', textAlign: 'center', background: '#f8f9fa', minHeight: '50vh' }}>
    <h1 style={{ color: '#0072C6', marginBottom: '20px' }}>{title}</h1>
    <p style={{ fontSize: '18px', color: '#666' }}>
      This page is currently under construction. Content coming soon!
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} /> 
          <Route path="admissions" element={<Admissions />} /> 
          <Route path="placements" element={<Placements />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* JEC Dropdown Routes */}
          <Route path="jec/faq" element={<Faq />} />
          <Route path="jec/management" element={<Management />} />
          <Route path="jec/human-network" element={<HumanNetwork />} />
          <Route path="jec/iic" element={<IIC />} />
          <Route path="jec/alumni" element={<Alumni />} />
          <Route path="jec/employment" element={<Employment />} />
          <Route path="jec/anti-ragging" element={<AntiRagging />} />
          <Route path="jec/testimonials" element={<Testimonials />} />

          {/* Our Society Dropdown Routes */}
          <Route path="society/foundation" element={<SocietyPlaceholder title="Foundation for Better Tomorrow" />} />
          
          {/* 2. REPLACED PLACEHOLDER WITH REAL COMPONENT */}
          <Route path="society/agrasen-college" element={<AgrasenCollege />} />
          
          <Route path="society/jces" element={<JCES />} />
          <Route path="society/teams" element={<SocietyPlaceholder title="Key Teams & Functions" />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;