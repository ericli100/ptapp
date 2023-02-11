import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { UserContextProvider } from './components/Auth/UserContextProvider';
import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate';
import AppLayout from './pages/AppLayout';

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    // TODO: EL - update NavigationContext
  }, [location]);

  return (
    <Auth0ProviderWithNavigate>
      <UserContextProvider>
        <AppLayout />
      </UserContextProvider>
    </Auth0ProviderWithNavigate>
  );
}

export default App;
