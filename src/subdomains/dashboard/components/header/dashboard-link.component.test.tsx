import { render, screen } from '@testing-library/react';

import { DashboardLink } from './dashboard-link.component';

const mockUsePathname = jest.fn();

jest.mock('next/navigation', () => ({
  usePathname: () => {
    return mockUsePathname();
  },
}));

describe('<DashboardLink>', () => {
  describe('Render', () => {
    beforeEach(() => {
      mockUsePathname.mockClear();
    });

    it('should render a Link component with the provided href and children props', () => {
      const href = '/link-to';
      const children = <h1>Children</h1>;

      render(<DashboardLink href={href}>{children}</DashboardLink>);

      const link = screen.getByRole('link');
      const text = screen.getByRole('heading', {
        level: 1,
        name: /children/i,
      });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(text).toBeInTheDocument();
    });

    it('should apply a background color to the Link component if the current pathname matches the href prop', () => {
      mockUsePathname.mockImplementation(() => '/link-to');

      const href = '/link-to';
      const children = <h1>Children</h1>;

      render(<DashboardLink href={href}>{children}</DashboardLink>);

      const link = screen.getByRole('link', {
        name: /children/i,
      });

      expect(mockUsePathname).toHaveBeenCalled();
      expect(mockUsePathname).toHaveReturnedWith('/link-to');
      expect(link).toHaveClass('bg-zinc-700');
    });

    it('should not apply a background color to the Link component if the current pathname does not match the href prop', () => {
      mockUsePathname.mockImplementation(() => '/link-to-fail');

      const href = '/link-to';
      const children = <h1>Children</h1>;

      render(<DashboardLink href={href}>{children}</DashboardLink>);

      const link = screen.getByRole('link', {
        name: /children/i,
      });

      expect(mockUsePathname).toHaveBeenCalledTimes(1);
      expect(mockUsePathname).toHaveReturnedWith('/link-to-fail');
      expect(link).not.toHaveClass('bg-zinc-700');
    });

    it('should accept additional props that are passed to the Link component', () => {
      const href = '/link-to';
      const children = <h1>Children</h1>;

      render(
        <DashboardLink href={href} title="Home">
          {children}
        </DashboardLink>
      );

      const link = screen.getByRole('link', {
        name: /children/i,
      });

      expect(link).toHaveAttribute('title', 'Home');
    });
  });
});
