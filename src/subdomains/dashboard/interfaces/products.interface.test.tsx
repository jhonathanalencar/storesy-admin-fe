import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { TProduct } from '../types';

import { ProductsInterface } from './products.interface';

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

describe('<ProductsInterface>', () => {
  describe('Render', () => {
    it('should render a section element', () => {
      render(<ProductsInterface products={mockProducts} />);

      const section = screen.getByRole('region', {
        name: 'Products',
      });

      expect(section).toBeInTheDocument();
    });

    it('should render the "Products" title', () => {
      render(<ProductsInterface products={mockProducts} />);

      const title = screen.getByRole('heading', {
        name: /products/i,
      });

      expect(title).toBeInTheDocument();
    });

    it('should render a search input', () => {
      render(<ProductsInterface products={mockProducts} />);

      const searchInput = screen.getByRole('textbox', {
        name: /search/i,
      });

      expect(searchInput).toBeInTheDocument();
    });

    it('should render the actions header that displays the number of selected products and options to release or delete them when at least one product is selected', async () => {
      render(<ProductsInterface products={mockProducts} />);

      const checkbox = screen.getByRole('checkbox', {
        name: /select product 1/i,
      });

      await waitFor(async () => {
        await userEvent.click(checkbox);
        const releaseButton = screen.getByRole('button', {
          name: /release products/i,
        });
        expect(releaseButton).toBeInTheDocument();
      });

      const deleteButton = screen.getByRole('button', {
        name: /delete products/i,
      });
      const selectedProducts = screen.getByText(/1 selected/i);

      expect(deleteButton).toBeInTheDocument();
      expect(selectedProducts).toBeInTheDocument();
    });

    it('should render a table that displays the product data', async () => {
      window.ResizeObserver = jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
      }));

      render(<ProductsInterface products={mockProducts} />);

      const table = screen.getByRole('table');
      const checkbox = screen.getByRole('checkbox', {
        name: /select product 1/i,
      });
      const name = screen.getByRole('heading', {
        name: /product 1/i,
      });
      const price = screen.getByText(/\$20.00/i);
      const quantity = screen.getByText(/10/i);
      const discount = screen.getByText(/active/i);
      const releaseDate = screen.getByText(/May 15, 2024/i);
      const dropdownMenuButton = screen.getByRole('button', {
        name: /product 1 options/i,
      });
      await waitFor(async () => {
        await userEvent.click(dropdownMenuButton);
      });
      const dropdownMenu = await screen.findByRole('menu');

      expect(table).toBeInTheDocument();
      expect(checkbox).toBeInTheDocument();
      expect(name).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(quantity).toBeInTheDocument();
      expect(discount).toBeInTheDocument();
      expect(releaseDate).toBeInTheDocument();
      expect(dropdownMenuButton).toBeInTheDocument();
      expect(dropdownMenu).toBeInTheDocument();
      expect(
        within(dropdownMenu).getByRole('menuitem', { name: /edit/i })
      ).toBeInTheDocument();
      expect(
        within(dropdownMenu).getByRole('menuitem', { name: /delete/i })
      ).toBeInTheDocument();
      expect(
        within(dropdownMenu).getByRole('menuitem', { name: /release/i })
      ).toBeInTheDocument();
    });
  });
});
