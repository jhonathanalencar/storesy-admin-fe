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
  return (
    <DashboardLayout>
      <Suspense fallback={<ProductsContainerSkeleton />}>
        <ProductsContainerLoader
          page={searchParams.page}
          limit={searchParams.limit}
        />
      </Suspense>
    </DashboardLayout>
  );
}
