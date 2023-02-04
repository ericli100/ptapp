import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { SidebarItem } from './sidebarItem';

function SidebarNavigationItem({ label, href, icon, current }: SidebarItem) {
  const itemClassName = clsx(
    'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-ptRoyal-100 hover:bg-white hover:bg-opacity-10 hover:text-white',
    current === true && 'is-active bg-white bg-opacity-10 text-white'
  );
  return (
    <a href={href} className={itemClassName}>
      <FontAwesomeIcon
        icon={`fa-light fa-${icon}`}
        className="mr-4 h-5 w-5 text-ptRoyal-200"
      />
      {label}
    </a>
  );
}

export default SidebarNavigationItem;
