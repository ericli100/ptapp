export type SidebarNavigationItemProps = {
  label: string;
  href: string;
};

function SidebarNavigationItem({ label, href }: SidebarNavigationItemProps) {
  return (
    <a
      href={href}
      className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-ptRoyal-100 hover:bg-white hover:bg-opacity-10 hover:text-white"
    >
      {label}
    </a>
  );
}

export default SidebarNavigationItem;
