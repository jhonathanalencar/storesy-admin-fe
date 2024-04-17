import { render, screen } from '@testing-library/react';

import { DashboardHeader } from './dashboard-header.component';

describe('<DashboardHeader>', () => {
  describe('Render', () => {
    it('should render a header element', () => {
      render(<DashboardHeader />);

      const header = screen.getByRole('banner');

      expect(header).toBeInTheDocument();
    });

    it('should render the logo', () => {
      render(<DashboardHeader />);

      const logo = screen.getByRole('heading', {
        level: 1,
        name: /storesy admin/i,
      });

      expect(logo).toBeInTheDocument();
    });

    it('should render the user information', () => {
      render(<DashboardHeader />);

      const userName = screen.getByRole('strong', {
        name: /username/i,
      });
      const userEmail = screen.getByRole('group', {
        name: /user email/i,
      });
      const userProfilePicture = screen.getByRole('img', {
        name: /user profile/i,
      });

      expect(userName).toBeInTheDocument();
      expect(userName).toHaveTextContent('Alice');
      expect(userEmail).toBeInTheDocument();
      expect(userEmail).toHaveTextContent('alice@storesy.com');
      expect(userProfilePicture).toBeInTheDocument();
    });

    it('should render the navigation bar', () => {
      render(<DashboardHeader />);

      const nav = screen.getByRole('navigation');

      expect(nav).toBeInTheDocument();
    });

    it('should render the navigation bar with links to products, categories, discounts and users', () => {
      render(<DashboardHeader />);

      const productsLink = screen.getByRole('link', {
        name: /products/i,
      });
      const categoriesLink = screen.getByRole('link', {
        name: /categories/i,
      });
      const discountsLink = screen.getByRole('link', {
        name: /discounts/i,
      });
      const usersLink = screen.getByRole('link', {
        name: /users/i,
      });

      expect(productsLink).toBeInTheDocument();
      expect(categoriesLink).toBeInTheDocument();
      expect(discountsLink).toBeInTheDocument();
      expect(usersLink).toBeInTheDocument();
    });
  });
});
