import { render, screen } from '@testing-library/react';

import type { TProduct } from '../../types';

import { ProductsContainerLoader } from './products-loader.container';

const mockSession = {
  user: {
    name: 'Alice',
    email: 'alice@email.com',
  },
};
const mockGetSession = jest.fn();
jest.mock('../../../../shared/libs/get-session.lib', () => ({
  getSession: () => mockGetSession(),
}));
const mockRedirect = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
  redirect: (path: string) => mockRedirect(path),
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
const mockGetProducts = jest.fn();
jest.mock('../../queries', () => ({
  getProducts: () => mockGetProducts(),
}));
jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
jest.mock('../../components/pagination.component', () => ({
  Pagination: jest.fn(),
}));
jest.mock('../../actions', () => ({
  signOutAction: jest.fn(),
}));

async function setup() {
  const Result = await ProductsContainerLoader({ page: 1, limit: 10 });
  return render(Result);
}

describe('<ProductsContainerLoader>', () => {
  describe('Render', () => {
    beforeEach(() => {
      mockGetProducts.mockClear();
    });

    it('should redirect to login page when session or user information is not available', async () => {
      mockGetSession.mockImplementation(() => null);
      await setup();

      expect(mockRedirect).toHaveBeenCalledTimes(1);
      expect(mockRedirect).toHaveBeenCalledWith(
        '/auth/login?redirect_to=/dashboard/products'
      );
    });

    it('should render products interface when session and user information is available', async () => {
      mockGetSession.mockImplementation(() => mockSession);
      mockGetProducts.mockImplementation(() => ({
        total: 10,
        products: mockProducts,
      }));
      await setup();

      const name = screen.getByRole('heading', {
        name: /product 1/i,
      });

      expect(name).toBeInTheDocument();
    });

    it('should render "Sorry, no products available" message if products data is empty', async () => {
      mockGetProducts.mockImplementation(() => undefined);
      await setup();

      const message = screen.getByText(/sorry, no products available/i);

      expect(message).toBeInTheDocument();
    });

    it('should render error message when getProducts function throws an error', async () => {
      mockGetProducts.mockRejectedValue(new Error('Error'));
      await setup();

      const errorMessage = screen.getByText(/something went wrong/i);

      expect(errorMessage).toBeInTheDocument();
      expect(mockGetProducts).toHaveBeenCalledTimes(1);
    });
  });
});
