import { Suspense } from 'react';

import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsContainerLoader } from './products-loader.container';
import { ProductsContainerSkeleton } from './products-skeleton.container';

interface ProductsContainerProps {
  searchParams: {
    page?: string;
    limit?: string;
  };
}

export function ProductsContainer({ searchParams }: ProductsContainerProps) {
  const page = parseInt(searchParams.page ?? '1');
  const limit = parseInt(searchParams.limit ?? '10');

  return (
    <DashboardLayout>
      <Suspense fallback={<ProductsContainerSkeleton />}>
        <ProductsContainerLoader page={page} limit={limit} />
      </Suspense>
    </DashboardLayout>
  );
}
