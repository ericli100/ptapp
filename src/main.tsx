import { RouterProvider } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';

import './index.css';
import './fontawesome';

const gtmStagingId = 'GTM-MKG6L3V';
const tagManagerArgs = {
  gtmId: gtmStagingId,
  dataLayerName: 'dataLayer',
};

// Available args: https://github.com/alinemorelli/react-gtm

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={Router} />
  // </React.StrictMode>
);
