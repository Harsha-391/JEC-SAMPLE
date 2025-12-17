import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import './App.css';

// Layouts
import Layout from './components/Layout';
import AdminLayout from './admin/AdminLayout';

// Auth Components
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

// 4. Programs Dropdown
const CoursesOffered = lazy(() => import('./pages/CoursesOffered'));
const EngineeringProjects = lazy(() => import('./pages/EngineeringProjects'));
const AcademicAchievers = lazy(() => import('./pages/AcademicAchievers'));
const Department = lazy(() => import('./pages/Department'));

// 5. Admissions Dropdown
const AdmissionProcedure = lazy(() => import('./pages/AdmissionProcedure'));
const FeeStructure = lazy(() => import('./pages/FeeStructure'));
const DocumentsRequired = lazy(() => import('./pages/DocumentsRequired'));
const Reap2025 = lazy(() => import('./pages/Reap2025'));
const FinancialAids = lazy(() => import('./pages/FinancialAids'));
const AdmissionOpen = lazy(() => import('./pages/AdmissionOpen'));

// 6. Campus Dropdown
const StudentsCorner = lazy(() => import('./pages/StudentsCorner'));
const CampusLife = lazy(() => import('./components/CampusLife')); 
const VideoGallery = lazy(() => import('./pages/VideoGallery'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Grievance = lazy(() => import('./components/Grievance'));
const MandatoryDisclosure = lazy(() => import('./pages/MandatoryDisclosure'));

// 7. Research
const Foundation = lazy(() => import('./pages/Foundation'));
const KeyTeamsFunctions = lazy(() => import('./pages/KeyTeamsFunctions'));
const LearningByDoing = lazy(() => import('./pages/LearningByDoing'));
const PrepareAndPresent = lazy(() => import('./pages/PrepareAndPresent'));
const RefuelAndRelax = lazy(() => import('./pages/RefuelAndRelax'));
const VibrantIndia = lazy(() => import('./pages/VibrantIndia'));
const MentalHealth = lazy(() => import('./pages/MentalHealth'));
const KarmaCourses = lazy(() => import('./pages/KarmaCourses'));
const ConvenienceAndSafety = lazy(() => import('./pages/ConvenienceAndSafety'));

// 8. Blog
const Blog = lazy(() => import('./pages/Blog'));
const SinglePost = lazy(() => import('./pages/SinglePost'));

// --- ADMIN PAGES ---
const Login = lazy(() => import('./admin/pages/Login'));
const Overview = lazy(() => import('./admin/pages/Overview'));
const EditHero = lazy(() => import('./admin/pages/EditHero'));
const EditBlog = lazy(() => import('./admin/pages/EditBlog'));
const EditFaculty = lazy(() => import('./admin/pages/EditFaculty'));
const EditTestimonials = lazy(() => import('./admin/pages/EditTestimonials'));
const EditDepartment = lazy(() => import('./admin/pages/EditDepartment'));
const EditVideoGallery = lazy(() => import('./admin/pages/EditVideoGallery'));
const EditGallery = lazy(() => import('./admin/pages/EditGallery'));
const EditPlacements = lazy(() => import('./admin/pages/EditPlacements')); // <--- NEW IMPORT
const UserManagement = lazy(() => import('./admin/pages/UserManagement'));

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            {/* --- PUBLIC ROUTES --- */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="admission-enquiry" element={<AdmissionEnquiry />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="placements" element={<Placements />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="faq" element={<Faq />} />

              {/* JEC Dropdown */}
              <Route path="jec-management" element={<Management />} />
              <Route path="human-network" element={<HumanNetwork />} />
              <Route path="industry-interaction-cell" element={<IIC />} />
              <Route path="alumni" element={<Alumni />} />
              <Route path="employment" element={<Employment />} />
              <Route path="anti-ragging" element={<AntiRagging />} />
              <Route path="testimonials" element={<Testimonials />} />

              {/* Society Dropdown */}
              <Route path="jaipur-college-of-engineering-and-science" element={<JCES />} />
              <Route path="agrasen-college" element={<AgrasenCollege />} />

              {/* Programs Dropdown */}
              <Route path="courses-offered" element={<CoursesOffered />} />
              <Route path="engineering-projects" element={<EngineeringProjects />} />
              <Route path="academic-achievers" element={<AcademicAchievers />} />
              
              {/* Admissions Dropdown */}
              <Route path="admission-procedure" element={<AdmissionProcedure />} />
              <Route path="fee-structure" element={<FeeStructure />} />
              <Route path="documents-required" element={<DocumentsRequired />} />
              <Route path="reap-2025" element={<Reap2025 />} />
              <Route path="financial-aids" element={<FinancialAids />} />
              <Route path="admission-open" element={<AdmissionOpen />} />

              {/* Campus Dropdown */}
              <Route path="students-corner" element={<StudentsCorner />} />
              <Route path="campus-life" element={<CampusLife />} />
              <Route path="video-gallery" element={<VideoGallery />} />
              <Route path="photo-gallery" element={<Gallery />} />
              <Route path="grievance-redressal" element={<Grievance />} />
              <Route path="mandatory-disclosure" element={<MandatoryDisclosure />} />

              {/* Research Dropdown */}
              <Route path="research/foundation" element={<Foundation />} />
              <Route path="research/key-teams" element={<KeyTeamsFunctions />} />
              <Route path="research/learning-by-doing" element={<LearningByDoing />} />
              <Route path="research/prepare-and-present" element={<PrepareAndPresent />} />
              <Route path="research/refuel-and-relax" element={<RefuelAndRelax />} />
              <Route path="research/vibrant-india" element={<VibrantIndia />} />
              <Route path="research/mental-health" element={<MentalHealth />} />
              <Route path="research/karma-courses" element={<KarmaCourses />} />
              <Route path="research/convenience-safety" element={<ConvenienceAndSafety />} />

              {/* Blog */}
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:id" element={<SinglePost />} />

              {/* Dynamic Department Route */}
              <Route path="JEC-engineering/:departmentId" element={<Department />} />
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
                <Route path="manage-placements" element={<EditPlacements />} /> {/* <--- NEW ROUTE */}

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