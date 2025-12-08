// src/pages/AdmissionEnquiry.js
import React, { useState } from 'react';
import { db } from '../firebase'; // Importing from your existing firebase.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
import './AdmissionEnquiry.css';

// --- DATA LISTS ---

const statesAndCities = {
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Noida", "Ghaziabad"],
  "Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Chandigarh"],
  "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Siliguri"]
  // Add more states as needed
};

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
    countryCode: '+91',
    mobile: '',
    state: '',
    city: '',
    level: '', // UG or PG
    program: ''
  });

  const [loading, setLoading] = useState(false);

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
      // 1. Send to Firebase Firestore
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        timestamp: serverTimestamp(), // detailed time of submission
        status: 'new' // To track follow-ups
      });

      alert("Thank you! Your enquiry has been submitted successfully. Our admission cell will contact you shortly.");
      
      // 2. Reset Form
      setFormData({
        fullName: '',
        email: '',
        countryCode: '+91',
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
      
      {/* Header Section (Matching Theme) */}
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

            {/* 3. Mobile Number with Country Code */}
            <div className="form-group">
              <label>Country Code</label>
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+971">+971 (UAE)</option>
                {/* Add more if needed */}
              </select>
            </div>

            <div className="form-group">
              <label>Mobile Number <span style={{color:'red'}}>*</span></label>
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

            {/* 4. State Dropdown */}
            <div className="form-group">
              <label>State <span style={{color:'red'}}>*</span></label>
              <select 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                required
              >
                <option value="">-- Select State --</option>
                {Object.keys(statesAndCities).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            {/* 5. City Dropdown (Dependent) */}
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
                {formData.state && statesAndCities[formData.state]?.map((city) => (
                  <option key={city} value={city}>{city}</option>
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

            {/* 7. Program Name Dropdown (Dependent) */}
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