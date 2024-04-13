import { render, screen } from '@testing-library/react';

import { HomeContainer } from './home.container';

describe('<HomeContainer>', () => {
  describe('Render', () => {
    it('should rend a main element', () => {
      render(<HomeContainer />);

      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });

    it('should render the title Storesy Admin', () => {
      render(<HomeContainer />);

      const title = screen.getByRole('heading', {
        name: /storesy admin/i,
      });

      expect(title).toBeInTheDocument();
    });

    it('should render a paragraph of the Storesy marketplace', () => {
      render(<HomeContainer />);

      const paragraph = screen.getByRole('paragraph');

      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent(/Welcome to Storesy/i);
    });

    it('should render a login button', () => {
      render(<HomeContainer />);

      const link = screen.getByRole('link', {
        name: /login/i,
      });

      expect(link).toBeInTheDocument();
    });
  });
});
