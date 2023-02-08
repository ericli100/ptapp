import { Auth0Provider } from '@auth0/auth0-react';
import TagManager from 'react-gtm-module';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './components/Auth/UserContextProvider';
import './index.css';
import envConfiguration from './services/envValues';

const gtmStagingId = 'GTM-MKG6L3V';
const tagManagerArgs = {
  gtmId: gtmStagingId,
  dataLayerName: 'dataLayer',
};

// Available args: https://github.com/alinemorelli/react-gtm

TagManager.initialize(tagManagerArgs);

const { oAuthDomain, oAuthClientId, oAuthConnection } = envConfiguration;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={oAuthDomain}
      clientId={oAuthClientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        connection: oAuthConnection,
      }}
    >
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
