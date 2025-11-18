import React from 'react';

function DocumentsRequired() {
  return (
    <div className="docs-page">
      
      {/* Hero Section */}
      <section className="docs-hero">
        <div className="max-width-container">
            <h1>Documents Required for Admission</h1>
            <p>Essential checklist for B.Tech and M.Tech reporting candidates for Session 2025-26.</p>
        </div>
      </section>

      <div className="max-width-container docs-content-wrapper">
        
        <div className="docs-notice-box">
            <i className="fas fa-exclamation-circle"></i> <strong>Instructions:</strong> Candidates reporting for admission are required to fill up the admission form available in the college. Please bring the <strong>Original copies</strong> for verification along with <strong>self-attested photocopies in Duplicate</strong> (2 Sets).
        </div>

        <section className="docs-program-section">
            <div className="docs-section-header">
                <i className="fas fa-user-graduate"></i>
                <h2>B.Tech (1st Year & 2nd Year)</h2>
                <span className="docs-session-tag">Session: 2025-26</span>
            </div>

            <div className="docs-table-responsive">
                <table className="docs-doc-table">
                    <thead>
                        <tr>
                            <th width="10%">Sr. No.</th>
                            <th width="50%">Name of Document</th>
                            <th width="20%">Set No. 1</th>
                            <th width="20%">Set No. 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>10+2 / 12th Mark sheet</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>2</td><td>10th Certificate & Mark sheet</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>3</td><td>Aadhaar Card</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>4</td><td>Transfer Certificate (TC)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>5</td><td>Migration Certificate (CBSE/ICSE/Other Boards)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>6</td><td>Affidavit for Gap Period (if passed before 2020)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>7</td><td>Caste Certificate (OBC/SC/ST only)</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>8</td><td>Character Certificate</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>9</td><td>Medical Certificate (As per REAP Format)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>10</td><td>Domicile Certificate of Father / Mother</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>11</td><td>REAP Allotment Letter (if applicable)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>12</td><td>JEE (Mains) Score Card (If required)</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>13</td><td>Passport size photographs (Color)</td><td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold' }}>5 Nos.</td></tr>
                    </tbody>
                </table>
            </div>

            <div className="docs-sub-section">
                <h3>Additional for Fee Waiver Candidates (TFWS)</h3>
                <div className="docs-table-responsive">
                    <table className="docs-doc-table">
                        <tbody>
                            <tr>
                                <td width="60%">Income certificate of Parent</td>
                                <td width="20%" className="docs-original-badge">Original</td>
                                <td width="20%" className="docs-copy-badge">Photocopy</td>
                            </tr>
                            <tr>
                                <td>Affidavit on Rs. 10/- stamp paper (notarized)</td>
                                <td className="docs-original-badge">Original</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>REAP Allotment Letter</td>
                                <td className="docs-original-badge">Original</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="docs-sub-section">
                <h3>Additional for Lateral Entry (2nd Year) Candidates</h3>
                <div className="docs-table-responsive">
                    <table className="docs-doc-table">
                        <tbody>
                            <tr>
                                <td width="60%">Graduation / Diploma Mark sheets (All Years/Semesters)</td>
                                <td width="20%" className="docs-original-badge">Original</td>
                                <td width="20%" className="docs-copy-badge">Photocopy</td>
                            </tr>
                            <tr>
                                <td>Migration (Graduation/ Diploma)</td>
                                <td className="docs-original-badge">Original</td>
                                <td className="docs-copy-badge">Photocopy</td>
                            </tr>
                            <tr>
                                <td>Transfer Certificate</td>
                                <td className="docs-original-badge">Original</td>
                                <td className="docs-copy-badge">Photocopy</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="docs-program-section docs-mtech">
            <div className="docs-section-header">
                <i className="fas fa-award"></i>
                <h2>M.Tech (1st Year)</h2>
                <span className="docs-session-tag" style={{ background: 'var(--docs-logo-blue)' }}>Session: 2025-26</span>
            </div>

            <div className="docs-table-responsive">
                <table className="docs-doc-table">
                    <thead>
                        <tr>
                            <th width="10%">Sr. No.</th>
                            <th width="50%">Name of Document</th>
                            <th width="20%">Set No. 1</th>
                            <th width="20%">Set No. 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>10+2 / 12th Mark sheet</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>2</td><td>10th Certificate & Mark sheet</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>3</td><td>B.Tech / B.E. Consolidated mark sheet (or all semesters)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>4</td><td>Aadhaar Card</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>5</td><td>Transfer Certificate</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>6</td><td>Migration Certificate</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>7</td><td>Affidavit for GATE scholarship (Rs 50/- stamp paper)</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>8</td><td>Caste Certificate (OBC/SC/ST only)</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>9</td><td>Character Certificate</td><td className="docs-original-badge">Original</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>10</td><td>Domicile Certificate</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>11</td><td>CAM Allotment Letter</td><td className="docs-copy-badge">Photocopy</td><td className="docs-original-badge">Original</td></tr>
                        <tr><td>12</td><td>GATE Score Card (If required)</td><td className="docs-copy-badge">Photocopy</td><td className="docs-copy-badge">Photocopy</td></tr>
                        <tr><td>13</td><td>Passport size photographs (Color)</td><td colSpan="2" style={{ textAlign: 'center', fontWeight: 'bold' }}>4 Nos.</td></tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section className="docs-counselor-section">
            
            <h2>Speak, Discuss & Meet Your Counselor!</h2>
            <p>Just ask! Get answers! Don't miss out on your lifetime opportunity! Your admission counselors are ready to serve you! They are affectionate to assist you in your admission process and enable you to complete formalities with ease.</p>
            
            <div className="docs-contact-grid">
                <div className="docs-contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <span>8875071333 (30 Lines)</span>
                </div>
                <div className="docs-contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:admissions.jec@gmail.com">admissions.jec@gmail.com</a>
                </div>
            </div>
        </section>

    </div>

    </div>
  );
}

export default DocumentsRequired;