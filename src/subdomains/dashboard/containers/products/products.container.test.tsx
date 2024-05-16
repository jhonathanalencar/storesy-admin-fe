import { render, screen } from '@testing-library/react';

import type { TProduct } from '../../types';

import { ProductsContainer } from './products.container';
import { ProductsInterface } from '../../interfaces/products.interface';

jest.mock('../../../../shared/libs/get-session.lib');
jest.mock('../../components/header/dashboard-header.component', () => ({
  DashboardHeader: jest.fn(() => <header>Dashboard Header</header>),
}));
const mockProducts: TProduct[] = [
  {
    productId: '1',
    name: 'Product 1',
    slug: 'product-1',
    description: 'Product 1 description',
    price: 20,
    categories: ['Category'],
    imageUrl: 'https://images.com/photo-1',
    quantity: 10,
    releasedDate: '2024-05-15T10:00:00.000Z',
    discountPercent: 30,
    active: true,
    rateAmount: 2,
    totalScore: 9,
  },
];
const mockProductsInterface = jest.mocked(
  <ProductsInterface products={mockProducts} />
);
jest.mock('./products-loader.container', () => ({
  ProductsContainerLoader: jest.fn(() => mockProductsInterface),
}));

describe('<ProductsContainer>', () => {
  describe('Render', () => {
    it('should render a main element', () => {
      render(<ProductsContainer />);

      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });

    it('should render a header element', () => {
      render(<ProductsContainer />);

      const header = screen.getByRole('banner');

      expect(header).toBeInTheDocument();
    });

    it('should render the "products" title', () => {
      render(<ProductsContainer />);

      const title = screen.getByRole('heading', {
        name: /products/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
