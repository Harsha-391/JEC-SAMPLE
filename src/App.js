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
import AgrasenCollege from './pages/AgrasenCollege';
import KeyTeamsFunctions from './pages/KeyTeamsFunctions';
import Foundation from './pages/Foundation';
import Reap2025 from './pages/Reap2025';
import MandatoryDisclosure from './pages/MandatoryDisclosure'; 
import KarmaCourses from './pages/KarmaCourses';
import FinancialAids from './pages/FinancialAids';
import FeeStructure from './pages/FeeStructure'; 
import DocumentsRequired from './pages/DocumentsRequired';
import CoursesOffered from './pages/CoursesOffered';
import AdmissionOpen from './pages/AdmissionOpen'; 
import AdmissionProcedure from './pages/AdmissionProcedure';

// NEW IMPORTS FOR INFRASTRUCTURE PAGES
import RefuelAndRelax from './pages/RefuelAndRelax';
import PrepareAndPresent from './pages/PrepareAndPresent';
import LearningByDoing from './pages/LearningByDoing';
import ConvenienceAndSafety from './pages/ConvenienceAndSafety';

// Import the new Department Template Page
import Department from './pages/Department';

// Import the new Gallery Page
import Gallery from './pages/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} /> 
          <Route path="admissions" element={<Admissions />} /> 
          
          {/* Admission Dropdown Routes */}
          <Route path="admissions/reap" element={<Reap2025 />} />
          <Route path="admissions/disclosure" element={<MandatoryDisclosure />} />
          <Route path="admissions/karma" element={<KarmaCourses />} />
          <Route path="admissions/financial-aid" element={<FinancialAids />} />
          <Route path="admissions/fees" element={<FeeStructure />} />
          <Route path="admissions/documents" element={<DocumentsRequired />} />
          <Route path="admissions/courses" element={<CoursesOffered />} />
          <Route path="admissions/open" element={<AdmissionOpen />} />
          <Route path="admissions/procedure" element={<AdmissionProcedure />} />

          {/* Infrastructure Dropdown Routes */}
          <Route path="infrastructure/refuel" element={<RefuelAndRelax />} />
          <Route path="infrastructure/prepare" element={<PrepareAndPresent />} />
          <Route path="infrastructure/learning" element={<LearningByDoing />} />
          <Route path="infrastructure/convenience" element={<ConvenienceAndSafety />} />

          <Route path="placements" element={<Placements />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Gallery Route */}
          <Route path="gallery" element={<Gallery />} />

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
          <Route path="society/foundation" element={<Foundation />} />
          <Route path="society/agrasen-college" element={<AgrasenCollege />} />
          <Route path="society/jces" element={<JCES />} />
          <Route path="society/teams" element={<KeyTeamsFunctions />} />

          {/* Department Routes - All using the same Department template */}
          <Route path="departments/cse-ai" element={<Department />} />
          <Route path="departments/cse" element={<Department />} />
          <Route path="departments/it" element={<Department />} />
          <Route path="departments/civil" element={<Department />} />
          <Route path="departments/ece" element={<Department />} />
          <Route path="departments/ee" element={<Department />} />
          <Route path="departments/me" element={<Department />} />
          <Route path="departments/ash" element={<Department />} />
          <Route path="departments/coe" element={<Department />} />
          <Route path="departments/research" element={<Department />} />
          <Route path="departments/engineering" element={<Department />} />
          <Route path="departments/moocs" element={<Department />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;