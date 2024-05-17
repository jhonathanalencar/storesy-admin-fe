'use server';

import { redirect } from 'next/navigation';

import { signOut } from '@shared/libs/auth.lib';

export async function signOutAction() {
  await signOut({
    redirectTo: '/',
    redirect: true,
  });
}

export async function searchAction(formData: FormData) {
  const searchQuery = formData.get('query')?.toString();
  if (searchQuery) {
    redirect(`/dashboard/products?query=${searchQuery}`);
  }
  redirect('/dashboard/products');
}
