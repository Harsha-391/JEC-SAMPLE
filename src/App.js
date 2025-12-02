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
          
          {/* Main Pages - Updated URLs */}
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="placement" element={<Placements />} />
          <Route path="gallery" element={<Gallery />} />
          
          {/* Admission Routes - Changed 'admissions' to 'admission' (singular) */}
          <Route path="admission" element={<Admissions />} /> 
          <Route path="admission/reap" element={<Reap2025 />} />
          <Route path="admission/mandatory-disclosure" element={<MandatoryDisclosure />} />
          <Route path="admission/karma-scheme" element={<KarmaCourses />} />
          <Route path="admission/financial-aid" element={<FinancialAids />} />
          <Route path="admission/fee-structure" element={<FeeStructure />} />
          <Route path="admission/documents-required" element={<DocumentsRequired />} />
          <Route path="admission/courses-offered" element={<CoursesOffered />} />
          <Route path="admission/open-2025" element={<AdmissionOpen />} />
          <Route path="admission/procedure" element={<AdmissionProcedure />} />

          {/* Infrastructure Dropdown Routes */}
          <Route path="infrastructure/refuel-relax" element={<RefuelAndRelax />} />
          <Route path="infrastructure/prepare-present" element={<PrepareAndPresent />} />
          <Route path="infrastructure/learning-by-doing" element={<LearningByDoing />} />
          <Route path="infrastructure/convenience-safety" element={<ConvenienceAndSafety />} />

          {/* JEC Dropdown Routes */}
          <Route path="jec/faq" element={<Faq />} />
          <Route path="jec/management-team" element={<Management />} />
          <Route path="jec/human-network" element={<HumanNetwork />} />
          <Route path="jec/innovation-council" element={<IIC />} />
          <Route path="jec/alumni-association" element={<Alumni />} />
          <Route path="jec/career" element={<Employment />} />
          <Route path="jec/anti-ragging" element={<AntiRagging />} />
          <Route path="jec/testimonials" element={<Testimonials />} />

          {/* Our Society Dropdown Routes */}
          <Route path="society/foundation" element={<Foundation />} />
          <Route path="society/agrasen-college" element={<AgrasenCollege />} />
          <Route path="society/jces" element={<JCES />} />
          <Route path="society/teams" element={<KeyTeamsFunctions />} />

          {/* Department Routes - Changed 'departments' to 'department' */}
          <Route path="department/cse-ai" element={<Department />} />
          <Route path="department/cse" element={<Department />} />
          <Route path="department/it" element={<Department />} />
          <Route path="department/civil" element={<Department />} />
          <Route path="department/ece" element={<Department />} />
          <Route path="department/electrical" element={<Department />} />
          <Route path="department/mechanical" element={<Department />} />
          <Route path="department/applied-science" element={<Department />} />
          <Route path="department/coe" element={<Department />} />
          <Route path="department/research" element={<Department />} />
          <Route path="department/engineering" element={<Department />} />
          <Route path="department/moocs" element={<Department />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;