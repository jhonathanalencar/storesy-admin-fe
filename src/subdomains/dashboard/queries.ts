import 'server-only';

import type { TProduct } from './types';

export async function getProducts(
  input: GetProductsInput
): Promise<GetProductsOutput | undefined> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products?page=${input.page}&limit=${input.limit}`
  );
  if (!response.ok) return undefined;
  return response.json();
}

type GetProductsInput = {
  page: number;
  limit: number;
};

export type GetProductsOutput = {
  total: number;
  products: TProduct[];
};
