import 'server-only';

import type { TProduct } from './types';

export async function getProducts(
  input: GetProductsInput
): Promise<GetProductsOutput | undefined> {
  let getProductsUrl = `${process.env.CATALOG_API_URL}/products`;
  if (input.page) {
    getProductsUrl = `${process.env.CATALOG_API_URL}/products?page=${input.page}`;
  }
  if (input.limit) {
    getProductsUrl = `${process.env.CATALOG_API_URL}/products?page=${input.page}&limit=${input.limit}`;
  }
  const response = await fetch(getProductsUrl);
  if (!response.ok) return undefined;
  return response.json();
}

type GetProductsInput = {
  page?: string;
  limit?: string;
};

export type GetProductsOutput = {
  total: number;
  products: TProduct[];
};
