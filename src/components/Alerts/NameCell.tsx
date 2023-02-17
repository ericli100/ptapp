import { NameCellPropsType } from './models/nameCellPropsType';

export default function NameCell({ name }: NameCellPropsType) {
  return <span className="w-full max-w-0 whitespace-nowrap">{name}</span>;
}
