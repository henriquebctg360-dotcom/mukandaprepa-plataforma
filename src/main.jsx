import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { NotasProvider } from './prototipo/NotasDev'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NotasProvider>
        <App />
      </NotasProvider>
    </BrowserRouter>
  </StrictMode>,
)
