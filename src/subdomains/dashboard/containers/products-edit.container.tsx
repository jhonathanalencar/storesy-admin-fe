import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsEditInterface } from '../interfaces/products-edit.interface';

export function ProductsEditContainer() {
  return (
    <DashboardLayout>
      <ProductsEditInterface />
    </DashboardLayout>
  );
}
