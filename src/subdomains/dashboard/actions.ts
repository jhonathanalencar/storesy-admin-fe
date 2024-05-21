'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { signOut } from '@shared/libs/auth.lib';
import {
  AddProductInput,
  DeleteProductInput,
  ReleaseProductInput,
  addProduct,
  deleteProduct,
  releaseProduct,
} from './queries';

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

export async function releaseProductAction(data: ReleaseProductInput) {
  try {
    await releaseProduct(data);
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Failed to release product' },
    };
  }
  revalidatePath('/dashboard/products');
}

export async function releaseSelectedProductsAction(
  data: ReleaseProductInput[]
) {
  try {
    const releaseProductPromises = data.map((input) => releaseProduct(input));
    await Promise.all(releaseProductPromises);
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Failed to release products' },
    };
  }
  revalidatePath('/dashboard/products');
}

export async function deleteProductAction(data: DeleteProductInput) {
  try {
    await deleteProduct(data);
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Failed to delete product' },
    };
  }
  revalidatePath('/dashboard/products');
}

export async function deleteSelectedProductsAction(data: DeleteProductInput[]) {
  try {
    const deleteProductPromises = data.map((input) => deleteProduct(input));
    await Promise.all(deleteProductPromises);
  } catch (error) {
    console.error(error);
    return {
      error: { message: 'Failed to delete products' },
    };
  }
  revalidatePath('/dashboard/products');
}
