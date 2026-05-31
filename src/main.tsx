import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import emailjs from '@emailjs/browser';
import App from './App';
import './index.css';
import '@mantine/core/styles.css';

// Initialize EmailJS with your public key
emailjs.init('qHehRJQ1tw8WNhGRo');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        defaultRadius: 'md',
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);