import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ComponentType } from 'react';
import Loader from '../../Navigation/Loader';

function AuthenticationGuard({
  component,
}: {
  component: ComponentType<unknown>;
}) {
  function showLoader() {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }
  const Component = withAuthenticationRequired(component, {
    onRedirecting: showLoader,
  });

  return <Component />;
}

export default AuthenticationGuard;
