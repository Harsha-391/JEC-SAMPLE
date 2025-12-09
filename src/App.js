import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

//header
import AdmissionEnquiry from './pages/AdmissionEnquiry';

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
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';

// --- ADMIN IMPORTS ---
import AdminLayout from './admin/AdminLayout'; 
import EditHero from './admin/pages/EditHero';
import EditBlog from './admin/pages/EditBlog';
import EditFaculty from './admin/pages/EditFaculty';

// --- CAMPUS LIFE IMPORTS ---
import GutsNGlory from './pages/GutsNGlory';
import StudentsCorner from './pages/StudentsCorner';
import GamesAndSports from './pages/GamesAndSports';
import VibrantIndia from './pages/VibrantIndia'; 
import CommitteesZone from './pages/CommitteesZone'; 
import MentalHealth from './pages/MentalHealth';
import AcademicAchievers from './pages/AcademicAchievers';
import EngineeringProjects from './pages/EngineeringProjects';
import VideoGallery from './pages/VideoGallery'; // ✅ ADD THIS IMPORT
import Overview from './admin/pages/Overview';
import EditTestimonials from './admin/pages/EditTestimonials';
import EditDepartment from './admin/pages/EditDepartment';
import EditVideoGallery from './admin/pages/EditVideoGallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* --- PUBLIC WEBSITE ROUTES --- */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 

          {/* header */}
          <Route path="admission-enquiry" element={<AdmissionEnquiry />} />
          
          {/* Main Pages */}
          <Route path="jec/About-JEC" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="placement" element={<Placements />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/view/:id" element={<SinglePost />} />
          
          {/* Campus Life Routes */}
          <Route path="/campus-life/guts-n-glory" element={<GutsNGlory />} />
          <Route path="/campus-life/students-corner" element={<StudentsCorner />} />
          <Route path="/campus-life/games-and-sports" element={<GamesAndSports />} />
          <Route path="/campus-life/jec-vibrant-india" element={<VibrantIndia />} />
          <Route path="/campus-life/committees-zone" element={<CommitteesZone />} />
          <Route path="/campus-life/mental-health" element={<MentalHealth />} />
          <Route path="/campus-life/academic-achievers" element={<AcademicAchievers />} />
          <Route path="/campus-life/engineering-projects" element={<EngineeringProjects />} /> {/* ✅ ADD THIS ROUTE */}
                    <Route path="/campus-life/video-gallery" element={<VideoGallery />} /> {/* ✅ ADD THIS ROUTE */}

          {/* Admission Routes */}
          <Route path="admissions" element={<Admissions />} /> 
          <Route path="admission/REAP-2025" element={<Reap2025 />} />
          <Route path="admission/Mandatory-Disclosure" element={<MandatoryDisclosure />} />
          <Route path="admission/Karma-Courses-JEC" element={<KarmaCourses />} />
          <Route path="admission/Financial-Aids-Bank-Loans" element={<FinancialAids />} />
          <Route path="admission/Fee-Structure" element={<FeeStructure />} />
          <Route path="admission/Documents-Required" element={<DocumentsRequired />} />
          <Route path="admission/Courses-Offered" element={<CoursesOffered />} />
          <Route path="admission/btech-admissions" element={<AdmissionOpen />} />
          <Route path="admission/Admission-Procedure" element={<AdmissionProcedure />} />

          {/* Infrastructure Dropdown Routes */}
          <Route path="Infrastructure/Refuel-and-Relax" element={<RefuelAndRelax />} />
          <Route path="Infrastructure/Prepare-and-Present" element={<PrepareAndPresent />} />
          <Route path="Infrastructure/Learning-By-Doing" element={<LearningByDoing />} />
          <Route path="Infrastructure/Convenience-and-Safety" element={<ConvenienceAndSafety />} />

          {/* JEC Dropdown Routes */}
          <Route path="jec/JEC-FAQ" element={<Faq />} />
          <Route path="jec/Management" element={<Management />} />
          <Route path="jec/network" element={<HumanNetwork />} />
          <Route path="jec/Institution-Innovation-Council-JEC" element={<IIC />} />
          <Route path="jec/Alumni" element={<Alumni />} />
          <Route path="jec/Employment-JEC" element={<Employment />} />
          <Route path="jec/Anti-Ragging-Committee" element={<AntiRagging />} />
          <Route path="jec/Students-Testimonials" element={<Testimonials />} />

          {/* Our Society Dropdown Routes */}
          <Route path="Our-Society/Foundation-for-Better-Tomorrow" element={<Foundation />} />
          <Route path="Our-Society/Other-Institutes-Agrasen-College" element={<AgrasenCollege />} />
          <Route path="Our-Society/Other-Institutes-Jaipur-College-of-Education-and-Science" element={<JCES />} />
          <Route path="Our-Society/Key-Teams-Functions" element={<KeyTeamsFunctions />} />

          {/* Department Routes */}
          <Route path="JEC-engineering/Computer-Science-Engineering-AI" element={<Department />} />
          <Route path="JEC-engineering/Computer-Science-Engineering" element={<Department />} />
          <Route path="JEC-engineering/Information-Technology" element={<Department />} />
          <Route path="JEC-engineering/Civil-Engineering" element={<Department />} />
          <Route path="JEC-engineering/Electronics-Communication-Engineering" element={<Department />} />
          <Route path="JEC-engineering/Electrical-Engineering" element={<Department />} />
          <Route path="JEC-engineering/Mechanical-Engineering" element={<Department />} />
          <Route path="JEC-engineering/Applied-Sciences-Humanities" element={<Department />} />
          <Route path="JEC-engineering/Centre-Of-Excellence-COE" element={<Department />} />
          <Route path="JEC-engineering/JEC-Research-Cell" element={<Department />} />
          <Route path="JEC-engineering/Engineering-JEC" element={<Department />} />
          <Route path="JEC-engineering/MOOCS-NPTEL-SWAYAM" element={<Department />} />
        </Route>

        {/* --- ADMIN ROUTES (Separate Layout) --- */}
        <Route path="/admin" element={<AdminLayout />}>
           <Route path="edit-home" element={<EditHero />} />
           <Route path="manage-blogs" element={<EditBlog />} />
           <Route path="manage-faculty" element={<EditFaculty />} />
           <Route index element={<Overview />} />
           <Route path="manage-testimonials" element={<EditTestimonials />} />
           <Route path="manage-departments" element={<EditDepartment />} />
           <Route path="manage-videos" element={<EditVideoGallery />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;