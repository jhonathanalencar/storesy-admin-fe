import { render, screen } from '@testing-library/react';

import { DashboardHeader } from './dashboard-header.component';

const mockSession = {
  user: {
    name: 'Alice',
    email: 'alice@storesy.com',
  },
};
const mockGetSession = jest.fn(() => mockSession);
jest.mock('../../../../shared/libs/get-session.lib', () => ({
  getSession: () => mockGetSession(),
}));
jest.mock('../../actions', () => ({
  signOutAction: jest.fn(),
}));

async function setup() {
  const Result = await DashboardHeader();
  return render(Result);
}

describe('<DashboardHeader>', () => {
  describe('Render', () => {
    it('should render a header element', async () => {
      await setup();

      const header = screen.getByRole('banner');

      expect(header).toBeInTheDocument();
    });

    it('should render the logo', async () => {
      await setup();

      const logo = screen.getByRole('heading', {
        level: 1,
        name: /storesy admin/i,
      });

      expect(logo).toBeInTheDocument();
    });

    it('should render the user information', async () => {
      await setup();

      const userName = screen.getByRole('strong', {
        name: /username/i,
      });
      const userEmail = screen.getByRole('group', {
        name: /user email/i,
      });
      const userProfilePicture = screen.getByRole('img', {
        name: mockSession.user.name,
      });

      expect(userName).toBeInTheDocument();
      expect(userName).toHaveTextContent('Alice');
      expect(userEmail).toBeInTheDocument();
      expect(userEmail).toHaveTextContent('alice@storesy.com');
      expect(userProfilePicture).toBeInTheDocument();
    });

    it('should render the navigation bar', async () => {
      await setup();

      const nav = screen.getByRole('navigation');

      expect(nav).toBeInTheDocument();
    });

    it('should render the navigation bar with links to products, categories, discounts and users', async () => {
      await setup();

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
