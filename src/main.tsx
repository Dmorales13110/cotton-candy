import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import './index.css';
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      theme={{
        fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        defaultRadius: 'md',
        components: {
          Button: {
            defaultProps: {
              style: { fontWeight: 600 },
            },
          },
        },
      }}
    >
      <App />
    </MantineProvider>
  </StrictMode>
);