import { redirect } from 'next/navigation';

import { getSession } from '@shared/libs/get-session.lib';

import { DashboardLayout } from '@shared/layouts/dashboard.layout';
import { ProductsInterface } from '../interfaces/products.interface';

export async function ProductsContainer() {
  const session = await getSession();
  if (!session || !session.user) {
    redirect('/auth/login?redirect_to=/dashboard/products');
  }

  return (
    <DashboardLayout>
      <ProductsInterface />
    </DashboardLayout>
  );
}
