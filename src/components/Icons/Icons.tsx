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

export function MagnifyingGlassIcon() {
  const icon = 'fa-light fa-magnifying-glass' as IconProp;
  return <FontAwesomeIcon icon={icon} />;
}

export function FilterIcon() {
  const icon = 'fa-light fa-filter fa-sm' as IconProp;
  return (
    <FontAwesomeIcon
      icon={icon}
      className="mr-2 h-4 w-4 text-sm text-navy-400"
    />
  );
}

export function XmarkIcon() {
  const icon = 'fa-light fa-xmark' as IconProp;
  return <FontAwesomeIcon icon={icon} className="mr-1" />;
}

export function CheckIcon() {
  const icon = 'fa-light fa-check' as IconProp;
  return (
    <FontAwesomeIcon
      icon={icon}
      className="relative mr-1 h-4 w-4 text-white "
    />
  );
}
