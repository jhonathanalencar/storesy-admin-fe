import { DashboardInterface } from '../interfaces/dashboard.interface';
import { DashboardLayout } from '@shared/layouts/dashboard.layout';

export function DashboardContainer() {
  return (
    <DashboardLayout>
      <DashboardInterface />
    </DashboardLayout>
  );
}
