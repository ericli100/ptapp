import TabsFilter from './TabsFilter';
import PaginatedTable from './PaginatedTable';
import SearchFilter from './SearchFilter';
import AlertTypesDropDown from './AlertTypesDropDown';
import AddFiltersModal from './AddFiltersModal';

export default function FilterableTableContainer() {
  return (
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
        <PaginatedTable />
      </div>
    </div>
  );
}
