import { createBrowserRouter } from 'react-router-dom';
import AlertsPage from './pages/Alerts/AlertsPage';
import AuthenticationGuard from './components/Auth/AuthenticationGuard';

import ErrorPage from './pages/Errors/ErrorPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import PopulationPage from './pages/Population/PopulationPage';
import ReportsPage from './pages/Reports/ReportsPage';
import App from './App';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AuthenticationGuard component={DashboardPage} />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/dashboard',
        element: <AuthenticationGuard component={DashboardPage} />,
      },
      {
        path: '/alerts',
        element: <AuthenticationGuard component={AlertsPage} />,
      },
      {
        path: '/population',
        element: <AuthenticationGuard component={PopulationPage} />,
      },
      {
        path: '/reports',
        element: <AuthenticationGuard component={ReportsPage} />,
      },
    ],
  },
]);

export default Router;
