import { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from './Icons';

export type Alert = {
  id: number;
  name: string;
  href: string;
  identifier: string;
  type: string;
  source: string;
  result: string;
  status: string;
  statusStyle: string;
  date: string;
};

function Table({
  data,
  columns,
}: {
  data: Alert[];
  columns: ColumnDef<Alert>[];
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: false,
  });

  return (
    <>
      <div className="min-w-full overflow-hidden overflow-x-auto border-0 shadow sm:rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="bg-blue-100 py-6 px-6 text-left font-semibold"
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id} className="border-t px-6 py-6">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-8 mb-4 text-sm lg:mx-auto lg:max-w-6xl">
        <nav className="flex items-center justify-between border-t border-gray-200">
          <div className="-mt-px flex w-0 flex-1">
            <button
              type="button"
              className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-navy-500 hover:border-gray-300 hover:text-navy-700"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ArrowLeftIcon /> Previous
            </button>
          </div>
          <div className="hidden md:-mt-px md:flex">
            <span className="flex items-center gap-1 pt-4 text-navy-500">
              <div>Page</div>
              <strong>
                {table.getState().pagination.pageIndex + 1} of{' '}
                {table.getPageCount()}
              </strong>
            </span>
          </div>
          <div className="-mt-px flex w-0 flex-1 justify-end">
            <button
              type="button"
              className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-navy-500 hover:border-gray-300 hover:text-navy-700"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next <ArrowRightIcon />
            </button>
          </div>
        </nav>
      </div>
      {/* <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </>
  );
}

export default function PaginatedTable() {
  const columns = useMemo<ColumnDef<Alert>[]>(
    () => [
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Name',
        accessorKey: 'name',
        cell: (info) => info.getValue(),
      },
      {
        header: 'ID Number',
        accessorKey: 'identifier',
        cell: (info) => info.getValue(),
      },

      {
        header: 'Type',
        accessorKey: 'type',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Source',
        accessorKey: 'source',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Result',
        accessorKey: 'result',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Created',
        accessorKey: 'date',
        cell: (info) => info.getValue(),
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        id: 1,
        name: 'Molly Sanders',
        href: '/alerts/1',
        identifier: '80586107732',
        type: 'Exclusions',
        source: 'Pennsylvania',
        result: 'Suspected Match',
        status: 'new',
        statusStyle: 'red badge',
        date: '10/28/22',
      },
      {
        id: 2,
        name: 'Arlene McCoy',
        href: '/alerts/1',
        identifier: '99363580286',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Match',
        status: 'new',
        statusStyle: 'red badge',
        date: '05/27/22',
      },
      {
        id: 3,
        name: 'Darlene Robertson',
        href: '/alerts/1',
        identifier: '23160270420',
        type: 'Exclusions',
        source: 'Pennsylvania',
        result: 'Suspected Match',
        status: 'reviewing',
        statusStyle: 'yellow badge',
        date: '12/04/22',
      },
      {
        id: 4,
        name: 'Jerome Bell',
        href: '/alerts/1',
        identifier: '34538610398',
        type: 'Exclusions',
        source: 'North Carolina',
        result: 'Suspected Match',
        status: 'reviewing',
        statusStyle: 'yellow badge',
        date: '07/18/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 1,
        name: 'Molly Sanders',
        href: '/alerts/1',
        identifier: '80586107732',
        type: 'Exclusions',
        source: 'Pennsylvania',
        result: 'Suspected Match',
        status: 'new',
        statusStyle: 'red badge',
        date: '10/28/22',
      },
      {
        id: 2,
        name: 'Arlene McCoy',
        href: '/alerts/1',
        identifier: '99363580286',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Match',
        status: 'new',
        statusStyle: 'red badge',
        date: '05/27/22',
      },
      {
        id: 3,
        name: 'Darlene Robertson',
        href: '/alerts/1',
        identifier: '23160270420',
        type: 'Exclusions',
        source: 'Pennsylvania',
        result: 'Suspected Match',
        status: 'reviewing',
        statusStyle: 'yellow badge',
        date: '12/04/22',
      },
      {
        id: 4,
        name: 'Jerome Bell',
        href: '/alerts/1',
        identifier: '34538610398',
        type: 'Exclusions',
        source: 'North Carolina',
        result: 'Suspected Match',
        status: 'reviewing',
        statusStyle: 'yellow badge',
        date: '07/18/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
      {
        id: 5,
        name: 'Leslie Alexander',
        href: '/alerts/1',
        identifier: '32906978022',
        type: 'NPI Validation',
        source: 'NPPES',
        result: 'Suspected Match',
        status: 'resolved',
        statusStyle: 'green badge',
        date: '05/19/22',
      },
    ],
    []
  );

  return (
    <>
      <Table
        {...{
          data,
          columns,
        }}
      />
      <hr />
    </>
  );
}
