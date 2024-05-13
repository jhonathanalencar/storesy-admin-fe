import { render, screen } from '@testing-library/react';

import { DashboardContainer } from './dashboard.container';

describe('<DashboardContainer>', () => {
  describe('Render', () => {
    it('should render a main element', () => {
      render(<DashboardContainer />);

      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });

    it('should render a header element', () => {
      render(<DashboardContainer />);

      const header = screen.getByRole('banner');

      expect(header).toBeInTheDocument();
    });

    it('should render the welcome title', () => {
      render(<DashboardContainer />);

      const title = screen.getByRole('heading', {
        name: /welcome to storesy admin/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
