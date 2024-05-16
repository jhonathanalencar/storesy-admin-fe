import { dashboardRoutes } from '@subdomains/dashboard/routes';

interface ProductsPageProps {
  searchParams: {
    page?: string;
    limit?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  return <dashboardRoutes.PRODUCTS searchParams={searchParams} />;
}
