import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

// If pre-rendered HTML exists, use hydrateRoot. Otherwise use createRoot.
if (container.hasChildNodes()) {
  hydrateRoot(container, 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

reportWebVitals();