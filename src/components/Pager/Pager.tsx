import { useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icons/Icons';

type PaperProps = {
  pageIndex: number;
  pageCount: number;
  goPrevious: () => void;
  canPrevious: boolean;
  goNext: () => void;
  canNext: boolean;
  pageSize: number;
  goPage: (page: number) => void;
};
export default function Pager({
  pageIndex,
  pageCount,
  goPrevious,
  canPrevious,
  goNext,
  canNext,
  pageSize,
  goPage,
}: PaperProps) {
  const [offset, setOffset] = useState(0);
  const handlePageClick = (data: any) => {
    console.log('onPageChange', data);
    const { selected } = data;
    goPage(selected);

    // setOffset(Math.ceil(selected * pageSize));
  };

  return (
    <div className="mt-8 mb-4 text-sm lg:mx-auto lg:max-w-6xl">
      <nav className="flex items-center justify-between border-t border-gray-200">
        <div className="-mt-px flex w-0 flex-1">
          <span className="flex items-center gap-1 pt-4 text-navy-500">
            <div>Page</div>
            <strong>
              {pageIndex} of {pageCount}
            </strong>
          </span>
        </div>

        <div className="hidden md:-mt-px md:flex">
          <ReactPaginate
            previousLabel={<ArrowLeftIcon />}
            nextLabel={<ArrowRightIcon />}
            breakLabel="..."
            breakClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
            breakLinkClassName="page-link"
            pageCount={pageCount}
            forcePage={pageIndex - 1}
            pageRangeDisplayed={4}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="flex items-center justify-between border-t border-gray-200"
            pageClassName="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            // pageLinkClassName="page-link"
            previousClassName="inline-flex items-center border-t-2 border-transparent pt-4  text-sm font-medium text-navy-500 hover:border-gray-300 hover:text-navy-700"
            // previousLinkClassName="page-link"
            nextClassName="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-navy-500"
            // nextLinkClassName="page-link"
            activeClassName="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
            // forcePage={currentPage}

            // renderOnZeroPageCount={null}
          />
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
