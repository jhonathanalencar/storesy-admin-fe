import { AppLayout } from '@shared/layouts/app.layout';
import { HomeInterface } from '../interfaces/home.interface';

export function HomeContainer() {
  return (
    <AppLayout>
      <HomeInterface />
    </AppLayout>
  );
}
