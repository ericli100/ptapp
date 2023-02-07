import type { SidebarItem } from './sidebarItem';
import SidebarNavigationItem from './SidebarNavigationItem';

const primaryNavigation: SidebarItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: 'house', current: false },
  { label: 'Alerts', href: '/alerts', icon: 'bell', current: true },
  {
    label: 'Population',
    href: '/population',
    icon: 'user-group',
    current: false,
  },
  {
    label: 'Reports',
    href: '/reports',
    icon: 'file-chart-column',
    current: false,
  },
];

const secondaryNavigation: SidebarItem[] = [
  { label: 'Help', href: '/support', icon: 'question-circle', current: false },
  { label: 'Privacy', href: '/privacy', icon: 'shield-check', current: false },
];

function SidebarNavigation() {
  return (
    <div>
      <nav className="mt-5 flex flex-1 flex-col divide-y divide-ptRoyal-700 overflow-y-auto">
        <div className="space-y-1 px-2">
          {primaryNavigation.map((item) => (
            <SidebarNavigationItem
              label={item.label}
              href={item.href}
              icon={item.icon}
              current={item.current}
              key={item.href}
            />
          ))}
        </div>
        <div className="mt-6 pt-6">
          <div className="space-y-1 px-2">
            {secondaryNavigation.map((item) => (
              <SidebarNavigationItem
                label={item.label}
                href={item.href}
                icon={item.icon}
                current={item.current}
                key={item.href}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SidebarNavigation;
