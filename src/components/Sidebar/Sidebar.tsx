import SidebarLogo from './SidebarLogo';
import SidebarNavigation from './SidebarNavigation';

function Sidebar() {
  return (
    <div id="navSidebar">
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-[#14233C] pt-5 pb-4">
          <SidebarLogo />
          <SidebarNavigation />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
