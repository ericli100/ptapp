import PageHeader from '../Page/PageHeader';
import FilterableTableContainer from '../FilterableTable/FilterableTableContainer';

export default function AlertsPage() {
  return (
    <section className="">
      <div className="mx-auto max-w-6xl pt-7 lg:px-8">
        <PageHeader />
        <FilterableTableContainer />
      </div>
    </section>
  );
}
