import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './components/Auth/AuthProvider.jsx'
import { setLocalStorage } from './utils/localStorage.jsx'
// localStorage.clear();
setLocalStorage();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><App /></AuthProvider>
  </StrictMode>,
)
