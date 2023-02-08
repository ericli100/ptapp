import { TabBadgePropsType } from './models/tabBadgePropsType';

export default function TabBadge({ isActive, count }: TabBadgePropsType) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <span
      className={classNames(
        isActive
          ? 'bg-ptRoyal-100 text-ptRoyal-500'
          : 'bg-navy-50 text-navy-400',
        'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
      )}
    >
      {count}
    </span>
  );
}
