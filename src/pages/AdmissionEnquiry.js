// src/pages/AdmissionEnquiry.js
import React, { useEffect } from 'react';
import './AdmissionEnquiry.css';

const AdmissionEnquiry = () => {
  
  useEffect(() => {
    // Dynamically load the NoPaperForms widget script when component mounts
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in4.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script if the user navigates away from this page
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="enquiry-page-wrapper">
      
      {/* Header Section - Maintaining original CSS and content */}
      <section className="enquiry-header-section">
        <div className="max-width-container">
          <h1>Admission Enquiry 2025</h1>
          <p>Take the first step towards a bright future at JEC. Fill out the form below and our counselors will guide you through the process.</p>
        </div>
      </section>

      {/* Form Section - The widget is placed inside the existing styled enquiry-card */}
      <div className="enquiry-form-container">
        <div className="enquiry-card">
          <h3>Enquiry Form</h3>
          
          {/* NEW: NoPaperForms Admission Widget Container */}
          <div 
            className="npf_wgts" 
            data-height="400px" 
            data-w="c1073fe2350d112d90b129addc24e9ff"
          ></div>

          {/* Privacy Disclaimer - Maintaining original placement and styling */}
          <div className="privacy-note full-width" style={{ marginTop: '2rem' }}>
            By submitting this form, you consent to receive communication from JEC regarding your admission enquiry via Email/SMS/Call.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnquiry;