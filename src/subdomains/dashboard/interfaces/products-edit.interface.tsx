'use client';

import type { TCategory, TDiscount, TProduct } from '../types';
import { updateProductAction } from '../actions';

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
    if (!product) return;
    const description = data.description;
    const summary =
      description.length < 100
        ? description
        : `${description.substring(0, 100)}...`;
    const categories = data.categories.map((category) => category.value);
    const discountId = data.discount.value;
    const result = await updateProductAction({
      productId: product.productId,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      imageUrl: data.imageUrl,
      description,
      summary,
      categories,
      discountId,
    });
    if (result?.error) {
      alert(result.error.message);
      return;
    }
    alert('Product updated');
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
