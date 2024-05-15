import Image from 'next/image';
import { SearchIcon } from 'lucide-react';

import type { TProduct } from '../types';

import { Checkbox } from '@shared/components/checkbox.component';
import { DropdownMenuOptions } from '../components/dropdown-menu-options.component';

interface ProductsInterfaceProps {
  products: TProduct[] | undefined;
}

export function ProductsInterface({ products }: ProductsInterfaceProps) {
  const isDisabled = products === undefined || products.length === 0;

  return (
    <section
      aria-labelledby="product-management-section-heading"
      className="mx-auto w-full max-w-7xl p-2 md:p-4"
    >
      <h2 id="product-management-section-heading" className="text-xl font-bold">
        Products
      </h2>
      <div className="my-5 flex w-fit items-center gap-2 rounded-md border border-zinc-700 p-2 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950">
        <SearchIcon className="h-4 w-4 text-green-400" />
        <input
          type="text"
          aria-label="Search"
          placeholder="Search..."
          disabled={isDisabled}
          className="h-6 w-48 rounded bg-transparent text-sm text-zinc-200 outline-none placeholder:text-sm disabled:cursor-not-allowed disabled:opacity-70"
        />
      </div>
      <div className="overflow-x-auto rounded border border-zinc-800 px-2 py-3">
        <div className="flex h-10 items-center justify-between p-2">
          <button
            type="button"
            disabled={isDisabled}
            className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:text-zinc-300 disabled:hover:no-underline"
          >
            Deselect all
          </button>
          <div className="flex items-center gap-4">
            <button
              type="button"
              disabled={isDisabled}
              className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:text-zinc-300 disabled:hover:no-underline"
            >
              Disable products
            </button>
            <button
              type="button"
              disabled={isDisabled}
              className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:text-zinc-300 disabled:hover:no-underline"
            >
              Delete products
            </button>
            <span className="text-sm font-medium">2 selected</span>
          </div>
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
    </section>
  );
}
