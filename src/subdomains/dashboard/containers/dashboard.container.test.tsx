import { render, screen } from '@testing-library/react';

import { DashboardContainer } from './dashboard.container';

jest.mock('../../../shared/libs/get-session.lib');
jest.mock('../components/header/dashboard-header.component', () => ({
  DashboardHeader: jest.fn(() => <header>Dashboard Header</header>),
}));

async function setup() {
  const Result = await DashboardContainer();
  return render(Result);
}

describe('<DashboardContainer>', () => {
  describe('Render', () => {
    it('should render a main element', async () => {
      await setup();

      const main = screen.getByRole('main');

      expect(main).toBeInTheDocument();
    });

    it('should render a header element', async () => {
      await setup();

      const header = screen.getByRole('banner');

      expect(header).toBeInTheDocument();
    });

    it('should render the welcome title', async () => {
      await setup();

      const title = screen.getByRole('heading', {
        name: /welcome to storesy admin/i,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
