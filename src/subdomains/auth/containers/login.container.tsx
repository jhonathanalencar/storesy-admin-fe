import { AppLayout } from '@shared/layouts/app.layout';
import { LoginInterface } from '../interfaces/login.interface';

export function LoginContainer() {
  return (
    <AppLayout>
      <LoginInterface />
    </AppLayout>
  );
}
