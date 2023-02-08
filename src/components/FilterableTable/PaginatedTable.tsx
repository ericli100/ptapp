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
    <div className="min-w-full overflow-hidden overflow-x-auto shadow sm:rounded-lg">
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
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          type="button"
          className="rounded border p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="w-16 rounded border p-1"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      {/* <div>{table.getRowModel().rows.length} Rows</div>
      <pre>{JSON.stringify(table.getState().pagination, null, 2)}</pre> */}
    </div>
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
