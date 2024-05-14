import { redirect } from 'next/navigation';

import { auth } from '@shared/libs/auth.lib';

import { AppLayout } from '@shared/layouts/app.layout';
import { LoginInterface } from '../interfaces/login.interface';

export async function LoginContainer() {
  const session = await auth();
  if (session) redirect('/dashboard');

  return (
    <AppLayout>
      <LoginInterface />
    </AppLayout>
  );
}
