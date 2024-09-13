import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Canvas>
        <App />
      </Canvas>
    </BrowserRouter>
  </StrictMode>
);
