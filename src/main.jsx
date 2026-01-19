import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Mouse+Memoirs&display=swap');


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)