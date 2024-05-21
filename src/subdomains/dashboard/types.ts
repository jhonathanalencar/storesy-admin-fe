export type TProduct = {
  productId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  categories: string[];
  imageUrl: string;
  quantity: number;
  discountPercent: number;
  active: boolean;
  rateAmount: number;
  totalScore: number;
  releasedDate?: string;
};

export type TCategory = {
  categoryId: string;
  name: string;
  slug: string;
  department: string;
};

export type TDiscount = {
  discountId: string;
  discountPercent: number;
  active: boolean;
};
