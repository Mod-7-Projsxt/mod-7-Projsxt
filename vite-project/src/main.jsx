// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountryProvider from './context/countriesProvider.jsx'

createRoot(document.getElementById('root')).render(
  <CountryProvider>
    <App />
  </CountryProvider>

)
