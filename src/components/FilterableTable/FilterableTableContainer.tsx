import FilterTabs from './FilterTabs';
import PaginatedTable from './PaginatedTable';

export default function FilterableTableContainer() {
  return (
    <div className="my-10">
      <FilterTabs />
      <div className="">
        <PaginatedTable />
      </div>
    </div>
  );
}
