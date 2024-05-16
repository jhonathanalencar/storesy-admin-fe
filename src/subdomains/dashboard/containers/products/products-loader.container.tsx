import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';
import { getProducts } from '../../queries';

import { ProductsInterface } from '../../interfaces/products.interface';

export async function ProductsContainerLoader() {
  const session = await getSession();
  if (!session || !session.user) {
    redirect('/auth/login?redirect_to=/dashboard/products');
  }

  try {
    const products = await getProducts();

    return <ProductsInterface products={products} />;
  } catch (error) {
    console.error(error);
    return (
      <p className="mt-10 text-center text-xl font-medium text-zinc-200 md:text-2xl">
        Something went wrong
      </p>
    );
  }
}
