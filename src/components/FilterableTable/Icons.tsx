import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export function ChevronUpIcon() {
  const icon = 'fa-regular fa-chevron-up' as IconProp;
  return (
    <FontAwesomeIcon
      icon={icon}
      className="ml-2 hidden h-3 w-3 flex-shrink-0 text-navy-400 lg:inline-block"
    />
  );
}

export function ChevronDownIcon() {
  const icon = 'fa-regular fa-chevron-down' as IconProp;
  return (
    <FontAwesomeIcon
      icon={icon}
      className="ml-2 hidden h-3 w-3 flex-shrink-0 text-navy-400 lg:inline-block"
    />
  );
}

export function ArrowLeftIcon() {
  const icon = 'fa-light fa-arrow-left-long' as IconProp;
  return <FontAwesomeIcon icon={icon} className="mr-3" />;
}

export function ArrowRightIcon() {
  const icon = 'fa-light fa-arrow-right-long' as IconProp;
  return <FontAwesomeIcon icon={icon} className="ml-3" />;
}
