// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';
import Sidebar from '../components/Sidebar/Sidebar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function AppLayout() {
  // useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     loginWithRedirect();
  //   }
  // }, [isAuthenticated, isLoading, loginWithRedirect]);

  const { isAuthenticated } = useAuth0();

  // if not authenticated, hide all elements but render outlet, which will trigger auth guard in sub routes.
  if (!isAuthenticated) {
    return <Outlet />;
  }
  return (
    isAuthenticated && (
      <>
        <Sidebar />
        <div id="content-container" className="flex flex-1 flex-col lg:pl-64">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </>
    )
  );
}

export default AppLayout;
