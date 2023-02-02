import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Auth/LoginButton';
import LogoutButton from './components/Auth/LogoutButton';
import Profile from './components/Auth/Profile';
import HelloWorld from './components/HelloWorld';
import PageContainer from './components/Page/PageContainer';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <PageContainer />
      <div className="mx-auto mt-96 max-w-6xl py-16 px-4 sm:py-24 sm:px-6 lg:flex lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Provider Trust App Starter with Tailwind UI Example
          </h2>
          <h2>Environment Var = {window.REACT_APP_API_URL} PROD-117</h2>
          <p className="mt-5 text-xl text-gray-500">
            This starter includes linting, tailwind ui and prettier code
            formatting, as well as air bnb rules.
          </p>

          {isLoading && <div>Loading ...</div>}
          {!isLoading && !isAuthenticated && (
            <>
              <p className="mt-5 text-xl text-gray-500">
                Log in to see the super secret component.
              </p>
              <LoginButton />
            </>
          )}
          {!isLoading && isAuthenticated && (
            <>
              <LogoutButton />
              <HelloWorld variant="gray" />
              <Profile />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
