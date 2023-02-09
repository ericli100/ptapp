import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';

function Sidebar() {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-grow flex-col overflow-y-auto bg-[#14233C] pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center">
          <SidebarLogo />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <nav className="flex-1 space-y-1 px-2 pb-4">
            <SidebarNavigation />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
