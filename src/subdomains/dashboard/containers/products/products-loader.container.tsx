import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';
import { getCategories, getDiscounts, getProducts } from '../../queries';

import { ProductsInterface } from '../../interfaces/products.interface';

interface ProductsContainerLoaderProps {
  page: number;
  limit: number;
  query?: string;
}

export async function ProductsContainerLoader({
  page,
  limit,
  query = '',
}: ProductsContainerLoaderProps) {
  const session = await getSession();
  if (!session || !session.user) {
    redirect('/auth/login?redirect_to=/dashboard/products');
  }
  try {
    const [data, categories, discounts] = await Promise.all([
      getProducts({ page, query, limit }),
      getCategories(),
      getDiscounts(),
    ]);
    const totalPages = data?.total ? Math.ceil(data.total / limit) : 0;

    return (
      <ProductsInterface
        products={data?.products}
        categories={categories}
        discounts={discounts?.discounts.filter((discount) => discount.active)}
        currentPage={page}
        totalPages={totalPages}
      />
    );
  } catch (error) {
    console.error(error);
    return (
      <p className="mt-10 text-center text-xl font-medium text-zinc-200 md:text-2xl">
        Something went wrong
      </p>
    );
  }
}
