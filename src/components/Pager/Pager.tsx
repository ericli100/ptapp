import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons/Icons';

type PaperProps = {
  pageNumber: number;
  pageCount: number;
  pageSize: number;
  total: number;
  rowCount: number;
  canPreviousPage: boolean;
  canNextPage: boolean;
  // eslint-disable-next-line no-unused-vars
  goPage: (page: number) => void;
};
export default function Pager({
  pageNumber,
  pageCount,
  pageSize,
  total,
  rowCount,
  canPreviousPage,
  canNextPage,
  goPage,
}: PaperProps) {
  const handlePageClick = (data: any) => {
    const { selected } = data;
    goPage(selected);
  };

  const begin = (pageNumber - 1) * pageSize + 1;
  const end = (pageNumber - 1) * pageSize + rowCount;

  return total === -1 ? null : (
    <div className="mt-8 mb-4 text-sm lg:mx-auto lg:max-w-6xl">
      <nav className="flex items-center justify-between border-t border-gray-200">
        <div className="-mt-px flex w-0 flex-1">
          <span className="flex items-center gap-1 pt-4 text-navy-500">
            Showing {begin} - {end} of {total} results
          </span>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {pageNumber > 0 && (
            <ReactPaginate
              previousLabel={<ArrowLeftIcon />}
              nextLabel={<ArrowRightIcon />}
              breakLabel="..."
              breakClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
              breakLinkClassName="page-link"
              forcePage={pageNumber - 1}
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName="flex items-center justify-between border-t border-gray-200"
              pageClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
              previousClassName={`${
                !canPreviousPage ? 'text-opacity-50 disabled' : ''
              } inline-flex items-center border-t-2 border-transparent pt-4  text-sm font-medium text-navy-500 ${
                canPreviousPage
                  ? 'hover:border-gray-300 hover:text-navy-700'
                  : ''
              }`}
              previousLinkClassName={`${
                !canPreviousPage ? 'cursor-default' : ''
              }`}
              nextClassName={`${
                !canNextPage ? 'text-opacity-50 disabled' : ''
              } inline-flex items-center border-t-2 border-transparent pt-4  text-sm font-medium text-navy-500 ${
                canNextPage ? 'hover:border-gray-300 hover:text-navy-700' : ''
              }`}
              nextLinkClassName={`${!canNextPage ? 'cursor-default' : ''}`}
              activeClassName="inline-flex items-center border-t-2 border-ptBlue-500 px-4 pt-4 text-sm font-medium text-ptBlue-600"
            />
          )}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <span className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-navy-500">
            Results Per Page: {pageSize}
          </span>
        </div>
      </nav>
    </div>
  );
}
