import React from 'react';
import ReactDOM from 'react-dom/client';
import Reset from './styles/Reset';

import App from './App';
import LabedditProvider from './global/LabedditContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LabedditProvider>
    <Reset />
    <App />
  </LabedditProvider>
);