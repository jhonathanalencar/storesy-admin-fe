import { render, screen } from '@testing-library/react';

import { ProductsContainer } from './products.container';

jest.mock('../components/header/dashboard-header.component', () => ({
  DashboardHeader: jest.fn(() => <header>Dashboard Header</header>),
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
