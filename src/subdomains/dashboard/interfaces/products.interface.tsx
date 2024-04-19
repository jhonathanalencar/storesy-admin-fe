import { EllipsisIcon } from 'lucide-react';

export function ProductsInterface() {
  return (
    <section
      aria-label="Product management"
      className="mx-auto w-full max-w-7xl p-2 md:p-4"
    >
      <h2>Products</h2>
      <input type="text" placeholder="Search" />
      <div className="overflow-x-auto rounded border border-zinc-800 px-2 pt-3">
        <table className="w-full min-w-[42rem] border-collapse">
          <caption className="sr-only">Current Products</caption>
          <thead className="border-b border-zinc-800 bg-zinc-950">
            <tr>
              <th className="p-2 text-left text-sm">
                <input type="checkbox" />
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
                <input type="checkbox" />
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
                  <button className="flex h-8 w-8 items-center justify-center rounded border border-zinc-700 hover:bg-zinc-800">
                    <EllipsisIcon />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="h-[4.25rem] border-b border-zinc-800 bg-zinc-950">
              <td className="p-2 text-sm font-medium text-zinc-300">
                <input type="checkbox" />
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
                  <button className="inline-flex h-8 w-8 items-center justify-center rounded border border-zinc-700 hover:bg-zinc-800">
                    <EllipsisIcon />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
