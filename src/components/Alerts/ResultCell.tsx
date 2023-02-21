import clsx from 'clsx';
import type { ResultCellPropsType } from './models/resultCellPropsType';

export default function ResultCell({ result }: ResultCellPropsType) {
  const spanClassName = clsx(
    result === 'Match' && 'text-red-500',
    result === 'Suspected Match' && 'text-red-500',
    result === 'NPI Inactive' && 'text-red-500',
    result === 'NPI Invalid' && 'text-red-500',
    result === 'NPI Not Found' && 'text-red-500',
    result === 'SSDMF Not Found' && 'text-red-500',
    result === 'No Match' && 'text-green-500',
    result === 'NPI Active' && 'text-green-500',
    ''
  );
  return <span className={spanClassName}>{result}</span>;
}
