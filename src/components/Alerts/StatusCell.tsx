import clsx from 'clsx';
import type { StatusCellPropsType } from './models/statusCellPropsType';

export default function StatusCell({ status }: StatusCellPropsType) {
  const badgeClassName = clsx(
    status === 'Needs Review' && 'bg-red-200 text-red-800 font-medium',
    status === 'Under Review' && 'bg-yellow-200 text-yellow-800 font-medium',
    status === 'Resolved' && 'bg-green-200 text-green-700 font-medium',
    'inline-block flex-shrink-0 rounded-full bg-gray-100 px-2 py-0.5 my-2 text-xs font-medium capitalize text-center'
  );
  return <span className={badgeClassName}>{status}</span>;
}
