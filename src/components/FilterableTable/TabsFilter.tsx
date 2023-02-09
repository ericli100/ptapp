import FilterTabBadge from './TabBadge';
import type { TabItemPropsType } from './models/tabItemPropsType';

export default function TabItemPropsTypes() {
  const tabs: TabItemPropsType[] = [
    { name: 'All Alerts', href: '#', count: '77', current: true },
    { name: 'New Alerts', href: '#', count: '13', current: false },
    { name: 'Under Review', href: '#', count: '3', current: false },
    { name: 'Resolved', href: '#', count: '154', current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="mb-2 sm:mb-6 lg:mx-auto lg:max-w-6xl">
      <div className="sm:hidden">
        <label htmlFor="tabs">
          <span className="sr-only">Select a tab</span>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-ptBlue-500 focus:outline-none focus:ring-ptBlue-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current)?.name ?? 'Alerts'}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                type="button"
                key={tab.name}
                className={classNames(
                  tab.current
                    ? 'border-ptBlue-500 font-bold text-ptRoyal-600'
                    : 'border-transparent text-navy-400 hover:border-ptBlue-200 hover:text-navy-700',
                  'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
              >
                {tab.name}
                {tab.count && (
                  <FilterTabBadge isActive={tab.current} count={tab.count} />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
