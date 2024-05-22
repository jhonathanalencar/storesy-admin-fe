import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsEditInterface } from '../interfaces/products-edit.interface';

import { getProduct } from '../queries';

interface ProductsEditContainerProps {
  params: {
    productId: string;
  };
}

export async function ProductsEditContainer({
  params,
}: ProductsEditContainerProps) {
  const product = await getProduct(params);
  console.log(product);

  return (
    <DashboardLayout>
      <ProductsEditInterface />
    </DashboardLayout>
  );
}
