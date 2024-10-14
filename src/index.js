import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line
import App from './App'; // Make sure this points to your main App component

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
