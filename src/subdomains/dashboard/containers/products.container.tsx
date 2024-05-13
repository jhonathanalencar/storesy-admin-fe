import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsInterface } from '../interfaces/products.interface';

export function ProductsContainer() {
  return (
    <DashboardLayout>
      <ProductsInterface />
    </DashboardLayout>
  );
}
