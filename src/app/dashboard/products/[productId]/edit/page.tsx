import { dashboardRoutes } from '@subdomains/dashboard/routes';

interface ProductsEditPageProps {
  params: {
    productId: string;
  };
}

export default function ProductsEditPage({ params }: ProductsEditPageProps) {
  return <dashboardRoutes.PRODUCTS_EDIT params={params} />;
}
