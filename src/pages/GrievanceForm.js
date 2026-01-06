// src/pages/GrievanceForm.js
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { db } from '../firebase'; // Optional: If you also want to save to database
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import '../styles/GrievanceForm.css'; // We will create this CSS next

const GrievanceForm = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const sendGrievance = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        // 1. (Optional) Save to Firebase Database first for record keeping
        try {
            const formData = new FormData(formRef.current);
            const data = Object.fromEntries(formData.entries());

            await addDoc(collection(db, "grievances"), {
                ...data,
                timestamp: serverTimestamp(),
                status: 'pending' // Mark as pending for admin review
            });
        } catch (error) {
            console.error("Database save failed", error);
            // We continue anyway to send the email
        }

        // 2. Send Email using EmailJS
        emailjs.sendForm(
            'YOUR_SERVICE_ID',   // Replace with ID from EmailJS dashboard
            'YOUR_TEMPLATE_ID',  // Replace with ID from EmailJS dashboard
            formRef.current,
            'YOUR_PUBLIC_KEY'    // Replace with Key from EmailJS dashboard
        )
            .then((result) => {
                setLoading(false);
                setStatus('SUCCESS');
                formRef.current.reset();
                alert("Grievance submitted successfully. Case ID generated.");
            }, (error) => {
                setLoading(false);
                setStatus('FAILED');
                alert("Failed to send grievance. Please try again.");
            });
    };

    return (
        <div className="grievance-container">
            <div className="grievance-card">
                <h2>Student Grievance Redressal</h2>
                <p className="subtitle">Submit your complaint securely. Your identity will be protected.</p>

                <form ref={formRef} onSubmit={sendGrievance}>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="student_name" required placeholder="Enter your name" />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Roll Number / Student ID</label>
                            <input type="text" name="roll_no" required placeholder="Ex: 21JEC001" />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <select name="department" required>
                                <option value="">Select Dept</option>
                                <option value="CSE">CSE</option>
                                <option value="ME">Mechanical</option>
                                <option value="EE">Electrical</option>
                                <option value="Civil">Civil</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Grievance Type</label>
                        <select name="category" required>
                            <option value="Academic">Academic Issue</option>
                            <option value="Hostel">Hostel/Mess Facility</option>
                            <option value="Harassment">Ragging / Harassment</option>
                            <option value="Infrastructure">Infrastructure/Lab</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Detailed Description</label>
                        <textarea name="message" rows="5" required placeholder="Describe your grievance in detail..."></textarea>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Grievance'}
                    </button>

                    {status === 'SUCCESS' && <p className="success-msg">Grievance Sent Successfully!</p>}
                </form>
            </div>
        </div>
    );
};

export default GrievanceForm;