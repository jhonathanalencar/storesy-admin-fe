import { DashboardContainer } from './containers/dashboard.container';
import { ProductsEditContainer } from './containers/products-edit.container';
import { ProductsContainer } from './containers/products/products.container';

export const dashboardRoutes = {
  DASHBOARD: DashboardContainer,
  PRODUCTS: ProductsContainer,
  PRODUCTS_EDIT: ProductsEditContainer,
};
