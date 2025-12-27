// src/components/Programs.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Programs.css';

// Data for programs with their respective paths
const programs = [
  { 
    type: 'B.Tech', 
    name: 'Civil Engineering (120 seats)', 
    path: '/JEC-engineering/Civil-Engineering' 
  },
  { 
    type: 'B.Tech', 
    name: 'Computer Science Engineering (120 seats)', 
    path: '/JEC-engineering/Computer-Science-Engineering' 
  },
  { 
    type: 'B.Tech', 
    name: 'Computer Science (Artificial Intelligence) (60 seats)', 
    path: '/JEC-engineering/Computer-Science-Engineering-AI' 
  },
  { 
    type: 'B.Tech', 
    name: 'Electrical Engineering (60 seats)', 
    path: '/JEC-engineering/Electrical-Engineering' 
  },
  { 
    type: 'B.Tech', 
    name: 'Electronics & Communication Engineering (30 seats)', 
    path: '/JEC-engineering/Electronics-Communication-Engineering' 
  },
  { 
    type: 'B.Tech', 
    name: 'Information Technology (30 seats)', 
    path: '/JEC-engineering/Information-Technology' 
  },
  { 
    type: 'B.Tech', 
    name: 'Mechanical Engineering (60 seats)', 
    path: '/JEC-engineering/Mechanical-Engineering' 
  },
  { 
    type: 'M.Tech', 
    name: 'Computer Science Engineering (18 seats)', 
    path: '/JEC-engineering/Computer-Science-Engineering' 
  },
   { 
    type: 'M.Tech', 
    name: 'Digital communication (18 seats)', 
    path: '/JEC-engineering/Digital-Communication' 
  },
   { 
    type: 'M.Tech', 
    name: 'Power system (18 seats)', 
    path: '/JEC-engineering/Power-System' 
  },
   { 
    type: 'M.Tech', 
    name: 'Production engineering (18 seats)', 
    path: '/JEC-engineering/Production-Engineering' 
  },
];

function Programs() {
  return (
    <section className="schools">
      <div className="schools-content">
        <h2 className="schools-title">Programs Offered</h2>
        <div className="schools-grid">
          {/* Map over the program data */}
          {programs.map((program, index) => (
            <Link 
              to={program.path} 
              className="school-item" 
              key={index}
              style={{ textDecoration: 'none' }} // Ensures the card doesn't look like a blue link
            >
              <div className="school-info">
                {/* Added classNames to match your CSS file */}
                <p className="program-type">{program.type}</p>
                <h3 className="program-name">{program.name}</h3>
              </div>
              {/* Changed 'a' to 'span' to prevent nested anchors within the main Link */}
              <span className="arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;