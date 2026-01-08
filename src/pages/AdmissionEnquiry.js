// src/pages/AdmissionEnquiry.js
import React, { useEffect } from 'react';
import './AdmissionEnquiry.css';

const AdmissionEnquiry = () => {
  
  useEffect(() => {
<<<<<<< HEAD
    // 1. Create a unique ID for the script to manage it properly
    const scriptId = "npf-admission-widget-script";
    
    // 2. Remove any existing instance of the script to force a reload
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    // 3. Create and configure the new script element
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in4.nopaperforms.com/emwgts.js";
    
    // 4. Append to body to trigger the widget search
    document.body.appendChild(script);

    // 5. Cleanup: Remove the script when the user leaves the page
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      
      // Also clean up any global NPF variables if they exist to prevent conflicts on return
      if (window.npf_widget) {
          delete window.npf_widget;
=======
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
>>>>>>> 647bfa7efa14f898c33e8225ec9f6924be05e11f
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

<<<<<<< HEAD
      {/* Form Container - Using your existing CSS card styling */}
=======
      {/* Form Section - The widget is placed inside the existing styled enquiry-card */}
>>>>>>> 647bfa7efa14f898c33e8225ec9f6924be05e11f
      <div className="enquiry-form-container">
        <div className="enquiry-card">
          <h3>Enquiry Form</h3>
          
<<<<<<< HEAD
          {/* NoPaperForms Widget 
              Note: This div must exist in the DOM before the script loads.
          */}
=======
          {/* NEW: NoPaperForms Admission Widget Container */}
>>>>>>> 647bfa7efa14f898c33e8225ec9f6924be05e11f
          <div 
            className="npf_wgts" 
            data-height="400px" 
            data-w="c1073fe2350d112d90b129addc24e9ff"
          ></div>

<<<<<<< HEAD
=======
          {/* Privacy Disclaimer - Maintaining original placement and styling */}
>>>>>>> 647bfa7efa14f898c33e8225ec9f6924be05e11f
          <div className="privacy-note full-width" style={{ marginTop: '2rem' }}>
            By submitting this form, you consent to receive communication from JEC regarding your admission enquiry via Email/SMS/Call.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnquiry;