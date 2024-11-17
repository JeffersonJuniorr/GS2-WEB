// src/main.jsx ou src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter
import App from './App'; // O arquivo que contém seu componente App
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* Envolva o App com BrowserRouter */}
    <App />
  </BrowserRouter>
);
