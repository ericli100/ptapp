import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
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
  } = envConfiguration;

  const redirectUri = window.location.origin;

  const onRedirectCallback = (
    appState: AppState | undefined,
    // eslint-disable-next-line no-unused-vars
    user: User | undefined
  ) => {
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
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigate;
