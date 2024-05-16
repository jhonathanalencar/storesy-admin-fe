import { Suspense } from 'react';

import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsContainerLoader } from './products-loader.container';
import { ProductsContainerSkeleton } from './products-skeleton.container';

export function ProductsContainer() {
  return (
    <DashboardLayout>
      <Suspense fallback={<ProductsContainerSkeleton />}>
        <ProductsContainerLoader />
      </Suspense>
    </DashboardLayout>
  );
}
