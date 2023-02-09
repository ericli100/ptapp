import HeaderAccountNavigation from './HeaderAccountNavigation';
import HeaderTitle from './HeaderTitle';
import MobileNavigation from '../Sidebar/MobileNavigation';

export default function Header() {
  return (
    <header
      id="Header"
      className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-b lg:border-gray-200"
    >
      <MobileNavigation />
      <div className="flex flex-1 items-center justify-between px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <HeaderTitle />
        <HeaderAccountNavigation />
      </div>
    </header>
  );
}
