import { useAuth0 } from '@auth0/auth0-react';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import LogoutButton from './components/Auth/LogoutButton';
import AlertsPage from './components/Pages/AlertsPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/Page/ErrorPage';
import DashboardPage from './components/Pages/DashboardPage';
import PopulationPage from './components/Pages/PopulationPage';
import ReportsPage from './components/Pages/ReportsPage';

function AppLayout() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    // TODO: EL - update NavigationContext
  }, [location]);
  return (
    <>
      <Sidebar />
      <div id="content-container" className="flex flex-1 flex-col lg:pl-64">
        <Header />
        <Outlet />
        <Footer />
        <LogoutButton />
      </div>
    </>
  );
}

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <AlertsPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/dashboard',
          element: <DashboardPage />,
        },
        {
          path: '/alerts',
          element: <AlertsPage />,
        },
        {
          path: '/population',
          element: <PopulationPage />,
        },
        {
          path: '/reports',
          element: <ReportsPage />,
        },
      ],
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
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
