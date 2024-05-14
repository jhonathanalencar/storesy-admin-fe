import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';

import { DashboardInterface } from '../interfaces/dashboard.interface';
import { DashboardLayout } from '@shared/layouts/dashboard.layout';

export async function DashboardContainer() {
  const session = await getSession();
  if (!session || !session.user) {
    redirect('/auth/login?redirect_to=/dashboard');
  }

  return (
    <DashboardLayout>
      <DashboardInterface userName={session.user.name ?? ''} />
    </DashboardLayout>
  );
}
