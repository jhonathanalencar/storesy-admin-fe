import 'server-only';

import type { TCategory, TProduct } from './types';

type GetProductsInput = {
  page: number;
  limit: number;
  query: string;
};

export type GetProductsOutput = {
  total: number;
  products: TProduct[];
};

export async function getProducts(
  input: GetProductsInput
): Promise<GetProductsOutput | undefined> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products?query=${input.query}&page=${input.page}&limit=${input.limit}`
  );
  if (!response.ok) return undefined;
  return response.json();
}

export type AddProductInput = {
  name: string;
  description: string;
  price: number;
  categories: string[];
  imageUrl: string;
  quantity: number;
  discountId?: string;
};

export async function addProduct(input: AddProductInput): Promise<void> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  if (!response.ok) throw new Error('Error creating user');
  return response.json();
}

export type GetCategoriesOutput = TCategory[];

export async function getCategories(): Promise<
  GetCategoriesOutput | undefined
> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/category`);
  if (!response.ok) return undefined;
  return response.json();
}
