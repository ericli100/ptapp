export default function FilterTabs() {
  return (
    <div>
      <div className="mb-6 lg:mx-auto lg:max-w-6xl">
        <div className="sm:hidden">
          <label className="sr-only">Select a tab</label>

          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-ptBlue-500 focus:outline-none focus:ring-ptBlue-500 sm:text-sm"
          >
            <option>An option...</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="mb-8 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <a
                href="/#"
                className="flex whitespace-nowrap border-b-2 border-ptBlue-500 py-4 px-1 text-sm font-bold text-ptRoyal-600"
              >
                An Item
                <span className="ml-3 hidden rounded-full bg-ptRoyal-100 py-0.5 px-2.5 text-xs font-medium text-ptRoyal-500 md:inline-block">
                  77
                </span>
              </a>
              <a
                href="/#"
                className="flex whitespace-nowrap border-b-2 border-transparent py-4 px-1 text-sm font-medium text-navy-400 hover:border-ptBlue-200 hover:text-navy-700"
              >
                Another Item
                <span className="ml-3 hidden rounded-full bg-navy-50 py-0.5 px-2.5 text-xs font-medium text-navy-400 md:inline-block">
                  13
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
