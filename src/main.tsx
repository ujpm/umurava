import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/font.css';
import './styles/index.css';
import './styles/tailwind.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
