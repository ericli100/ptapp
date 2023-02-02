import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AlertsPage from '../Pages/AlertsPage';
import Sidebar from '../Sidebar/Sidebar';

export default function PageContainer() {
  return (
    <main>
      <div className="min-h-full">
        <Sidebar />
        <div id="content-container" className="flex flex-1 flex-col lg:pl-64">
          <Header />
          <AlertsPage />
          <Footer />
        </div>
      </div>
    </main>
  );
}
