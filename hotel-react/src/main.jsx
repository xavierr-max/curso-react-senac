import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 1. npm i react-router-dom (TERMINAL)
// 2. permite o roteamento
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
