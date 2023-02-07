/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import type { TableProps } from './tableProps';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from './Icons';

function Table({ columns, data }: TableProps) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="min-w-full overflow-hidden overflow-x-auto shadow sm:rounded-lg">
        <table
          {...getTableProps()}
          className="min-w-full text-sm text-gray-700"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="bg-blue-100 py-6 px-6 text-left font-semibold"
                  >
                    {column.render('Header')}

                    {/* TODO: Extract this into a SortedIcon component */}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <ChevronDownIcon />
                        ) : (
                          <ChevronUpIcon />
                        )
                      ) : (
                        ''
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="border-t px-6 py-6"
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="lg:mx-auto lg:max-w-6xl">
        <div className="mt-6 flex items-center justify-between border-t border-gray-200">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-navy-500 hover:border-gray-300 hover:text-navy-700"
          >
            <ArrowLeftIcon /> Previous
          </button>

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-navy-500 hover:border-gray-300 hover:text-navy-700"
          >
            Next <ArrowRightIcon />
          </button>
        </div>
      </div>
    </>
  );
}

function PaginatedTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        name: 'status',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'ID Number',
        accessor: 'identifier',
      },
      {
        Header: 'Type',
        accessor: 'type',
      },
      {
        Header: 'Source',
        accessor: 'source',
      },
      {
        Header: 'Result',
        accessor: 'result',
        name: 'result',
      },
      {
        Header: 'Created',
        accessor: 'date',
      },
    ],
    []
  );
  const data = React.useMemo(
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

  return <Table columns={columns} data={data} />;
}

export default PaginatedTable;
