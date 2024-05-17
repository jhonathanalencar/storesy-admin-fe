import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react';

function createUrl(pathname: string, query: string | null, page?: number) {
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append('query', query);
  }
  if (page) {
    searchParams.append('page', String(page));
  }
  return `${pathname}?${searchParams.toString()}`;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const query = useSearchParams().get('query');

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage + 1 > totalPages;

  return (
    <div className="flex items-center justify-end gap-6 py-4">
      <span className="text-sm font-medium text-zinc-500 md:text-base">
        Page {currentPage} of {totalPages}
      </span>
      <div role="navigation" className="flex items-center gap-2">
        {isFirstPage ? (
          <span
            aria-disabled
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 opacity-90 ring-1 ring-inset ring-zinc-700"
          >
            <ChevronsLeftIcon
              focusable={false}
              aria-hidden
              className="h-4 w-4 text-zinc-500"
            />
          </span>
        ) : (
          <Link
            href={createUrl(pathname, query, 1)}
            aria-label="Go to first page, page 1"
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 ring-1 ring-inset ring-zinc-700 transition-colors hover:bg-zinc-900"
          >
            <ChevronsLeftIcon className="h-4 w-4 text-zinc-100" />
          </Link>
        )}

        {isFirstPage ? (
          <span
            aria-disabled
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 opacity-90 ring-1 ring-inset ring-zinc-700"
          >
            <ChevronLeftIcon
              focusable={false}
              aria-hidden
              className="h-4 w-4 text-zinc-500"
            />
          </span>
        ) : (
          <Link
            href={createUrl(pathname, query, currentPage - 1)}
            aria-label={`Go to previous page, page ${currentPage - 1}`}
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 ring-1 ring-inset ring-zinc-700 transition-colors hover:bg-zinc-900"
          >
            <ChevronLeftIcon className="h-4 w-4 text-zinc-100" />
          </Link>
        )}

        {isLastPage ? (
          <span
            aria-disabled
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 opacity-90 ring-1 ring-inset ring-zinc-700"
          >
            <ChevronRightIcon
              focusable={false}
              aria-hidden
              className="h-4 w-4 text-zinc-500"
            />
          </span>
        ) : (
          <Link
            href={createUrl(pathname, query, currentPage + 1)}
            aria-label={`Go to next page, page ${currentPage + 1}`}
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 ring-1 ring-inset ring-zinc-700 transition-colors hover:bg-zinc-900"
          >
            <ChevronRightIcon className="h-4 w-4 text-zinc-100" />
          </Link>
        )}

        {isLastPage ? (
          <span
            aria-disabled
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 opacity-90 ring-1 ring-inset ring-zinc-700"
          >
            <ChevronsRightIcon
              focusable={false}
              aria-hidden
              className="h-4 w-4 text-zinc-500"
            />
          </span>
        ) : (
          <Link
            href={createUrl(pathname, query, totalPages)}
            aria-label={`Go to last page, page ${totalPages}`}
            className="h-7 w-7 rounded bg-zinc-800 p-1.5 ring-1 ring-inset ring-zinc-700 transition-colors hover:bg-zinc-900"
          >
            <ChevronsRightIcon className="h-4 w-4 text-zinc-100" />
          </Link>
        )}
      </div>
    </div>
  );
}
