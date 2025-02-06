import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import SmoothScrolling from './animations/SmoothScrolling';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <SmoothScrolling> */}
      <App />
    {/* </SmoothScrolling> */}
  </StrictMode>
);