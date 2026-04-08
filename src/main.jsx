import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// BrowserRouter is a global app wrapper.
// It enables client-side routing for everything rendered inside App.
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Keep global wrappers at the entry point so App stays focused on UI structure. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
