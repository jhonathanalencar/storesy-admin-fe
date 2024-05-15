import { Suspense } from 'react';
import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';
import { getProducts } from '../queries';

import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsInterface } from '../interfaces/products.interface';
import { Skeleton } from '../components/skeleton.component';

async function ProductsContainerLoader() {
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

function ProductsContainerSkeleton() {
  return (
    <section
      aria-label="Loading products"
      className="mx-auto h-full w-full max-w-7xl p-2 md:p-4"
    >
      <Skeleton className="h-7 w-[88px]" />
      <Skeleton className="my-5 h-[42px] w-[234px] rounded-md" />
      <div className="h-[760px] w-full rounded py-3">
        <Skeleton />
      </div>
    </section>
  );
}

export function ProductsContainer() {
  return (
    <DashboardLayout>
      <Suspense fallback={<ProductsContainerSkeleton />}>
        <ProductsContainerLoader />
      </Suspense>
    </DashboardLayout>
  );
}
