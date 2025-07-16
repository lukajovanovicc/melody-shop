'use client';

import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useCart } from '@/hooks/useCart';

const CartItems = () => {
  const { products, updateProduct, deleteFromCart } = useCart();

  return (
    <>
      {products.map((item) => (
        <Card key={item.id}>
          <CardContent className='p-6'>
            <div className='flex sm:items-center flex-col sm:flex-row gap-4'>
              <Image
                src={item.images[0] || '/placeholder.svg'}
                alt={item.name}
                width={100}
                height={100}
                className='rounded-md'
              />
              <div className='flex-1'>
                <h3 className='font-semibold text-lg'>{item.name}</h3>
                <p className='text-muted-foreground'>${item.price}</p>
              </div>
              <div className='flex items-center gap-2'>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    updateProduct(item.id, 'quantity', item.quantity - 1)
                  }
                  disabled={item.quantity === 1}
                >
                  <Minus className='h-4 w-4' />
                </Button>
                <span className='w-12 text-center'>{item.quantity}</span>
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() =>
                    updateProduct(item.id, 'quantity', item.quantity + 1)
                  }
                >
                  <Plus className='h-4 w-4' />
                </Button>
              </div>
              <div className='text-right'>
                <p className='font-semibold'>
                  {(item.price * item.quantity).toFixed(2).toLocaleString()} RSD
                </p>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => deleteFromCart(item.id)}
                  className='text-red-500 hover:text-red-700'
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CartItems;
