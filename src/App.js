// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Your main stylesheet

// Import your Layout and Page components
import Layout from './components/Layout';
import Home from './pages/Home';
import Admissions from './pages/Admissions';
// Import other pages as you create them...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This Route uses your Layout. All other pages go inside it. */}
        <Route path="/" element={<Layout />}>
          
          {/* 'index' means this is the default page for "/" */}
          <Route index element={<Home />} /> 
          
          {/* This is your new Admissions page */}
          <Route path="admissions" element={<Admissions />} /> 

          {/* You can add more pages here */}
          {/* <Route path="about" element={<About />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;