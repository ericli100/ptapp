import SidebarNavigationItem from './SidebarNavigationItem';

function SidebarNavigation() {
  return (
    <nav
      className="mt-5 flex flex-1 flex-col divide-y divide-ptRoyal-700 overflow-y-auto"
      aria-label="Sidebar"
    >
      <div className="space-y-1 px-2">
        <SidebarNavigationItem label="One" href="/one" />
        <SidebarNavigationItem label="Two" href="/two" />
        <SidebarNavigationItem label="Three" href="/three" />
        <SidebarNavigationItem label="Four" href="/four" />
        <SidebarNavigationItem label="Five" href="/five" />
      </div>
      <div className="mt-6 pt-6">Hello</div>
      <SidebarNavigationItem label="Six" href="/six" />
      <SidebarNavigationItem label="Seven" href="/seven" />
    </nav>
  );
}

export default SidebarNavigation;
