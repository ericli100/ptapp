import HeaderAccountNavigation from './HeaderAccountNavigation';
import HeaderTitle from './HeaderTitle';

export default function Header() {
  return (
    <header
      id="Header"
      className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-b lg:border-gray-200"
    >
      <button
        type="button"
        className="border-r border-gray-200 px-4 text-navy-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ptRoyal-500 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
      </button>

      <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <HeaderTitle />
        <HeaderAccountNavigation />
      </div>
    </header>
  );
}
