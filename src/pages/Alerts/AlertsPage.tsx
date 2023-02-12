import IndexPageHeader from '../../components/Pages/IndexPageHeader';
import FilterableTableContainer from '../../components/FilterableTable/FilterableTableContainer';

import useAlertsApi from '../../api/useAlertsApi';

export default function AlertsPage() {
  const { getAllAlerts } = useAlertsApi();

  async function getAlerts() {
    const result = await getAllAlerts();
    console.log(result?.data);
  }
  return (
    <section className="">
      <button type="button" onClick={getAlerts}>
        Get Alerts
      </button>
      <div className="mx-auto max-w-6xl px-4  pt-7 lg:px-8">
        <IndexPageHeader />
        <FilterableTableContainer />
      </div>
    </section>
  );
}
