// External
import React from 'react';
import ReactDOM from 'react-dom/client';

// Internal
import App from './App';

// Styles
import 'styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
