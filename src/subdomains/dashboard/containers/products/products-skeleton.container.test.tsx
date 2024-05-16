import { render, screen } from '@testing-library/react';

import { ProductsContainerSkeleton } from './products-skeleton.container';

describe('<ProductsContainerSkeleton>', () => {
  describe('Render', () => {
    it('should render a section element', () => {
      render(<ProductsContainerSkeleton />);

      const section = screen.getByRole('region', {
        name: /loading products/i,
      });

      expect(section).toBeInTheDocument();
    });

    it('should render the skeleton components', () => {
      render(<ProductsContainerSkeleton />);

      const skeletons = screen.getAllByRole('alert');

      expect(skeletons).toHaveLength(3);
    });
  });
});
