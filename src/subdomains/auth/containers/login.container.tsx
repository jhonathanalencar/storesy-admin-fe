import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';

import { AppLayout } from '@shared/layouts/app.layout';
import { LoginInterface } from '../interfaces/login.interface';

interface LoginContainerProps {
  searchParams: {
    redirect_to?: string;
  };
}

export async function LoginContainer({ searchParams }: LoginContainerProps) {
  const { redirect_to = '/dashboard' } = searchParams;
  const session = await getSession();
  if (session) redirect(redirect_to);

  return (
    <AppLayout>
      <LoginInterface redirectTo={redirect_to} />
    </AppLayout>
  );
}
