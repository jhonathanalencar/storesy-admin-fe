import { render, screen } from '@testing-library/react';

import { HomeInterface } from './home.interface';

describe('<HomeInterface>', () => {
  describe('Render', () => {
    it('should render a h1 element', () => {
      render(<HomeInterface />);

      const headingElement = screen.getByRole('heading', {
        level: 1,
        name: /storesy admin/i,
      });

      expect(headingElement).toBeInTheDocument();
    });

    it('should render a p element', () => {
      render(<HomeInterface />);

      const paragraphElement = screen.getByRole('paragraph');

      expect(paragraphElement).toBeInTheDocument();
    });

    it('should render an anchor with href equals /auth/login', () => {
      render(<HomeInterface />);

      const anchorElement = screen.getByRole('link', {
        name: /login/i,
      });

      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute('href', '/auth/login');
    });
  });
});
