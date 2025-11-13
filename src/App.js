// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your Layout and Page components
import Layout from './components/Layout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Placements from './pages/Placements'; // <-- 1. IMPORT YOUR NEW PAGE

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} /> 
          <Route path="admissions" element={<Admissions />} /> 
          <Route path="placements" element={<Placements />} /> {/* <-- 2. ADD THE ROUTE */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;