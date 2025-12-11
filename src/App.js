import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 1. Import HelmetProvider
import './App.css';

// Layouts (Keep these as standard imports for faster initial render)
import Layout from './components/Layout';
import AdminLayout from './admin/AdminLayout';

// Auth Components (Standard import for speed)
import ProtectedRoute from './admin/components/ProtectedRoute';

// --- LAZY IMPORT PAGES ---
// 1. Public Pages
const Home = lazy(() => import('./pages/Home'));
const AdmissionEnquiry = lazy(() => import('./pages/AdmissionEnquiry'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Placements = lazy(() => import('./pages/Placements'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Faq = lazy(() => import('./pages/Faq'));

// 2. JEC Dropdown
const Management = lazy(() => import('./pages/Management'));
const HumanNetwork = lazy(() => import('./pages/HumanNetwork'));
const IIC = lazy(() => import('./pages/IIC'));
const Alumni = lazy(() => import('./pages/Alumni'));
const Employment = lazy(() => import('./pages/Employment'));
const AntiRagging = lazy(() => import('./pages/AntiRagging'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

// 3. Society Dropdown
const JCES = lazy(() => import('./pages/JCES'));
const AgrasenCollege = lazy(() => import('./pages/AgrasenCollege'));
const KeyTeamsFunctions = lazy(() => import('./pages/KeyTeamsFunctions'));
const Foundation = lazy(() => import('./pages/Foundation'));

// 4. Admission Sub-pages
const Reap2025 = lazy(() => import('./pages/Reap2025'));
const MandatoryDisclosure = lazy(() => import('./pages/MandatoryDisclosure'));
const KarmaCourses = lazy(() => import('./pages/KarmaCourses'));
const FinancialAids = lazy(() => import('./pages/FinancialAids'));
const FeeStructure = lazy(() => import('./pages/FeeStructure'));
const DocumentsRequired = lazy(() => import('./pages/DocumentsRequired'));
const CoursesOffered = lazy(() => import('./pages/CoursesOffered'));
const AdmissionOpen = lazy(() => import('./pages/AdmissionOpen'));
const AdmissionProcedure = lazy(() => import('./pages/AdmissionProcedure'));

// 5. Infrastructure
const RefuelAndRelax = lazy(() => import('./pages/RefuelAndRelax'));
const PrepareAndPresent = lazy(() => import('./pages/PrepareAndPresent'));
const LearningByDoing = lazy(() => import('./pages/LearningByDoing'));
const ConvenienceAndSafety = lazy(() => import('./pages/ConvenienceAndSafety'));

// 6. Dynamic Content (Blog, Gallery, Dept)
const Department = lazy(() => import('./pages/Department'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const SinglePost = lazy(() => import('./pages/SinglePost'));
const VideoGallery = lazy(() => import('./pages/VideoGallery'));

// 7. Campus Life
const GutsNGlory = lazy(() => import('./pages/GutsNGlory'));
const StudentsCorner = lazy(() => import('./pages/StudentsCorner'));
const GamesAndSports = lazy(() => import('./pages/GamesAndSports'));
const VibrantIndia = lazy(() => import('./pages/VibrantIndia'));
const CommitteesZone = lazy(() => import('./pages/CommitteesZone'));
const MentalHealth = lazy(() => import('./pages/MentalHealth'));
const AcademicAchievers = lazy(() => import('./pages/AcademicAchievers'));
const EngineeringProjects = lazy(() => import('./pages/EngineeringProjects'));

// --- LAZY IMPORT ADMIN PAGES ---
const Login = lazy(() => import('./admin/pages/Login'));
const Overview = lazy(() => import('./admin/pages/Overview'));
const EditHero = lazy(() => import('./admin/pages/EditHero'));
const EditBlog = lazy(() => import('./admin/pages/EditBlog'));
const EditFaculty = lazy(() => import('./admin/pages/EditFaculty'));
const EditTestimonials = lazy(() => import('./admin/pages/EditTestimonials'));
const EditDepartment = lazy(() => import('./admin/pages/EditDepartment'));
const EditVideoGallery = lazy(() => import('./admin/pages/EditVideoGallery'));
const EditGallery = lazy(() => import('./admin/pages/EditGallery'));
const UserManagement = lazy(() => import('./admin/pages/UserManagement'));


// --- LOADING SPINNER COMPONENT ---
const LoadingFallback = () => (
  <div style={{
    height: '100vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column',
    color: '#0072C6'
  }}>
    <div className="spinner"></div>
    <h3>Loading JEC...</h3>
    <style>{`
      .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #0072C6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);


function App() {
  return (
    <HelmetProvider> {/* 2. Wrap App with HelmetProvider for SEO */}
      <BrowserRouter>
        {/* Wrap everything in Suspense to handle the lazy loading state */}
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            
            {/* --- PUBLIC WEBSITE ROUTES --- */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} /> 

              {/* Header */}
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
              <Route path="/campus-life/engineering-projects" element={<EngineeringProjects />} />
              <Route path="/campus-life/video-gallery" element={<VideoGallery />} />

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

              {/* Department Routes - Note: These all use the same 'Department' template */}
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

            {/* Login Route */}
            <Route path="/admin/login" element={<Login />} />

            {/* --- ADMIN ROUTES --- */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'editor']}>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
                <Route index element={<Overview />} />
                <Route path="edit-home" element={<EditHero />} />
                <Route path="manage-blogs" element={<EditBlog />} />
                <Route path="manage-faculty" element={<EditFaculty />} />
                <Route path="manage-testimonials" element={<EditTestimonials />} />
                <Route path="manage-departments" element={<EditDepartment />} />
                <Route path="manage-videos" element={<EditVideoGallery />} />
                <Route path="manage-gallery" element={<EditGallery />} />

                {/* Admin Only */}
                <Route 
                  path="users" 
                  element={
                    <ProtectedRoute allowedRoles={['admin']}>
                      <UserManagement />
                    </ProtectedRoute>
                  } 
                />
            </Route>

          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;