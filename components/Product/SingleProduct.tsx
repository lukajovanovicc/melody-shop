'use client';

import { Product } from '@/app/products/[id]/types';
import React, { FC, useState } from 'react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Minus, Plus, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { useCart } from '@/hooks/useCart';

interface Props {
  product: Product;
}

const SingleProduct: FC<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const { products, addToCart, deleteFromCart, updateProduct } = useCart();

  const added = products.find((p) => p.id === product.id);

  return (
    <div className='grid lg:grid-cols-2 gap-12'>
      {/* Product Images */}
      <div className='space-y-4'>
        <div className='aspect-square relative'>
          <Image
            src={product.images[selectedImage] || '/placeholder.svg'}
            alt={product.name}
            fill
            className='object-cover rounded-lg'
          />
          <Badge className='absolute top-4 left-4'>{product.badge}</Badge>
        </div>
        <div className='flex gap-2'>
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 rounded-md overflow-hidden border-2 ${
                selectedImage === index
                  ? 'border-primary'
                  : 'border-transparent'
              }`}
            >
              <Image
                src={image || '/placeholder.svg'}
                alt={`${product.name} ${index + 1}`}
                fill
                className='object-cover'
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className='space-y-6'>
        <div>
          <p className='text-sm text-muted-foreground mb-2'>
            {product.category}
          </p>
          <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
          <div className='flex items-center gap-4 mb-4'>
            <div className='flex items-center'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className='text-sm text-muted-foreground'>
              ({product.reviews} reviews)
            </span>
          </div>
          <p className='text-3xl font-bold text-primary mb-6'>
            ${product.price}
          </p>
        </div>

        <p className='text-muted-foreground leading-relaxed'>
          {product.description}
        </p>

        {/* Quantity and Add to Cart */}

        <div className='space-y-4'>
          {added && (
            <div className='flex items-center gap-4'>
              <span className='font-medium'>Quantity:</span>
              <div className='flex items-center border rounded-md'>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() =>
                    updateProduct(added.id, 'quantity', added.quantity - 1)
                  }
                  disabled={added.quantity <= 1}
                >
                  <Minus className='h-4 w-4' />
                </Button>
                <span className='px-4 py-2 min-w-[3rem] text-center'>
                  {added.quantity}
                </span>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() =>
                    updateProduct(added.id, 'quantity', added.quantity + 1)
                  }
                >
                  <Plus className='h-4 w-4' />
                </Button>
              </div>
              <span> ${(product.price * added.quantity).toLocaleString()}</span>
            </div>
          )}

          <Button
            variant={added ? 'destructive' : 'default'}
            size='lg'
            className='flex-1'
            onClick={() =>
              added ? deleteFromCart(product.id) : addToCart(product)
            }
          >
            {added
              ? 'Remove from Cart'
              : `Add to Cart - $${(
                  product.price * product.quantity
                ).toLocaleString()}`}
          </Button>

          <p className='text-sm text-muted-foreground'>
            {product.inStock ? (
              <span className='text-green-600'>
                ✓ In Stock - Ships within 2-3 business days
              </span>
            ) : (
              <span className='text-red-600'>Out of Stock</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
