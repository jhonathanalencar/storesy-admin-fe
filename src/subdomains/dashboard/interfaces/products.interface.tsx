'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  SearchIcon,
} from 'lucide-react';

import type { TProduct } from '../types';

import { Checkbox } from '@shared/components/checkbox.component';
import { DropdownMenuOptions } from '../components/dropdown-menu-options.component';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface ProductsInterfaceProps {
  products: TProduct[] | undefined;
}

export function ProductsInterface({ products }: ProductsInterfaceProps) {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const page = parseInt(searchParams.get('page') ?? '1');
  const limit = parseInt(searchParams.get('limit') ?? '10');
  const totalPages = Math.ceil(18 / limit);

  const isDisabled = products === undefined || products.length === 0;
  const isAllSelected = selectedProductIds.length === products?.length;

  function handleOnCheckedChange(productId: string) {
    if (selectedProductIds.includes(productId)) {
      setSelectedProductIds((prev) => prev.filter((id) => id !== productId));
    } else {
      setSelectedProductIds((prev) => [productId, ...prev]);
    }
  }

  function handleSelectAll(state: boolean) {
    if (products === undefined) return;
    if (state === true) {
      setSelectedProductIds(products.map((product) => product.productId));
    } else {
      setSelectedProductIds([]);
    }
  }

  const isFirstPage = page === 1;
  const isLastPage = page + 1 > totalPages;

  function createUrl(pathname: string, page?: number) {
    const searchParams = new URLSearchParams();
    if (page && page > 1) {
      searchParams.append('page', String(page));
    }
    return `${pathname}?${searchParams.toString()}`;
  }

  return (
    <section
      aria-labelledby="product-management-section-heading"
      className="mx-auto w-full max-w-7xl p-2 pb-10 md:p-4 md:pb-10"
    >
      <h2 id="product-management-section-heading" className="text-xl font-bold">
        Products
      </h2>
      <div className="my-5 flex w-fit items-center gap-2 rounded-md border border-zinc-700 p-2 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950">
        <label htmlFor="search-textbox" className="sr-only">
          Search products
        </label>
        <SearchIcon className="h-4 w-4 text-green-400" />
        <input
          id="search-textbox"
          type="text"
          name="search"
          aria-label="Search"
          placeholder="Search..."
          autoComplete="name"
          disabled={isDisabled}
          className="h-6 w-48 rounded bg-transparent text-sm text-zinc-200 outline-none placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-70"
        />
      </div>
      <div
        role="region"
        aria-label="Products table"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={0}
        className="overflow-x-auto rounded border border-zinc-800 px-2 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      >
        <div className="flex h-10 items-center justify-end p-2">
          {selectedProductIds.length > 0 ? (
            <div className="flex items-center gap-4">
              <button
                type="button"
                disabled={isDisabled}
                className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:text-zinc-300 disabled:hover:no-underline"
              >
                Release products
              </button>
              <button
                type="button"
                disabled={isDisabled}
                className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:text-zinc-300 disabled:hover:no-underline"
              >
                Delete products
              </button>
              <span className="text-sm font-medium">
                {selectedProductIds.length} selected
              </span>
            </div>
          ) : null}
        </div>
        <table className="w-full min-w-[42rem] border-collapse">
          <caption className="sr-only">Current Products</caption>
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="p-2 text-left text-sm">
                <Checkbox
                  id="select all"
                  labelText="Select all products"
                  disabled={isDisabled}
                  onCheckedChange={handleSelectAll}
                  checked={isAllSelected}
                  className="disabled:cursor-not-allowed disabled:opacity-70"
                />
              </th>
              <th className="h-10 p-2 text-left text-sm"></th>
              <th className="h-10 p-2 text-left text-sm">Name</th>
              <th className="h-10 p-2 text-left text-sm">Price</th>
              <th className="h-10 p-2 text-left text-sm">Quantity</th>
              <th className="h-10 p-2 text-left text-sm">Discount</th>
              <th className="whitespace-nowrap p-2 text-left text-sm">
                Release Date
              </th>
              <th className="min-w-[80px]"></th>
            </tr>
          </thead>
          <tbody>
            {products !== undefined
              ? products.map((product) => {
                  return (
                    <tr
                      key={product.productId}
                      className="h-[4.25rem] border-b border-zinc-800 bg-zinc-950 hover:bg-white/5"
                    >
                      <td className="p-2 text-sm font-medium text-zinc-300">
                        <Checkbox
                          id={`checkbox-${product.slug}`}
                          labelText={`Select ${product.name}`}
                          checked={selectedProductIds.includes(
                            product.productId
                          )}
                          onCheckedChange={() =>
                            handleOnCheckedChange(product.productId)
                          }
                        />
                      </td>
                      <td className="p-2 text-sm font-medium text-zinc-300">
                        <div className="h-12 w-12 rounded-full bg-zinc-700">
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={48}
                            height={48}
                            sizes="48x48"
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="w-full p-2 text-sm font-medium text-zinc-300">
                        <h3 className="line-clamp-1">{product.name}</h3>
                      </td>
                      <td className="whitespace-nowrap p-2 text-left text-sm font-medium text-zinc-300">
                        {Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(product.price)}
                      </td>
                      <td className="p-2 text-left text-sm font-medium text-zinc-300">
                        {product.quantity}
                      </td>
                      <td className="p-2 text-left text-sm font-medium text-zinc-300">
                        <span
                          data-active={product.active}
                          className="rounded-full bg-green-400 px-2 py-1 data-[active=false]:bg-red-500 data-[active=true]:bg-green-500 data-[active=false]:text-red-950 data-[active=true]:text-green-950"
                        >
                          {product.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="p-2 text-left text-sm font-medium text-zinc-300">
                        {Intl.DateTimeFormat('en-US', {
                          dateStyle: 'medium',
                        }).format(new Date(product.releasedDate))}
                      </td>
                      <td className="p-2 text-zinc-200">
                        <div className="flex justify-end">
                          <DropdownMenuOptions productName={product.name} />
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        {products === undefined || products.length === 0 ? (
          <p className="my-10 text-center text-lg font-semibold text-zinc-300">
            Sorry, no products available.
          </p>
        ) : null}
      </div>

      <div className="flex items-center justify-end">
        <span>Page 1 of {totalPages}</span>
        <div className="flex items-center gap-2">
          {isFirstPage ? (
            <span aria-disabled>
              <ChevronsLeftIcon focusable={false} aria-hidden />
            </span>
          ) : (
            <Link
              href={createUrl(pathname, 1)}
              aria-label="Go to first page, page 1"
            >
              <ChevronsLeftIcon />
            </Link>
          )}

          {isFirstPage ? (
            <span aria-disabled>
              <ChevronLeftIcon focusable={false} aria-hidden />
            </span>
          ) : (
            <Link
              href={createUrl(pathname, page - 1)}
              aria-label={`Go to previous page, page ${page - 1}`}
            >
              <ChevronLeftIcon />
            </Link>
          )}

          {isLastPage ? (
            <span aria-disabled>
              <ChevronRightIcon focusable={false} aria-hidden />
            </span>
          ) : (
            <Link
              href={createUrl(pathname, page + 1)}
              aria-label={`Go to next page, page ${page + 1}`}
            >
              <ChevronRightIcon />
            </Link>
          )}

          {isLastPage ? (
            <span aria-disabled>
              <ChevronsRightIcon focusable={false} aria-hidden />
            </span>
          ) : (
            <Link
              href={createUrl(pathname, totalPages)}
              aria-label={`Go to last page, page ${totalPages}`}
            >
              <ChevronsRightIcon />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
