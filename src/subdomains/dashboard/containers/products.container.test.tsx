import { render, screen } from '@testing-library/react';

import { ProductsContainer } from './products.container';

jest.mock('../../../shared/libs/get-session.lib');
jest.mock('../components/header/dashboard-header.component', () => ({
  DashboardHeader: jest.fn(() => <header>Dashboard Header</header>),
}));

async function setup() {
  const Result = await ProductsContainer();
  return render(Result);
}

describe('<ProductsContainer>', () => {
  describe('Render', () => {
    it('should render a main element', async () => {
      await setup();

      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });

    it('should render a header element', async () => {
      await setup();

      const header = screen.getByRole('banner');

      expect(header).toBeInTheDocument();
    });

    it('should render the "products" title', async () => {
      await setup();

      const title = screen.getByRole('heading', {
        name: /products/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
