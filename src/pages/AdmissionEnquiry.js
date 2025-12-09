// src/pages/AdmissionEnquiry.js
import React, { useState } from 'react';
import { db } from '../firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import { State, City } from 'country-state-city';
import './AdmissionEnquiry.css';

// --- DATA LISTS ---

const programs = {
  "UG": [
    "B.Tech - Computer Science & Engineering",
    "B.Tech - CSE (Artificial Intelligence)",
    "B.Tech - Information Technology",
    "B.Tech - Civil Engineering",
    "B.Tech - Mechanical Engineering",
    "B.Tech - Electrical Engineering",
    "B.Tech - Electronics & Communication"
  ],
  "PG": [
    "M.Tech - Computer Science",
    "M.Tech - Digital Communications",
    "M.Tech - Power Systems",
    "M.Tech - Production Engineering"
  ]
};

const AdmissionEnquiry = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneCode: '+91', // Hardcoded default
    mobile: '',
    state: '',
    city: '',
    level: '', 
    program: ''
  });

  const [loading, setLoading] = useState(false);

  // --- DYNAMIC DATA CALCULATIONS ---
  
  // 1. Hardcode Country to India ('IN') for the state list
  const countryCode = 'IN';

  // 2. Get all states of India directly
  const states = State.getStatesOfCountry(countryCode);

  // 3. Get cities based on selected state
  const cities = formData.state 
    ? City.getCitiesOfState(countryCode, formData.state) 
    : [];


  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => {
      // Logic: If State changes, reset City
      if (name === 'state') {
        return { ...prev, [name]: value, city: '' };
      }
      // Logic: If Level (UG/PG) changes, reset Program
      if (name === 'level') {
        return { ...prev, [name]: value, program: '' };
      }
      return { ...prev, [name]: value };
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // --- DATA CLEANING BEFORE SAVE ---
      // Convert state code (e.g. "RJ") back to Name ("Rajasthan") 
      const stateObj = State.getStateByCodeAndCountry(formData.state, countryCode);
      
      const finalData = {
        ...formData,
        country: 'India', 
        phoneCode: '+91', // Ensure this is always sent
        state: stateObj ? stateObj.name : formData.state,
        timestamp: serverTimestamp(),
        status: 'new'
      };

      // 1. Send to Firebase Firestore
      await addDoc(collection(db, "enquiries"), finalData);

      alert("Thank you! Your enquiry has been submitted successfully. Our admission cell will contact you shortly.");
      
      // 2. Reset Form
      setFormData({
        fullName: '',
        email: '',
        phoneCode: '+91',
        mobile: '',
        state: '',
        city: '',
        level: '',
        program: ''
      });

    } catch (error) {
      console.error("Error submitting enquiry: ", error);
      alert("Something went wrong. Please try again later or contact us directly.");
    }

    setLoading(false);
  };

  return (
    <div className="enquiry-page-wrapper">
      
      {/* Header Section */}
      <section className="enquiry-header-section">
        <div className="max-width-container">
          <h1>Admission Enquiry 2025</h1>
          <p>Take the first step towards a bright future at JEC. Fill out the form below and our counselors will guide you through the process.</p>
        </div>
      </section>

      {/* Form Section */}
      <div className="enquiry-form-container">
        <div className="enquiry-card">
          <h3>Enquiry Form</h3>
          
          <form onSubmit={handleSubmit} className="form-grid">
            
            {/* 1. Full Name */}
            <div className="form-group full-width">
              <label>Applicant Full Name <span style={{color:'red'}}>*</span></label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
            </div>

            {/* 2. Email ID */}
            <div className="form-group full-width">
              <label>Applicant Email ID <span style={{color:'red'}}>*</span></label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="example@gmail.com" 
                required 
              />
            </div>

            {/* 3. Mobile Number (Code removed from UI, hardcoded to +91) */}
            <div className="form-group full-width">
              <label>Mobile Number (+91) <span style={{color:'red'}}>*</span></label>
              <input 
                type="tel" 
                name="mobile" 
                value={formData.mobile} 
                onChange={handleChange} 
                placeholder="9876543210" 
                pattern="[0-9]{10}" 
                title="Please enter a valid 10-digit mobile number"
                required 
              />
            </div>

            {/* 4. State Dropdown (India Only) */}
            <div className="form-group">
              <label>State <span style={{color:'red'}}>*</span></label>
              <select 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                required
              >
                <option value="">-- Select State --</option>
                {states.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. City Dropdown */}
            <div className="form-group">
              <label>City <span style={{color:'red'}}>*</span></label>
              <select 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                required 
                disabled={!formData.state} // Disable if no state selected
              >
                <option value="">-- Select City --</option>
                {cities.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 6. UG/PG Dropdown */}
            <div className="form-group">
              <label>Course Level <span style={{color:'red'}}>*</span></label>
              <select 
                name="level" 
                value={formData.level} 
                onChange={handleChange} 
                required
              >
                <option value="">-- Select Level --</option>
                <option value="UG">Undergraduate (B.Tech)</option>
                <option value="PG">Postgraduate (M.Tech)</option>
              </select>
            </div>

            {/* 7. Program Name Dropdown */}
            <div className="form-group full-width">
              <label>Program / Branch Interest <span style={{color:'red'}}>*</span></label>
              <select 
                name="program" 
                value={formData.program} 
                onChange={handleChange} 
                required
                disabled={!formData.level}
              >
                <option value="">-- Select Program --</option>
                {formData.level && programs[formData.level]?.map((prog) => (
                  <option key={prog} value={prog}>{prog}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="full-width">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </div>

            <div className="privacy-note full-width">
              By submitting this form, you consent to receive communication from JEC regarding your admission enquiry via Email/SMS/Call.
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnquiry;