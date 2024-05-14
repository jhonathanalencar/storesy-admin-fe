import { render, screen } from '@testing-library/react';

import { DashboardLayout } from './dashboard.layout';

jest.mock(
  '../../subdomains/dashboard/components/header/dashboard-header.component',
  () => ({
    DashboardHeader: jest.fn(() => <header>Dashboard Header</header>),
  })
);

describe('<DashboardLayout>', () => {
  describe('Render', () => {
    it('should render a main element', () => {
      const children = <h1>Children</h1>;

      render(<DashboardLayout>{children}</DashboardLayout>);

      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });

    it('should render the children prop correctly', () => {
      const children = <h1>Children</h1>;

      render(<DashboardLayout>{children}</DashboardLayout>);

      const text = screen.getByRole('heading', {
        level: 1,
        name: /children/i,
      });

      expect(text).toBeInTheDocument();
    });

    it('should render a horizontal line separator', () => {
      const children = <h1>Children</h1>;

      render(<DashboardLayout>{children}</DashboardLayout>);

      const separator = screen.getByRole('separator');

      expect(separator).toBeInTheDocument();
    });
  });
});
