import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";  // 🔥 BUNU EKLE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>   {/* 🔥 SADECE BURADA OLMALI */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);