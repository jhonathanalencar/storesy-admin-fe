'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { signOut } from '@shared/libs/auth.lib';
import { AddProductInput, addProduct } from './queries';

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

export async function addProductAction(data: AddProductInput) {
  try {
    await addProduct(data);
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Unable to create product' },
    };
  }
  revalidatePath('/dashboard/products');
}
