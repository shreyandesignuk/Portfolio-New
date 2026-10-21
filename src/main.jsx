import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

const navigationEntry = window.performance.getEntriesByType('navigation')[0];

if (navigationEntry?.type === 'reload') {
  [0, 50, 150, 350].forEach((delay) => {
    window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, delay);
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
