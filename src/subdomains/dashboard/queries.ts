import 'server-only';

import type { TCategory, TDiscount, TProduct } from './types';

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

type GetProductInput = {
  productId: string;
};

type GetProductOutput = TProduct;

export async function getProduct(
  input: GetProductInput
): Promise<GetProductOutput | undefined> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/${input.productId}`
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

export type GetDiscountsOutput = {
  discounts: TDiscount[];
};

export async function getDiscounts(): Promise<GetDiscountsOutput | undefined> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/discount`);
  if (!response.ok) return undefined;
  return response.json();
}

export type ReleaseProductInput = {
  productId: string;
};

export async function releaseProduct(
  input: ReleaseProductInput
): Promise<void> {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/${input.productId}/release`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) throw new Error('Error occurred');
  return;
}

export type DeleteProductInput = {
  productId: string;
};

export async function deleteProduct(input: DeleteProductInput) {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/${input.productId}`,
    {
      method: 'DELETE',
    }
  );
  if (!response.ok) throw new Error('Error deleting product');
  return;
}

export type UpdateProductInput = {
  productId: string;
  name: string;
  description: string;
  summary: string;
  price: number;
  categories: string[];
  imageUrl: string;
  quantity: number;
  discountId?: string;
};

export async function updateProduct(input: UpdateProductInput) {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/products/${input.productId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    }
  );
  if (!response.ok) throw new Error('Error updating product');
  return;
}
