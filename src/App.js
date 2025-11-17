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
import Testimonials from './pages/Testimonials'; // <-- 1. IMPORT YOUR NEW PAGE

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
          <Route path="jec/testimonials" element={<Testimonials />} /> {/* <-- 2. ADD THE ROUTE */}

          {/* ... other routes ... */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;