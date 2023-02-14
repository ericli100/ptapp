import IndexPageHeader from '../../components/Pages/IndexPageHeader';
import AlertsTable from '../../components/Alerts/AlertsTable';

import TabsFilter from '../../components/FilterableTable/TabsFilter';
import SearchFilter from '../../components/FilterableTable/SearchFilter';
import AddFiltersModal from '../../components/FilterableTable/AddFiltersModal';
import AlertTypesDropDown from '../../components/FilterableTable/AlertTypesDropDown';

// import { Alert } from '../../models/alert';

export default function AlertsPage() {
  return (
    <section className="">
      <div className="mx-auto max-w-6xl px-4  pt-7 lg:px-8">
        <IndexPageHeader />
        <div className="my-10">
          <div>
            <TabsFilter />
            <div className="mb-6 justify-between lg:flex">
              <SearchFilter />
              <div className="flex gap-x-3">
                <AddFiltersModal />
                <AlertTypesDropDown />
              </div>
            </div>
            <AlertsTable />
          </div>
        </div>
      </div>
    </section>
  );
}
