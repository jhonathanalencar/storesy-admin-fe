import { FormField } from '../components/form-field.component';
import type { TProduct } from '../types';

interface ProductsEditInterfaceProps {
  product: TProduct | undefined;
}

export function ProductsEditInterface({ product }: ProductsEditInterfaceProps) {
  return (
    <section className="mx-auto w-full max-w-7xl bg-zinc-900 p-2 md:p-4">
      {product !== undefined ? (
        <div>
          <h1>Edit product</h1>
          <form action="">
            <FormField.Root>
              <FormField.Label htmlFor="name">Name</FormField.Label>
              <FormField.Input id="name" type="text" className="h-12" />
            </FormField.Root>
          </form>
        </div>
      ) : null}
      {product === undefined ? (
        <p className="my-10 text-center text-lg font-semibold text-zinc-300">
          Sorry, product not available.
        </p>
      ) : null}
    </section>
  );
}
