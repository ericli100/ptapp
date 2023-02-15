import { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import {
  PaginationState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';
import { Alert, AlertSortByString } from '../../models/alert';

import {
  // ChevronDownIcon,
  // ChevronUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from './Icons';
import useAlertServices, {
  convertSortingStateToSortParams,
} from '../../services/alertServices';

export default function AlertsTable() {
  const { getAlerts: getAlertsFromService } = useAlertServices();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [pageCount, setPageCount] = useState(-1);

  const columns = useMemo<ColumnDef<Alert>[]>(
    () => [
      {
        header: 'Status',
        accessorKey: 'reviewStatus',
        cell: (info) => info.getValue(),
      },
      {
        header: 'Name',
        accessorKey: 'name',
        cell: (info) => info.getValue(),
      },
      {
        header: 'ID Number',
        accessorKey: 'id',
        cell: (info) => info.getValue(),
      },

      {
        header: 'Type',
        accessorKey: 'alertType',
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
        accessorKey: 'creationDate',
        cell: (info) => format(info.row.original.creationDate, 'MM/dd/yyyy'),
      },
    ],
    []
  );

  const defaultData = useMemo(() => [], []);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 25,
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  type AlertsRetrievalConfig = {
    paginationState: PaginationState;
    sortingState: SortingState;
    triggeredBy: 'Loading' | 'Paging' | 'Sorting' | 'Searching';
  };

  const initialConfig: AlertsRetrievalConfig = {
    paginationState: { pageIndex: 0, pageSize: 25 },
    sortingState: [],
    triggeredBy: 'Loading',
  };

  const [alertsRetrievalConfig, setAlertsRetrievalConfig] =
    useState<AlertsRetrievalConfig>(initialConfig);

  // if paging has changed
  useEffect(() => {
    setAlertsRetrievalConfig((config) => {
      return {
        ...config,
        paginationState: { pageIndex, pageSize },
        triggeredBy: 'Paging',
      };
    });
  }, [pageIndex, pageSize]);

  // if sorting has changed
  useEffect(() => {
    setAlertsRetrievalConfig((config) => {
      return {
        ...config,
        sortingState: sorting,
        triggeredBy: 'Sorting',
        paginationState: {
          ...config.paginationState,
          pageIndex: 0,
        },
      };
    });
  }, [sorting]);

  // Handle AlertRetrievalConfig Change
  useEffect(() => {
    // load alerts using config
    async function loadAlerts() {
      let sortBy: AlertSortByString | undefined;
      let desc: boolean | undefined;
      if (alertsRetrievalConfig.sortingState) {
        const sortByParams = convertSortingStateToSortParams(
          alertsRetrievalConfig.sortingState
        );
        sortBy = sortByParams.sortBy;
        desc = sortByParams.desc;
      }

      let page: number = -1;
      let size: number = -1;

      if (alertsRetrievalConfig.paginationState) {
        page = alertsRetrievalConfig.paginationState.pageIndex;
        size = alertsRetrievalConfig.paginationState.pageSize;
      }

      return getAlertsFromService(page, size, sortBy, desc);
    }

    async function loadPagedAlerts() {
      const alertsInfo = await loadAlerts();
      setAlerts(alertsInfo.alerts);
      setPageCount(alertsInfo.pageCount);
      setPagination({ pageIndex: alertsInfo.page, pageSize: alertsInfo.size });
    }

    async function loadSortedAlerts() {
      const alertsInfo = await loadAlerts();
      setAlerts(alertsInfo.alerts);
      setPageCount(alertsInfo.pageCount);
      setPagination((p) => ({
        pageIndex: 0,
        pageSize: p.pageSize,
      }));
    }

    switch (alertsRetrievalConfig.triggeredBy) {
      case 'Loading':
      case 'Paging':
        loadPagedAlerts();
        break;
      case 'Sorting':
        loadSortedAlerts();
        break;
      default:
        throw new Error(
          `Invalid triggedBy value of ${alertsRetrievalConfig.triggeredBy}`
        );
    }
  }, [alertsRetrievalConfig, getAlertsFromService]);

  // Alerts Table
  const table = useReactTable({
    data: alerts ?? defaultData,
    columns,
    pageCount,
    state: {
      pagination,
      sorting,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    autoResetPageIndex: false,
    debugTable: true,
  });

  return (
    <>
      <div className="min-w-full overflow-hidden overflow-x-auto border-0 shadow sm:rounded-lg">
        <table className="min-w-full bg-white text-sm text-gray-700">
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
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
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
      <hr />
    </>
  );
}