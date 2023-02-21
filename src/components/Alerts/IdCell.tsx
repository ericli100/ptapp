import { useState } from 'react';
import { Popover } from 'react-tiny-popover';
import { IdCellPropsType } from './models/idCellPropsType';

export default function IdCell({ id }: IdCellPropsType) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['right']}
      content={
        <div className="invisible relative rounded-sm bg-gray-600 py-2 px-3 text-xs text-white lg:visible">
          <div className="absolute -left-1 z-10 border-y-8 border-r-8 border-l-0 border-solid border-y-transparent border-r-gray-600" />
          NPI: {id}
        </div>
      }
    >
      <div
        onMouseEnter={() => setIsPopoverOpen(!isPopoverOpen)}
        onMouseLeave={() => setIsPopoverOpen(!isPopoverOpen)}
      >
        {id}
      </div>
    </Popover>
  );
}
