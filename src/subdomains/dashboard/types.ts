export type TProduct = {
  productId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  categories: string[];
  imageUrl: string;
  quantity: number;
  releasedDate: string;
  discountPercent: number;
  active: boolean;
  rateAmount: number;
  totalScore: number;
};

export type TCategory = {
  categoryId: string;
  name: string;
  slug: string;
  department: string;
};
