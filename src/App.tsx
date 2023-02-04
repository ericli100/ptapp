import { useAuth0 } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import LogoutButton from './components/Auth/LogoutButton';
import AlertsPage from './components/Pages/AlertsPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/Page/ErrorPage';

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AlertsPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/dashboard',
      element: <AlertsPage />,
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);
  return (
    <main>
      <div className="min-h-full">
        <Sidebar />
        <div id="content-container" className="flex flex-1 flex-col lg:pl-64">
          <Header />
          <RouterProvider router={router} />
          <Footer />
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}

export default App;
