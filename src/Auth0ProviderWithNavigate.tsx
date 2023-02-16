import { AppState, Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import envConfiguration from './services/envValues';

type Props = {
  children: React.ReactNode;
};
function Auth0ProviderWithNavigate({ children }: Props) {
  const navigate = useNavigate();

  const {
    oAuthDomain: domain,
    oAuthClientId: clientId,
    oAuthConnection: connection,
    oAuthAudience: audience,
  } = envConfiguration;

  const redirectUri = window.location.origin;

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        connection,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
