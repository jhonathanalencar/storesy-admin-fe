import * as Dialog from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import type { TCategory, TDiscount } from '../types';
import { addProductAction } from '../actions';

import { FormInputs, ProductForm } from './product-form.component';

interface CreateProductDialogProps {
  categories: TCategory[] | undefined;
  discounts: TDiscount[] | undefined;
}

export function CreateProductDialog({
  categories,
  discounts,
}: CreateProductDialogProps) {
  async function handleOnSubmit(data: FormInputs) {
    const categories = data.categories.map((category) => category.value);
    const discountId = data.discount.value;
    const result = await addProductAction({ ...data, categories, discountId });
    if (result?.error) {
      alert(result.error.message);
      return;
    }
    alert('Product created');
  }

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
        <ProductForm
          categories={categories}
          discounts={discounts}
          handleOnSubmit={handleOnSubmit}
        />
      </Dialog.Content>
    </Dialog.Portal>
  );
}
