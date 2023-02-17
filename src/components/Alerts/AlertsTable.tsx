/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
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
  createColumnHelper,
} from '@tanstack/react-table';
import { Alert, AlertSortByString } from '../../models/alert';

import { ChevronDownIcon, ChevronUpIcon } from '../Icons/Icons';
import useAlertServices, {
  convertSortingStateToSortParams,
} from '../../services/alertServices';
import StatusCell from './StatusCell';
import ResultCell from './ResultCell';
import Pager from '../Pager/Pager';

export default function AlertsTable({ searchTerm }: { searchTerm: string }) {
  const { getAlerts: getAlertsFromService } = useAlertServices();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [pageCount, setPageCount] = useState(-1);
  const columnHelper = createColumnHelper<Alert>();
  const columns = useMemo<ColumnDef<Alert, any>[]>(
    () => [
      columnHelper.accessor('reviewStatus', {
        header: 'Status',
        cell: (info) => <StatusCell status={info.getValue()} />,
      }),
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
      columnHelper.accessor('result', {
        header: 'Result',
        cell: (info) => <ResultCell result={info.getValue()} />,
      }),
      {
        header: 'Created',
        accessorKey: 'creationDate',
        cell: (info) => format(info.row.original.creationDate, 'MM/dd/yyyy'),
      },
    ],
    [columnHelper]
  );

  const defaultData = useMemo(() => [], []);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 0,
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

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
    debugTable: false,
  });

  // configuration to retrieve data.
  type AlertsRetrievalConfig = {
    paginationState: PaginationState;
    sortingState: SortingState;
    triggeredBy: 'Loading' | 'Paging' | 'Sorting' | 'Searching';
    filter: string;
  };

  // TODO: EL - reset pagination rows
  const initialConfig: AlertsRetrievalConfig = {
    paginationState: { pageIndex: 0, pageSize: 5 },
    sortingState: [],
    triggeredBy: 'Loading',
    filter: '',
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

  // if searchTerm has changed
  useEffect(() => {
    setAlertsRetrievalConfig((config) => {
      return {
        ...config,
        filter: searchTerm,
        triggeredBy: 'Searching',
      };
    });
  }, [searchTerm]);

  // Handle AlertRetrievalConfig Change
  useEffect(() => {
    // load alerts using config
    async function loadAlerts() {
      let sortBy: AlertSortByString = '';
      let desc: boolean = false;
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

      return getAlertsFromService(
        page,
        size,
        sortBy,
        desc,
        alertsRetrievalConfig.filter
      );
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

    async function loadSearchedAlerts() {
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
      case 'Searching':
        loadSearchedAlerts();
        break;
      default:
        throw new Error(
          `Invalid triggedBy value of ${alertsRetrievalConfig.triggeredBy}`
        );
    }
  }, [alertsRetrievalConfig, getAlertsFromService]);

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
                            asc: <ChevronUpIcon />,
                            desc: <ChevronDownIcon />,
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
      <Pager
        pageIndex={table.getState().pagination.pageIndex + 1}
        pageCount={table.getPageCount()}
        goPrevious={table.previousPage}
        canPrevious={table.getCanPreviousPage()}
        goNext={table.nextPage}
        canNext={table.getCanNextPage()}
        pageSize={table.getState().pagination.pageSize}
        goPage={(idx) =>
          setPagination({
            pageIndex: idx,
            pageSize: table.getState().pagination.pageSize,
          })
        }
      />
      <hr />
    </>
  );
}
