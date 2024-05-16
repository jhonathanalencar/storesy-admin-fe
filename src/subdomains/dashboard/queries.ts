import 'server-only';

import type { TProduct } from './types';

export async function getProducts(): Promise<TProduct[] | undefined> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/products`);
  if (!response.ok) return undefined;
  return response.json();
}
