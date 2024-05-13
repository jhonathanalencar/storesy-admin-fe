import { act, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ProductsInterface } from './products.interface';

describe('<ProductsInterface>', () => {
  describe('Render', () => {
    it('should render a section element', () => {
      render(<ProductsInterface />);

      const section = screen.getByRole('region', {
        name: /product management/i,
      });

      expect(section).toBeInTheDocument();
    });

    it('should render the "Products" title', () => {
      render(<ProductsInterface />);

      const title = screen.getByRole('heading', {
        name: /products/i,
      });

      expect(title).toBeInTheDocument();
    });

    it('should render a search input', () => {
      render(<ProductsInterface />);

      const searchInput = screen.getByRole('textbox', {
        name: /search/i,
      });

      expect(searchInput).toBeInTheDocument();
    });

    it('should render the actions header that displays the number of selected products and options to disable or delete them', () => {
      render(<ProductsInterface />);

      const disableButton = screen.getByRole('button', {
        name: /disable products/i,
      });
      const deleteButton = screen.getByRole('button', {
        name: /delete products/i,
      });
      const selectedProducts = screen.getByText(/2 selected/i);

      expect(disableButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
      expect(selectedProducts).toBeInTheDocument();
    });

    it('should render a table that displays the product data', async () => {
      window.ResizeObserver = jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
      }));

      render(<ProductsInterface />);

      const table = screen.getByRole('table');
      const checkbox = screen.getByRole('checkbox', {
        name: /select product 1/i,
      });
      const name = screen.getByRole('heading', {
        name: /product 1 lorem ipsum dolor sit amet consectetur adipisicing elit\. repellat officiis, deserunt odio sunt repellendus necessitatibus dicta quam aperiam at aliquid\. esse distinctio officia dolorem repudiandae et\. quis eligendi, inventore tempore quas sed commodi et dolorem vero eaque nesciunt eos debitis voluptatem repellat quae totam quam! quidem possimus culpa rem dignissimos\?/i,
      });
      const price = screen.getByText(/\$ 20/i);
      const quantity = screen.getByText(/15/i);
      const discount = screen.getByText(/enabled/i);
      const releaseDate = screen.getByText(/12\/04\/2024/i);
      const dropdownMenuButton = screen.getByRole('button', {
        name: /product 1 options/i,
      });
      await act(async () => {
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
