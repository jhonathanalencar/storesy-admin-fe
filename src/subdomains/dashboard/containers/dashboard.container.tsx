import { AppLayout } from '@shared/layouts/app.layout';
import { DashboardInterface } from '../interfaces/dashboard.interface';

export function DashboardContainer() {
  return (
    <AppLayout>
      <DashboardInterface />
    </AppLayout>
  );
}
