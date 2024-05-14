import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';

import { AppLayout } from '@shared/layouts/app.layout';
import { LoginInterface } from '../interfaces/login.interface';

export async function LoginContainer() {
  const session = await getSession();
  if (session) redirect('/dashboard');

  return (
    <AppLayout>
      <LoginInterface />
    </AppLayout>
  );
}
