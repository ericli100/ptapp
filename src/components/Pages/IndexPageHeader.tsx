import PageHeaderBadge from './IndexPageHeaderBadge';

export default function IndexPageHeader() {
  return (
    <div className="flex items-center">
      <div className="items-center">
        <h1 className="text-4xl font-semibold text-navy-600">
          Alerts
          <span className="badge blue my-2 inline-block flex-shrink-0 rounded-full px-2 py-0.5 align-middle text-xs font-medium">
            <PageHeaderBadge />
          </span>
        </h1>
        <p className="mt-2 text-navy-400">
          Review and manage monitor alerts for all providers.
        </p>
      </div>
    </div>
  );
}
