import { Auth0Provider } from '@auth0/auth0-react';
import TagManager from 'react-gtm-module';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from './components/Auth/UserContextProvider';
import './index.css';

const gtmStagingId = 'GTM-MKG6L3V';
const tagManagerArgs = {
  gtmId: gtmStagingId,
  dataLayerName: 'dataLayer',
};

// Available args: https://github.com/alinemorelli/react-gtm

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="login.dev-providertrust.com"
      clientId="wbXKQZ14WdkNPH8NpbrjiyeQnU7Ed6gj"
      authorizationParams={{
        redirect_uri: window.location.origin,
        connection: 'one-platform-ProviderTrust',
      }}
    >
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);
