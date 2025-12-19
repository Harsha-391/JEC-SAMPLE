// src/components/Programs.js
import React from 'react';
import '../styles/Programs.css'

// Data for programs
const programs = [
  { type: 'B.Tech', name: 'Civil Engineering (120 seats)' },
  { type: 'B.Tech', name: 'Computer Science Engineering (120 seats)' },
  { type: 'B.Tech', name: 'Computer Science (Artificial Intelligence) (60 seats)' },
  { type: 'B.Tech', name: 'Electrical Engineering (60 seats)' },
  { type: 'B.Tech', name: 'Electronics & Communication Engineering (30 seats)' },
  { type: 'B.Tech', name: 'Information Technology (30 seats)' },
  { type: 'B.Tech', name: 'Mechanical Engineering (60 seats)' },
  { type: 'M.Tech', name: 'Computer Science Engineering (18 seats)' },
];

function Programs() {
  return (
    <section className="schools">
      <div className="schools-content">
        <h2 className="schools-title">Programs Offered</h2>
        <div className="schools-grid">
          {/* Map over the program data */}
          {programs.map((program, index) => (
            <div className="school-item" key={index}>
              <div className="school-info">
                <p>{program.type}</p>
                <h3>{program.name}</h3>
              </div>
              <a href="#" className="arrow">→</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;