import * as Dialog from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

export function CreateProductDialog() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/80" />
      <Dialog.Content className="fixed bottom-0 left-0 right-0 top-0 mx-auto my-4 w-11/12 max-w-3xl overflow-y-scroll rounded border border-zinc-800 bg-zinc-900 p-2 shadow md:p-4 ">
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-lg font-semibold text-zinc-200">
            Create product
          </Dialog.Title>
          <Dialog.Close asChild>
            <button
              className="rounded-full border border-white/10 bg-black/50 p-2 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              aria-label="Close"
            >
              <XIcon className="h-6 w-6 text-red-500 hover:text-red-600" />
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Description className="mt-1 text-sm text-zinc-400">
          Create a new product here. Click save when you&apos;re done.
        </Dialog.Description>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-zinc-300">
            Name
          </label>
          <input
            id="name"
            name="name"
            defaultValue="Golden Beats Headphones"
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          />
        </fieldset>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label className="font-medium text-zinc-300" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            defaultValue="Beats Studio delivers the perfect blend of design culture, creative culture, and engineering coming together."
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          />
        </fieldset>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label htmlFor="price" className="font-medium text-zinc-300">
            Price
          </label>
          <input
            id="price"
            type="number"
            defaultValue="30"
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          />
        </fieldset>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label htmlFor="categories" className="font-medium text-zinc-300">
            Categories
          </label>
          <select
            id="categories"
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            <option value="headphone">Headphones</option>
          </select>
        </fieldset>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label htmlFor="image-url" className="font-medium text-zinc-300">
            Image URL
          </label>
          <input
            id="image-url"
            type="url"
            defaultValue="https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          />
        </fieldset>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label htmlFor="quantity" className="font-medium text-zinc-300">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            defaultValue={10}
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          />
        </fieldset>
        <fieldset className="mt-3 flex flex-col gap-1">
          <label htmlFor="discount" className="font-medium text-zinc-300">
            Discount
          </label>
          <select
            id="discount"
            className="h-10 rounded bg-zinc-950 px-2 font-normal text-zinc-500 outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
          >
            <option value="10">10</option>
          </select>
        </fieldset>
        <div className="mt-6 flex justify-end">
          <button className="rounded bg-green-400 px-6 py-3 text-sm font-bold uppercase text-zinc-900 outline-none hover:bg-green-500 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900">
            Save
          </button>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
