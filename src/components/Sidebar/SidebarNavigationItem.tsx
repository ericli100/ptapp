import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SidebarItem } from './sidebarItem';

function SidebarNavigationItem({ label, href, icon, current }: SidebarItem) {
  const itemClassName = clsx(
    'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-ptRoyal-100 hover:bg-white hover:bg-opacity-10 hover:text-white',
    current === true && 'is-active bg-white bg-opacity-10 text-white'
  );

  // Cast the icon string to iconProp.
  const iconProp = `fa-light fa-${icon}` as IconProp;
  return (
    <Link to={href} className={itemClassName}>
      <FontAwesomeIcon
        icon={iconProp}
        className="mr-4 h-5 w-5 text-ptRoyal-200"
      />
      {label}
    </Link>
  );
}

export default SidebarNavigationItem;
