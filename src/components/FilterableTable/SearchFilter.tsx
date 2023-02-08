import { MagnifyingGlassIcon } from './Icons';

export default function SearchFilter() {
  return (
    <div className="mb-2 min-w-0 flex-1">
      <div className="md:max-w-sm">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon />
          </div>
          <label htmlFor="search" className="block text-sm font-medium">
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full rounded-md border-gray-300 pl-9 pr-12 text-navy-400 placeholder:text-navy-300 focus:border-ptBlue-500 focus:ring-ptBlue-500 sm:text-sm"
              placeholder="Search alert data..."
            />
          </label>
        </div>
      </div>
    </div>
  );
}
