import { render, screen } from '@testing-library/react';

import { DashboardInterface } from './dashboard.interface';

describe('<DashboardInterface>', () => {
  describe('Render', () => {
    it('should render a section element', () => {
      render(<DashboardInterface />);

      const section = screen.getByRole('region', {
        name: /dashboard welcome/i,
      });

      expect(section).toBeInTheDocument();
    });

    it('should render a h3 element', () => {
      render(<DashboardInterface />);

      const title = screen.getByRole('heading', {
        level: 3,
        name: /welcome to storesy admin/i,
      });

      expect(title).toBeInTheDocument();
    });

    it('should render a p element', () => {
      render(<DashboardInterface />);

      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toBeInTheDocument();
    });
  });
});
