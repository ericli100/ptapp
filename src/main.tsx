import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="login.dev-providertrust.com"
      clientId="wbXKQZ14WdkNPH8NpbrjiyeQnU7Ed6gj"
      // clientId="yD4pIgemTGS5M0r9d3Lr7gk7p5tGq9E6"
      authorizationParams={{
        redirect_uri: window.location.origin,
        connection: 'one-platform-ProviderTrust',
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
