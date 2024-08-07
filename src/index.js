import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import customTheme from './components/custom/customTheme';

import { ThemeProvider } from "@material-tailwind/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider value={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);