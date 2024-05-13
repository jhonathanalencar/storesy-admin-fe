import { SearchIcon } from 'lucide-react';

import { Checkbox } from '@shared/components/checkbox.component';
import { DropdownMenu } from '@shared/components/dropdown-menu.component';

export function ProductsInterface() {
  return (
    <section
      aria-label="Product management"
      className="mx-auto w-full max-w-7xl p-2 md:p-4"
    >
      <h2 className="text-xl font-bold">Products</h2>
      <div className="my-5 flex w-fit items-center gap-2 rounded-md border border-zinc-700 p-2 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950">
        <SearchIcon className="h-4 w-4 text-green-400" />
        <input
          type="text"
          aria-label="Search"
          placeholder="Search..."
          className="h-6 w-48 rounded bg-transparent text-sm text-zinc-200 outline-none placeholder:text-sm"
        />
      </div>
      <div className="overflow-x-auto rounded border border-zinc-800 px-2 py-3">
        <div className="flex h-10 items-center justify-between p-2">
          <button className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline">
            Deselect all
          </button>
          <div className="flex items-center gap-4">
            <button className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline">
              Disable products
            </button>
            <button className="text-sm text-zinc-300 hover:text-zinc-200 hover:underline">
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
                <Checkbox id="select all" labelText="Select all products" />
              </th>
              <th className="p-2 text-left text-sm"></th>
              <th className="p-2 text-left text-sm">Name</th>
              <th className="p-2 text-left text-sm">Price</th>
              <th className="p-2 text-left text-sm">Quantity</th>
              <th className="p-2 text-left text-sm">Discount</th>
              <th className="whitespace-nowrap p-2 text-left text-sm">
                Release Date
              </th>
              <th className="min-w-[80px]"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[4.25rem] border-b border-zinc-800 bg-zinc-950">
              <td className="p-2 text-sm font-medium text-zinc-300">
                <Checkbox
                  id="checkbox-product-1"
                  labelText="Select product 1"
                />
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                <div className="h-12 w-12 rounded-full bg-zinc-700" />
              </td>
              <td className="w-full p-2 text-sm font-medium text-zinc-300">
                <h3 className="line-clamp-1">
                  product 1 Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Repellat officiis, deserunt odio sunt repellendus
                  necessitatibus dicta quam aperiam at aliquid. Esse distinctio
                  officia dolorem repudiandae et. Quis eligendi, inventore
                  tempore quas sed commodi et dolorem vero eaque nesciunt eos
                  debitis voluptatem repellat quae totam quam! Quidem possimus
                  culpa rem dignissimos?
                </h3>
              </td>
              <td className="whitespace-nowrap p-2 text-sm font-medium text-zinc-300">
                $ 20
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">15</td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                <span className="rounded-full bg-green-400 px-2 py-1 font-semibold text-zinc-800">
                  Enabled
                </span>
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                12/04/2024
              </td>
              <td className="p-2 text-zinc-200">
                <div className="flex justify-end">
                  <DropdownMenu productName="Product 1" />
                </div>
              </td>
            </tr>
            <tr className="h-[4.25rem] border-b border-zinc-800 bg-zinc-950">
              <td className="p-2 text-sm font-medium text-zinc-300">
                <Checkbox
                  id="checkbox-product-2"
                  labelText="Select product 2"
                />
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                <div className="h-12 w-12 rounded-full bg-zinc-700" />
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                product 2
              </td>
              <td className="whitespace-nowrap p-2 text-sm font-medium text-zinc-300">
                $ 42,99
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">07</td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                <span className="rounded-full bg-red-400 px-2 py-1 font-semibold text-zinc-800">
                  Disabled
                </span>
              </td>
              <td className="p-2 text-sm font-medium text-zinc-300">
                not released
              </td>
              <td className="p-2 text-zinc-200">
                <div className="flex justify-end">
                  <DropdownMenu productName="Product 2" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
