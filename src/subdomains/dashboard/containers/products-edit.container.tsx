import { getCategories, getDiscounts, getProduct } from '../queries';

import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsEditInterface } from '../interfaces/products-edit.interface';

interface ProductsEditContainerProps {
  params: {
    productId: string;
  };
}

export async function ProductsEditContainer({
  params,
}: ProductsEditContainerProps) {
  const [product, categories, discounts] = await Promise.all([
    getProduct(params),
    getCategories(),
    getDiscounts(),
  ]);

  return (
    <DashboardLayout>
      <ProductsEditInterface
        product={product}
        categories={categories}
        discounts={discounts?.discounts}
      />
    </DashboardLayout>
  );
}
