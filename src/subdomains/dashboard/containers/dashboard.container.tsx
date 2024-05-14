import { redirect } from 'next/navigation';

import { auth } from '@shared/libs/auth.lib';

import { DashboardInterface } from '../interfaces/dashboard.interface';
import { DashboardLayout } from '@shared/layouts/dashboard.layout';

export async function DashboardContainer() {
  const session = await auth();
  if (!session || !session.user) redirect('/auth/login');

  return (
    <DashboardLayout>
      <DashboardInterface userName={session.user.name ?? ''} />
    </DashboardLayout>
  );
}
