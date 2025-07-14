export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  rating: number;
  images: string[];
  badge?: string;
  category: string;
  description: string;
  inStock: boolean;
  reviews: number;
}
