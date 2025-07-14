import { Product } from '@/app/products/[id]/types';
import { create } from 'zustand';

interface StoreCart {
  products: Product[];
  addToCart: (product: Product) => void;
  deleteFromCart: (id: number) => void;
  updateProduct: <K extends keyof Product>(
    id: number,
    field: K,
    value: Product[K]
  ) => void;
}

export const useCart = create<StoreCart>((set) => ({
  products: [],
  addToCart: (product) =>
    set((state) => {
      const alreadyExists = state.products.some((p) => p.id === product.id);
      if (alreadyExists) {
        return state;
      }
      return {
        products: [...state.products, product],
      };
    }),
  deleteFromCart: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  updateProduct: (id, field, value) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, [field]: value } : product
      ),
    })),
}));
