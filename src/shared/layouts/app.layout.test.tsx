import { render, screen } from '@testing-library/react';

import { AppLayout } from './app.layout';

describe('<AppLayout>', () => {
  describe('Render', () => {
    it('should render a main element', () => {
      render(<AppLayout>children</AppLayout>);

      const mainElement = screen.getByRole('main');

      expect(mainElement).toBeInTheDocument();
    });

    it('should render the children prop correctly', () => {
      const children = <h1>children</h1>;
      render(<AppLayout>{children}</AppLayout>);

      const text = screen.getByRole('heading', {
        name: /children/i,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
