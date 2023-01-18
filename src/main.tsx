import React from 'react';
import ReactDOM from 'react-dom/client';
import TagManager from 'react-gtm-module';
import App from './App';
import './index.css';

// Available args: https://github.com/alinemorelli/react-gtm
const gtmStagingId = 'GTM-MKG6L3V';
const tagManagerArgs = {
  gtmId: gtmStagingId,
  dataLayerName: 'dataLayer',
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
