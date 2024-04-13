import { render, screen } from '@testing-library/react';

import { RootInfrastructure } from './root.infrastructure';

describe('<RootInfrastructure>', () => {
  describe('Render', () => {
    it('should render the children prop when it is passed', () => {
      const children = <h1>Children</h1>;

      render(<RootInfrastructure>{children}</RootInfrastructure>);

      const text = screen.getByRole('heading', {
        name: /children/i,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
