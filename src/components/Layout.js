// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet!

// Import your shared components
import Sidebar from './Sidebar';
import Header from './Header';
import Subheader from './Subheader';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Sidebar />
      <div className="sticky-header">
        <Header />
        <Subheader />
      </div>

      <main>
        {/* This Outlet is the placeholder for your pages */}
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;