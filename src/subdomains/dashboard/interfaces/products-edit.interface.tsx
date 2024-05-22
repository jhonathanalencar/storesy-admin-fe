'use client';

import type { TCategory, TDiscount, TProduct } from '../types';

import { FormInputs, ProductForm } from '../components/product-form.component';

interface ProductsEditInterfaceProps {
  product: TProduct | undefined;
  categories: TCategory[] | undefined;
  discounts: TDiscount[] | undefined;
}

export function ProductsEditInterface({
  product,
  discounts,
  categories,
}: ProductsEditInterfaceProps) {
  async function handleOnSubmit(data: FormInputs) {
    console.log(data);
  }

  return (
    <section className="mx-auto w-full max-w-7xl bg-zinc-900 p-2 md:p-4">
      {product !== undefined ? (
        <>
          <h1 className="text-lg font-semibold text-zinc-200">Edit product</h1>
          <ProductForm
            product={product}
            categories={categories}
            discounts={discounts}
            handleOnSubmit={handleOnSubmit}
          />
        </>
      ) : null}
      {product === undefined ? (
        <p className="my-10 text-center text-lg font-semibold text-zinc-300">
          Sorry, product not available.
        </p>
      ) : null}
    </section>
  );
}
