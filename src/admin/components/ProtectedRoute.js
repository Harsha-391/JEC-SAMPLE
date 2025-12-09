// src/admin/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for auth state changes (login/logout)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Checking access...</div>;
  }

  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  // If user is logged in, show the protected content (Admin Panel)
  return children;
};

export default ProtectedRoute;