import IndexPageHeader from '../../components/Pages/IndexPageHeader';
import FilterableTableContainer from '../../components/FilterableTable/FilterableTableContainer';

export default function AlertsPage() {
  return (
    <section className="">
      <div className="mx-auto max-w-6xl pt-7 lg:px-8">
        <IndexPageHeader />
        <FilterableTableContainer />
      </div>
    </section>
  );
}
