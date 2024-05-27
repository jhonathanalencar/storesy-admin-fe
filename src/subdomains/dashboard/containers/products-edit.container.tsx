import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { getCategories, getDiscounts, getProduct } from '../queries';
import { getSession } from '@shared/libs/get-session.lib';

import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsEditInterface } from '../interfaces/products-edit.interface';
import { Skeleton } from '../components/skeleton.component';

interface ProductsEditContainerLoaderProps {
  productId: string;
}

export async function ProductsEditContainerLoader({
  productId,
}: ProductsEditContainerLoaderProps) {
  const session = await getSession();
  if (!session || !session.user) {
    redirect(`/auth/login?redirect_to=/dashboard/products/${productId}/edit`);
  }
  try {
    const [product, categories, discounts] = await Promise.all([
      getProduct({ productId }),
      getCategories(),
      getDiscounts(),
    ]);

    return (
      <ProductsEditInterface
        product={product}
        categories={categories}
        discounts={discounts?.discounts}
      />
    );
  } catch (error) {
    console.log(error);
    return (
      <p className="mt-10 text-center text-xl font-medium text-zinc-200 md:text-2xl">
        Something went wrong
      </p>
    );
  }
}

function ProductsEditContainerSkeleton() {
  return (
    <section
      aria-label="Loading product edit"
      className="mx-auto w-full max-w-7xl p-2 md:p-4"
    >
      <Skeleton className="h-[708px]" />
    </section>
  );
}

interface ProductsEditContainerProps {
  params: {
    productId: string;
  };
}

export function ProductsEditContainer({ params }: ProductsEditContainerProps) {
  return (
    <DashboardLayout>
      <Suspense fallback={<ProductsEditContainerSkeleton />}>
        <ProductsEditContainerLoader productId={params.productId} />
      </Suspense>
    </DashboardLayout>
  );
}
