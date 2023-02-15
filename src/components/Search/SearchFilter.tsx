import { DebounceInput } from 'react-debounce-input';
import { MagnifyingGlassIcon } from '../Icons/Icons';

type Props = {
  searchTerm: string;
  // eslint-disable-next-line no-unused-vars
  setSearchTerm: (serchTerm: string) => void;
};
export default function SearchFilter({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="mb-2 min-w-0 flex-1">
      <div className="md:max-w-sm">
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon />
          </div>

          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            value={searchTerm}
            onChange={(evt) => setSearchTerm(evt.target.value)}
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-gray-300 pl-9 pr-12 text-navy-400 placeholder:text-navy-300 focus:border-ptBlue-500 focus:ring-ptBlue-500 sm:text-sm"
            placeholder="Search name or NPI…"
          />
          <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center pl-3">
            <MagnifyingGlassIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
