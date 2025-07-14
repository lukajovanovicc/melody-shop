'use client';

import { Product } from '@/app/products/[id]/types';
import React, { FC } from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Star, Trash } from 'lucide-react';
import { Button } from '../ui/button';
import { useCart } from '@/hooks/useCart';
import Link from 'next/link';

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { products, addToCart, deleteFromCart } = useCart();

  const added = products.find((p) => p.id === product.id);

  return (
    <Link href={`/products/${product.id}`}>
      <Card className='group hover:shadow-lg transition-shadow'>
        <CardContent className='p-0'>
          <div className='relative'>
            <Image
              src={product.images[0] || '/placeholder.svg'}
              alt={product.name}
              width={300}
              height={300}
              className='w-full h-48 object-cover rounded-t-lg'
            />
            <Badge className='absolute top-2 left-2'>{product.badge}</Badge>
          </div>
          <div className='p-4'>
            <h3 className='font-semibold mb-2'>{product.name}</h3>
            <div className='flex items-center mb-2'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < product.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-xl font-bold text-primary'>
                {product.price}
              </span>
              <Button
                variant={added ? 'destructive' : 'default'}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  added ? deleteFromCart(product.id) : addToCart(product);
                }}
                size='sm'
              >
                {added ? (
                  <p className='flex items-center'>
                    Remove <Trash className='ml-2' />
                  </p>
                ) : (
                  'Add to Cart'
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
