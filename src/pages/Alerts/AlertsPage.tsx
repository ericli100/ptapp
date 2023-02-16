import { useCallback, useState } from 'react';
import IndexPageHeader from '../../components/Pages/IndexPageHeader';
import AlertsTable from '../../components/Alerts/AlertsTable';

import TabsFilter from '../../components/FilterableTable/TabsFilter';
import SearchFilter from '../../components/Search/SearchFilter';
import AddFiltersModal from '../../components/FilterableTable/AddFiltersModal';
import AlertTypesDropDown from '../../components/FilterableTable/AlertTypesDropDown';

export default function AlertsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const resetSearchTerm = useCallback(() => {
    setSearchTerm('');
  }, []);
  return (
    <section className="">
      <div className="mx-auto max-w-6xl px-4  pt-7 lg:px-8">
        <IndexPageHeader />
        <div className="my-10">
          <div>
            <TabsFilter />
            <div className="mb-6 justify-between lg:flex">
              <SearchFilter
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                resetSearchTerm={resetSearchTerm}
              />
              <div className="flex gap-x-3">
                <AddFiltersModal />
                <AlertTypesDropDown />
              </div>
            </div>
            <AlertsTable searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </section>
  );
}
